import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUp,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  MessageCircle, // ✅ WhatsApp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

/* ================= LOGO ================= */
const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="TECHINS Logo" className="w-10 h-10 object-contain" />
      <span className="text-xl font-bold text-white dark:text-black">
        TECH<span className="text-[#faa114]">INS</span>
      </span>
    </div>
  );
};

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
      { name: "Foundation X", path: "/courses#foundation-x" },
      { name: "Applied Learning Lab", path: "/courses#applied-learning-lab" },
      { name: "Exam Ready", path: "/courses#exam-ready" },
      { name: "Concept → Clarity", path: "/courses#concept-clarity" },
      { name: "Future Map", path: "/courses#future-map" },
    ],
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/techins_official?igsh=d3dwMGFsaDd0NXo4&utm_source=qr",
      label: "Instagram",
    },
    // {
    //   icon: Linkedin,
    //   href: "#",
    //   label: "LinkedIn",
    // },
    // {
    //   icon: Twitter,
    //   href: "#",
    //   label: "Twitter",
    // },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/185JhKfFmP/",
      label: "Facebook",
    },
    {
      icon: MessageCircle, 
      href: "https://whatsapp.com/channel/0029Vb6w63i7NoZsxOXTML15",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-[#786e67] dark:bg-[#c4bfb2]">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* BRAND */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Link to="/">
              <Logo />
            </Link>

            <p className="text-white/90 dark:text-black text-sm">
              Empowering the next generation of tech leaders through innovative education.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-lg bg-white/20 text-white dark:bg-black/10 dark:text-black"
                >
                  <s.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-white dark:text-black mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.path}
                    className="text-white/90 dark:text-black hover:underline text-sm"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* POPULAR COURSES */}
          <div>
            <h4 className="font-semibold text-white dark:text-black mb-4">
              Popular Courses
            </h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.path}
                    className="text-white/90 dark:text-black hover:underline text-sm"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-white dark:text-black mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/90 dark:text-black">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-1" />
                Kodikal St, Lalapettai, Tamil Nadu 639105
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:techins.ceo@gmail.com">
                  techins.ceo@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+916383148233">+91 63831 48233</a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-white/30 flex justify-between items-center">
          <p className="text-white/90 dark:text-black text-sm">
            © {new Date().getFullYear()} TECHINS
          </p>

          <Button
            size="icon"
            variant="outline"
            onClick={scrollToTop}
            className="rounded-full"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
