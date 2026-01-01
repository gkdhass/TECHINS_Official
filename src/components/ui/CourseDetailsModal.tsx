import { motion, AnimatePresence } from "framer-motion";

interface CourseDetails {
  title: string;
  image: string;
  mode?: string;
  duration?: string;
  classLevel?: string;
  language?: string;
  amount?: string;
  description?: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  course: CourseDetails | null;
}

const CourseDetailsModal = ({ isOpen, onClose, course }: Props) => {
  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-[#262a2b] rounded-xl p-6 max-w-lg w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            {/* TITLE */}
            <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
              {course.title}
            </h2>

            {/* IMAGE */}
            <img
              src={course.image}
              alt={course.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />

            {/* INFO */}
            <ul className="space-y-2 text-sm text-black dark:text-gray-300">
              {course.mode && (
                <li>
                  <strong>Mode:</strong> {course.mode}
                </li>
              )}
              {course.duration && (
                <li>
                  <strong>Duration:</strong> {course.duration}
                </li>
              )}
              {course.classLevel && (
                <li>
                  <strong>Class Level:</strong> {course.classLevel}
                </li>
              )}
              {course.language && (
                <li>
                  <strong>Language:</strong> {course.language}
                </li>
              )}
              {course.amount && (
                <li>
                  <strong>Amount:</strong> {course.amount}
                </li>
              )}
            </ul>

            {/* DESCRIPTION */}
            <p className="mt-4 text-sm opacity-80 text-black dark:text-gray-400">
              {course.description ||
                "Hands-on learning with practical guidance and real-world understanding."}
            </p>

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="mt-6 w-full py-2 rounded-lg bg-[#faa114] text-black font-semibold hover:opacity-90 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CourseDetailsModal;
