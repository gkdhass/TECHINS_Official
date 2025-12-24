import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Events", path: "/events" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our courses or events? We'd love to hear from
              you. Send us a message and we'll respond as soon as possible.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>

                {isSuccess ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          required
                          className="bg-secondary border-border"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          required
                          className="bg-secondary border-border"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-secondary border-border"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        required
                        className="bg-secondary border-border"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        rows={5}
                        className="bg-secondary border-border resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 btn-glow"
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
                    </motion.div>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right" className="space-y-8">
              {/* Quick Links */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Details */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:hello@techins.edu"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        hello@techins.edu
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        123 Tech Street, Innovation Hub,
                        <br />
                        Silicon Valley, CA 94025
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="bg-card border border-border rounded-2xl overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.24090981952!2d-122.11014052852113!3d37.39407899829653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TECHINS Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
