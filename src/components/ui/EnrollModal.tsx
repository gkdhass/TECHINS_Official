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
  type: "course" | "event";
}

interface FormState {
  name: string;
  email: string;
  phone: string;
}

const inputClass =
  "bg-[#fcfcfb] text-[#262a2b] placeholder:text-[#6b6b6b]";

const EMAIL_CONFIG = {
  course: {
    serviceId: "service_gl8c1jd",
    templateId: "template_ohu1s5k",
    publicKey: "CDLHR5ifjiKvN5taS",
  },
  event: {
    serviceId: "service_gl8c1jd",
    templateId: "template_a1yk0cn",
    publicKey: "CDLHR5ifjiKvN5taS",
  },
};

const EnrollModal: React.FC<Props> = ({
  isOpen,
  onClose,
  courseName,
  type,
}) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const resetState = () => {
    setForm({ name: "", email: "", phone: "" });
    setLoading(false);
    setSuccess(false);
  };

  const handleCancel = () => {
    resetState();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const config = EMAIL_CONFIG[type];

    try {
      await emailjs.send(
        config.serviceId,
        config.templateId,
        {
          user_name: form.name,
          user_email: form.email,
          user_phone: form.phone,
          course_name: courseName,
          type: type.toUpperCase(),
        },
        config.publicKey
      );

      setSuccess(true);

      setTimeout(() => {
        resetState();
        onClose();
      }, 2000);
    } catch (error) {
      alert("Mail sending failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#262a2b] text-white border border-white/10 rounded-2xl w-full max-w-md p-6"
          >
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Registration Successful
                  </h3>
                  <p className="text-sm text-white/70">
                    Confirmation mail has been sent
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form">
                  <h2 className="text-2xl font-bold mb-1">
                    Register for
                  </h2>

                  <p className="text-[#faa114] font-semibold mb-4">
                    {courseName}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      className={inputClass}
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                    />

                    <Input
                      className={inputClass}
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />

                    <Input
                      className={inputClass}
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      required
                    />

                    <div className="flex gap-3 pt-2">
                      <Button
                        type="button"
                        onClick={handleCancel}
                        disabled={loading}
                        className="w-1/2 bg-transparent border border-white/20"
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-1/2 bg-[#faa114] text-black"
                      >
                        {loading ? "Sending..." : "Confirm"}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnrollModal;
