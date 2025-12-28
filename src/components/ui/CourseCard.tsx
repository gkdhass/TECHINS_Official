interface CourseCardProps {
  title: string;
  image: string;
  duration: string;
  language: string;
  price: string;
  onEnroll: () => void;
  onMore: () => void;
}

const CourseCard = ({
  title,
  image,
  duration,
  language,
  price,
  onEnroll,
  onMore,
}: CourseCardProps) => {
  return (
    <div className="p-4 text-white">
      <img src={image} alt={title} className="rounded-lg mb-4" />

      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm opacity-80">
        {duration} • {language}
      </p>
      <p className="font-semibold mt-2">{price}</p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={onMore}
          className="w-1/2 py-2 rounded-lg border border-[#faa114] text-[#faa114]"
        >
          More
        </button>

        <button
          onClick={onEnroll}
          className="w-1/2 py-2 rounded-lg bg-[#faa114] text-black"
        >
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
