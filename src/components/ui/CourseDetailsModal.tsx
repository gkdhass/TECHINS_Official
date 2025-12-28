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
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>

            <img
              src={course.image}
              alt={course.title}
              className="rounded-lg mb-4"
            />

            <ul className="space-y-2 text-sm opacity-90">
              <li>Duration: {course.duration}</li>
              <li>Language: {course.language}</li>
              <li>Price: {course.price}</li>
            </ul>

            <p className="mt-4 text-sm opacity-80">
              Hands-on learning, real-world projects, and mentor guidance to make
              you job-ready.
            </p>

            <button
              onClick={onClose}
              className="mt-6 w-full py-2 rounded-lg bg-[#faa114] text-black"
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
