import { motion } from "framer-motion";
import { Clock, Globe, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  image: string;
  duration: string;
  language: string;
  price: string;
  onEnroll: () => void;
}

const CourseCard = ({
  title,
  image,
  duration,
  language,
  price,
  onEnroll,
}: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-card border border-border rounded-xl overflow-hidden card-hover-glow group"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-foreground mb-3 line-clamp-2">
          {title}
        </h3>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-accent" />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <Globe className="w-4 h-4 text-accent" />
            {language}
          </span>
          <span className="flex items-center gap-1">
            <IndianRupee className="w-4 h-4 text-accent" />
            {price}
          </span>
        </div>
        <Button
          onClick={onEnroll}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 btn-glow"
        >
          Enroll Now
        </Button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
