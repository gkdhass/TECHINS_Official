import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  Instagram,
  Linkedin,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";

/* ================= X ICON ================= */
const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2H21.552L14.378 10.193L22.824 22H16.264L11.13 14.927L4.93 22H1.62L9.3 13.22L1.176 2H7.904L12.55 8.393L18.244 2ZM17.083 20.013H18.914L6.89 3.882H4.924L17.083 20.013Z"/>
  </svg>
);

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInternship, setIsInternship] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    college: "",
    degree: "",
    year: "",
    role: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = "service_gysyqzh";
    const publicKey = "k1exk0SpjJkiyVWhP";
    const templateId = isInternship
      ? "template_zntipqc"
      : "template_zxax9vu";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          college: isInternship ? formData.college : "",
          degree: isInternship ? formData.degree : "",
          year: isInternship ? formData.year : "",
          role: isInternship ? formData.role : "",
          form_type: isInternship
            ? "Internship Application"
            : "General Contact",
          to_name: "TECHINS",
        },
        publicKey
      );

      setIsSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        college: "",
        degree: "",
        year: "",
        role: "",
      });
      setIsInternship(false);
      setTimeout(() => setIsSuccess(false), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Events", path: "/events" },
  ];

  /* ================= SOCIAL LINKS ================= */
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/techins_official",
    },
    // {
    //   icon: Linkedin,
    //   href: "#",
    // },
    // {
    //   icon: XIcon, 
    //   href: "https://x.com/",
    // },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/185JhKfFmP/",
    },
    {
      icon: MessageCircle, // WhatsApp
      href: "https://whatsapp.com/channel/0029Vb6w63i7NoZsxOXTML15",
    },
  ];

  return (
    <Layout>
      <section className="py-16 bg-[#fffcf2] dark:bg-[#00030d]">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-4 py-2 bg-[#fa9a02]/10 text-[#fa9a02] rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl font-bold mb-4">
              Get in <span className="text-[#fa9a02]">Touch</span>
            </h1>
            <p className="opacity-80">
              Have questions or want to be part of TECHINS? We’d love to hear from you.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* FORM */}
            <AnimatedSection direction="left">
              <div className="bg-[#786e67] dark:bg-[#1a1d1f] rounded-2xl p-8 text-white">
                {isSuccess ? (
                  <div className="text-center py-10">
                    <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold">Message Sent!</h3>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                      <Input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <Input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                    <Textarea name="message" rows={4} placeholder="Message" value={formData.message} onChange={handleChange} required />
                    <Button type="submit" disabled={isLoading} className="w-full bg-[#fa9a02] text-black">
                      {isLoading ? <Loader2 className="animate-spin" /> : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* INFO */}
            <AnimatedSection direction="right" className="space-y-6">
              <div className="bg-[#786e67] dark:bg-[#1a1d1f] rounded-2xl p-6 text-white">
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  {quickLinks.map((l) => (
                    <li key={l.name}>
                      <Link to={l.path}>{l.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#786e67] dark:bg-[#1a1d1f] rounded-2xl p-6 text-white space-y-2 text-sm">
                <p className="flex items-center gap-2"><Mail size={16}/> techins2024@gmail.com</p>
                <p className="flex items-center gap-2"><Phone size={16}/> +91 63831 48233</p>
                <p className="flex items-center gap-2"><MapPin size={16}/> Kodikkal Street, Lalapettai, Karur, Tamil Nadu – 639105</p>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-lg bg-[#fffcf2] dark:bg-[#00030d] text-[#fa9a02]"
                  >
                    <s.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
