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
  Twitter,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";

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
    const contactTemplateId = "template_zxax9vu";
    const internshipTemplateId = "template_zntipqc";

    const templateId = isInternship
      ? internshipTemplateId
      : contactTemplateId;

    const templateParams = {
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
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
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
    } catch {
      alert("Failed to send message. Please try again.");
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

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="py-14 sm:py-20 bg-[#dbd7c7] dark:bg-[#b3aa9e] text-[#262a2b] dark:text-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 bg-[#faa114]/20 text-[#faa114] rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Get in <span className="text-[#faa114]">Touch</span>
            </h1>
            <p className="text-base sm:text-lg opacity-80">
              Have questions or want to be part of TECHINS? We’d love to hear from you.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* FORM */}
            <AnimatedSection direction="left">
              <div className="bg-[#786e67] dark:bg-[#262a2b] border rounded-2xl p-5 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-6">
                  Send us a Message
                </h2>

                {isSuccess ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-10"
                  >
                    <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="opacity-80 text-sm">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Toggle Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        type="button"
                        className={`w-full ${
                          !isInternship
                            ? "bg-[#faa114] text-black"
                            : "border"
                        }`}
                        onClick={() => setIsInternship(false)}
                      >
                        Contact Us
                      </Button>

                      <Button
                        type="button"
                        className={`w-full ${
                          isInternship
                            ? "bg-[#faa114] text-black"
                            : "border"
                        }`}
                        onClick={() => setIsInternship(true)}
                      >
                        Internship Apply
                      </Button>
                    </div>

                    {/* Names */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>First Name</Label>
                        <Input name="firstName" value={formData.firstName} onChange={handleChange} required />
                      </div>
                      <div>
                        <Label>Last Name</Label>
                        <Input name="lastName" value={formData.lastName} onChange={handleChange} required />
                      </div>
                    </div>

                    <div>
                      <Label>Email</Label>
                      <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div>
                      <Label>Phone</Label>
                      <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>

                    {isInternship && (
                      <>
                        <div>
                          <Label>Institution Name</Label>
                          <Input name="college" value={formData.college} onChange={handleChange} required />
                        </div>

                        <div>
                          <Label>Degree</Label>
                          <Input name="degree" value={formData.degree} onChange={handleChange} required />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Input name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
                          <Input name="role" placeholder="Role Interested" value={formData.role} onChange={handleChange} required />
                        </div>
                      </>
                    )}

                    <div>
                      <Label>Message</Label>
                      <Textarea rows={4} name="message" value={formData.message} onChange={handleChange} required />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#faa114] text-black py-3 text-base"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* INFO */}
            <AnimatedSection direction="right" className="space-y-6">
              <div className="bg-[#786e67] dark:bg-[#262a2b] border rounded-2xl p-5 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  {quickLinks.map((l) => (
                    <li key={l.name}>
                      <Link to={l.path}>{l.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#786e67] dark:bg-[#262a2b] border rounded-2xl p-5 sm:p-6 space-y-2 text-sm">
                <p className="flex items-center gap-2"><Mail size={16} /> techins2024@gmail.com</p>
                <p className="flex items-center gap-2"><Phone size={16} /> +91 123456789</p>
                <p className="flex items-center gap-2"><MapPin size={16} /> Karur, Tamil Nadu</p>
              </div>

              <div className="bg-[#786e67] dark:bg-[#262a2b] border rounded-2xl p-5 sm:p-6">
                <div className="flex gap-3 justify-center sm:justify-start">
                  {socialLinks.map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.href}
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-lg bg-[#dbd7c7] dark:bg-[#b3aa9e]"
                    >
                      <s.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
