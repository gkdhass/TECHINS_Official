import { motion, AnimatePresence } from "framer-motion";

const CourseDetailsModal = ({ isOpen, onClose, course }: any) => {
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
            {/* Title */}
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">
              {course.title}
            </h2>

            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />

            {/* Course Info */}
            <ul className="space-y-2 text-sm opacity-90 text-black dark:text-gray-300">
              <li><strong>Duration:</strong> {course.duration}</li>
              <li><strong>Language:</strong> {course.language}</li>
              <li><strong>Price:</strong> {course.price}</li>
            </ul>

            {/* UPDATED DESCRIPTION */}
            <p className="mt-4 text-sm opacity-80 text-black dark:text-gray-400">
              {course.description
                ? course.description
                : "Hands-on learning with real-world projects and expert mentor guidance."}
            </p>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="mt-6 w-full py-2 rounded-lg bg-[#faa114] text-black font-semibold"
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
