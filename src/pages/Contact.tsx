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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = "service_m8prvnc";
    const templateId = "template_049akar";
    const publicKey = "C3kSMsITJ-JZMpXE7";

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      form_type: isInternship ? "Internship Application" : "General Contact",
      college: formData.college,
      degree: formData.degree,
      year: formData.year,
      role: formData.role,
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
      <section className="py-20 bg-[#dbd7c7] dark:bg-[#b3aa9e] text-[#262a2b] dark:text-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-[#faa114]/20 text-[#faa114] rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Get in <span className="text-[#faa114]">Touch</span>
            </h1>
            <p className="text-lg opacity-80">
              Have questions or want to be part of TECHINS? We’d love to hear from you.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* FORM */}
            <AnimatedSection direction="left">
              <div className="bg-[#786e67] dark:bg-[#262a2b] border rounded-2xl p-6 lg:p-8 text-[#262a2b] dark:text-[#f5f5f5]">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                {isSuccess ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="opacity-80">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant={!isInternship ? "default" : "outline"}
                        className="w-full bg-[#faa114] hover:bg-[#e5940f] text-black"
                        onClick={() => setIsInternship(false)}
                      >
                        Contact Us
                      </Button>
                      <Button
                        type="button"
                        variant={isInternship ? "default" : "outline"}
                        className="w-full bg-[#faa114] hover:bg-[#e5940f] text-black"
                        onClick={() => setIsInternship(true)}
                      >
                        Internship Apply
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label>First Name</Label>
                        <Input name="firstName" value={formData.firstName} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label>Last Name</Label>
                        <Input name="lastName" value={formData.lastName} onChange={handleChange} required />
                      </div>
                    </div>

                    <Label>Email</Label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} required />

                    <Label>Phone</Label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                    {isInternship && (
                      <>
                        <Label>Institution Name</Label>
                        <Input name="college" value={formData.college} onChange={handleChange} required />

                        <Label>Degree</Label>
                        <Input name="degree" value={formData.degree} onChange={handleChange} required />

                        <div className="grid md:grid-cols-2 gap-5">
                          <Input name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
                          <Input name="role" placeholder="Role Interested" value={formData.role} onChange={handleChange} required />
                        </div>
                      </>
                    )}

                    <Label>Message</Label>
                    <Textarea rows={5} name="message" value={formData.message} onChange={handleChange} required />

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#faa114] hover:bg-[#e5940f] text-black"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* INFO */}
            <AnimatedSection direction="right" className="space-y-8">
              <div className="bg-[#786e67] dark:bg-[#262a2b] border rounded-2xl p-6 text-[#262a2b] dark:text-[#f5f5f5]">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((l) => (
                    <li key={l.name}>
                      <Link to={l.path}>{l.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#786e67] dark:bg-[#262a2b] border rounded-2xl p-6 text-[#262a2b] dark:text-[#f5f5f5]">
                <p className="flex items-center gap-2"><Mail /> techins2024@gmail.com</p>
                <p className="flex items-center gap-2"><Phone /> +91 123456789</p>
                <p className="flex items-center gap-2"><MapPin /> Karur, Tamil Nadu</p>
              </div>

              <div className="bg-[#786e67] dark:bg-[#262a2b] border rounded-2xl p-6">
                <div className="flex gap-3">
                  {socialLinks.map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.href}
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-lg bg-[#dbd7c7] dark:bg-[#b3aa9e]"
                    >
                      <s.icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-12 bg-[#dbd7c7] dark:bg-[#b3aa9e]">
        <div className="container mx-auto px-4">
          <div className="bg-[#786e67] dark:bg-[#262a2b] border rounded-2xl overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.195541965248!2d78.0679576!3d10.9651516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f072495398f%3A0x947cfc7a1f7d9f1b!2sKarur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1733740000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="TECHINS Location - Karur"
            />
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;






