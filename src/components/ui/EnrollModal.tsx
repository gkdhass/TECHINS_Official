import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

/* Input UI */
const inputClass =
  "bg-[#fcfcfb] text-[#262a2b] placeholder:text-[#6b6b6b] disabled:opacity-100 disabled:text-[#262a2b]";

const EnrollModal: React.FC<Props> = ({ isOpen, onClose, courseName }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCancel = () => {
    setForm({ name: "", email: "", phone: "" });
    setLoading(false);
    setSuccess(false);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_84zlozt",
        "template_hkwbt6e",
        {
          user_name: form.name,
          user_email: form.email,
          user_phone: form.phone,
          event_name: courseName,
        },
        "Mv2ZLk8xbhYJuDxyW"
      );

      setSuccess(true);
      setForm({ name: "", email: "", phone: "" });

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch {
      alert("Mail send failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#262a2b] text-white border border-white/10 rounded-2xl w-full max-w-md p-6"
      >
        <AnimatePresence mode="wait">
          {/* ✅ SUCCESS POP */}
          {success ? (
            <motion.div
              key="success"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
              >
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-2">
                Registration Successful 🎉
              </h3>
              <p className="text-sm text-white/70">
                Confirmation mail has been sent to you
              </p>
            </motion.div>
          ) : (
            /* FORM */
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-2xl font-bold mb-2">
                Register for{" "}
                <span className="text-[#faa114]">{courseName}</span>
              </h2>

              <p className="text-sm text-white/70 mb-6">
                Fill the details below to confirm your registration
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input className={inputClass} value={courseName} disabled />

                <Input
                  className={inputClass}
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />

                <Input
                  className={inputClass}
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />

                <Input
                  className={inputClass}
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    onClick={handleCancel}
                    disabled={loading}
                    className="w-1/2 bg-transparent border border-white/20 text-white hover:bg-white/10"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-1/2 bg-[#faa114] text-black hover:bg-[#e5940f]"
                  >
                    {loading ? "Sending..." : "Confirm Registration"}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default EnrollModal;
