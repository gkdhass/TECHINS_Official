import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUp,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src={logo} alt="TECHINS Logo" className="w-10 h-10 object-contain" />
    <span className="text-xl font-bold text-white">
      TECH<span className="text-[#faa114]">INS</span>
    </span>
  </div>
);

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const footerLinks = {
    quickLinks: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Courses", path: "/courses" },
      { name: "Events", path: "/events" },
    ],
    courses: [
      { name: "Concept → Clarity", path: "/courses#concept-clarity" },
      { name: "Applied Learning Lab", path: "/courses#applied-learning-lab" },
      { name: "Future Map", path: "/courses#future-map" },
      { name: "Exam Ready", path: "/courses#exam-ready" },
      { name: "Foundation X", path: "/courses#foundation-x" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/techins_official", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/share/185JhKfFmP/", label: "Facebook" },
    { icon: MessageCircle, href: "https://whatsapp.com/channel/0029Vb6w63i7NoZsxOXTML15", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-[#1a1f1a] dark:bg-[#070d07]">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* BRAND */}
          <motion.div className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Link to="/"><Logo /></Link>
            <p className="text-white/70 text-sm">
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
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-[#fa9a02]/20 hover:text-[#fa9a02] transition-colors"
                >
                  <s.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-white/70 hover:text-[#fa9a02] transition-colors text-sm">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* POPULAR COURSES */}
          <div>
            <h4 className="font-semibold text-white mb-4">Popular Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((c) => (
                <li key={c.name}>
                  <a href={c.path} className="text-white/70 hover:text-[#fa9a02] transition-colors text-sm">
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                Kodikkal Street, Lalapettai, Karur,<br />Tamil Nadu – 639105
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:techins.ceo@gmail.com" className="hover:text-[#fa9a02] transition-colors">
                  techins.ceo@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+916383148233" className="hover:text-[#fa9a02] transition-colors">
                  +91 63831 48233
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} TECHINS</p>
          <Button
            size="icon"
            variant="outline"
            onClick={scrollToTop}
            className="rounded-full border-white/20 text-white hover:bg-white/10"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
