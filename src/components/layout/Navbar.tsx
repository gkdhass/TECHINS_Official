import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const baseShadow =
    theme === "dark"
      ? "drop-shadow(0 0 10px rgba(255,255,255,0.4))"
      : "drop-shadow(0 0 8px rgba(0,0,0,0.3))";

  const hoverShadow =
    theme === "dark"
      ? "drop-shadow(0 0 14px rgba(255,255,255,0.7))"
      : "drop-shadow(0 0 12px rgba(0,0,0,0.5))";

  const activeShadow =
    theme === "dark"
      ? "drop-shadow(0 0 20px rgba(255,255,255,1))"
      : "drop-shadow(0 0 18px rgba(0,0,0,0.8))";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#B7B7B7] dark:bg-[#0C120C] backdrop-blur-md border-b border-black/10 dark:border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 select-none">
            <motion.img
              src={logo}
              alt="TECHINS Logo"
              drag
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              style={{ filter: baseShadow }}
              whileHover={{ scale: 1.08, filter: hoverShadow }}
              whileTap={{ scale: 0.95, filter: activeShadow }}
              whileDrag={{ scale: 1.1, filter: activeShadow }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="w-14 h-14 object-contain cursor-pointer"
            />
            <span className="text-xl lg:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              TECH<span className="text-[#fa9a02]">INS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative py-2 text-neutral-800 dark:text-neutral-200 hover:text-[#fa9a02] dark:hover:text-[#fa9a02] transition-colors font-medium"
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fa9a02]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-neutral-800 dark:text-neutral-200"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </motion.button>

            <motion.button
              className="lg:hidden text-neutral-800 dark:text-neutral-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-[#B7B7B7] dark:bg-[#0C120C]"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 rounded-lg text-neutral-800 dark:text-neutral-200 hover:bg-black/10 dark:hover:bg-white/10"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
