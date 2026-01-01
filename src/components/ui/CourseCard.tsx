interface CourseCardProps {
  title: string;
  image: string;
  duration?: string;
  language?: string;
  classLevel?: string;
  amount?: string;
  onEnroll: () => void;
  onMore: () => void;
}

const CourseCard = ({
  title,
  image,
  duration,
  language,
  classLevel,
  amount,
  onEnroll,
  onMore,
}: CourseCardProps) => {
  return (
    <div className="p-4 text-white">
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-4 w-full h-40 object-cover"
      />

      <h3 className="text-lg font-bold mb-1">{title}</h3>

      {(duration || language) && (
        <p className="text-sm opacity-80">
          {duration && <span>{duration}</span>}
          {duration && language && " • "}
          {language && <span>{language}</span>}
        </p>
      )}

      {classLevel && (
        <p className="text-sm mt-1 opacity-90">
          <span className="font-medium">Class:</span> {classLevel}
        </p>
      )}

      {amount && (
        <p className="font-semibold mt-2 text-[#faa114]">
          {amount}
        </p>
      )}

      <div className="flex gap-3 mt-4">
        <button
          onClick={onMore}
          className="w-1/2 py-2 rounded-lg border border-[#faa114] text-[#faa114] hover:bg-[#faa114]/10 transition"
        >
          More
        </button>

        <button
          onClick={onEnroll}
          className="w-1/2 py-2 rounded-lg bg-[#faa114] text-black hover:opacity-90 transition"
        >
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
