import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Courses", path: "/courses" },
      { name: "Events", path: "/events" },
    ],
    courses: [
      { name: "Web Development", path: "/courses" },
      { name: "Data Science", path: "/courses" },
      { name: "Cloud Computing", path: "/courses" },
      { name: "Cybersecurity", path: "/courses" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-[#786e67] dark:bg-[#c4bfb2]">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-black text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white dark:text-black">
                TECH<span>INS</span>
              </span>
            </Link>

            <p className="text-white/90 dark:text-black text-sm leading-relaxed">
              Empowering the next generation of tech leaders through innovative
              education and industry-relevant training programs.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-white/20 text-white hover:bg-black hover:text-white dark:bg-black/10 dark:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white dark:text-black mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/90 dark:text-black hover:underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white dark:text-black mb-4">
              Popular Courses
            </h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/90 dark:text-black hover:underline text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-white dark:text-black mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/90 dark:text-black text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  123 Tech Street, Innovation Hub, Silicon Valley, CA 94025
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/90 dark:text-black text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:hello@techins.edu" className="hover:underline">
                  hello@techins.edu
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/90 dark:text-black text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/30 dark:border-black/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/90 dark:text-black text-sm text-center md:text-left">
            © {new Date().getFullYear()} TECHINS. All rights reserved.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-white text-white hover:bg-black hover:text-white dark:border-black dark:text-black dark:hover:bg-black dark:hover:text-white"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
