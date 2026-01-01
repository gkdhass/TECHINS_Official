import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ImageCarousel from "@/components/ui/ImageCarousel";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

/* ================= ANIMATIONS ================= */

/* 🔹 Slower text reveal */
const textRevealVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.2,          // ⏳ slower stagger
      duration: 1.1,           // ⏳ slower animation
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

/* 🔹 Slower section entry */
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,           // ⏳ slower
      ease: "easeInOut",
    },
  },
};

/* 🔹 Slower stagger */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,    // ⏳ slower stagger
    },
  },
};

/* 🔹 Slower cards */
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.0,           // ⏳ slower
      ease: "easeOut",
    },
  },
};

/* 🔹 Slower icon pop */
const iconVariants = {
  hidden: { scale: 0, rotate: -20 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,          // ⏳ softer spring
      damping: 16,
    },
  },
};

const Index = () => {
  /* ================= MOBILE DETECTION (unchanged) ================= */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const heroImages = [
    <img key="1" src={hero1} alt="Curriculum aligned learning" className="w-full h-full object-cover" />,
    <img key="2" src={hero2} alt="Concept based education" className="w-full h-full object-cover" />,
    <img key="3" src={hero3} alt="Real world learning" className="w-full h-full object-cover" />,
  ];

  const features = [
    {
      title: "Curriculum-Aligned Learning",
      description:
        "Structured learning that strictly follows curriculum standards while improving understanding.",
      icon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 text-white">
          <path d="M6 14c0-1.7 1.3-3 3-3h21v42H9c-1.7 0-3-1.3-3-3V14z"
            fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M58 14c0-1.7-1.3-3-3-3H34v42h21c1.7 0 3-1.3 3-3V14z"
            fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="40" cy="22" r="2" fill="currentColor" />
          <circle cx="40" cy="30" r="2" fill="currentColor" />
          <circle cx="40" cy="38" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Marks with Conceptual Clarity",
      description:
        "Strong fundamentals that improve exam performance with genuine understanding.",
      icon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 text-white">
          <circle cx="32" cy="28" r="12"
            fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M24 28h16M32 20v16"
            stroke="currentColor" strokeWidth="2" />
          <path d="M22 44l6-4h8l6 4"
            fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Real-World Application Focus",
      description:
        "Connecting classroom concepts with practical, real-life applications.",
      icon: (
        <svg viewBox="0 0 64 64" className="w-10 h-10 text-white">
          <rect x="10" y="18" width="44" height="28" rx="4"
            fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M22 46v6M42 46v6"
            stroke="currentColor" strokeWidth="2" />
          <circle cx="32" cy="32" r="6"
            fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="min-h-[90vh] flex items-center py-12 bg-[#D1D1D1] dark:bg-[#aba4a4] text-[#3f3f39] dark:text-white">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div className="space-y-6">
              <motion.span custom={0} variants={textRevealVariants} className="inline-block px-4 py-2 bg-[#faa114]/10 text-[#faa114] rounded-full text-sm font-medium">
                Curriculum-Aligned EdTech Platform
              </motion.span>

              <motion.h1 custom={1} variants={textRevealVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Connecting Education with <span className="text-[#eb9710]">Reality</span>
              </motion.h1>

              <motion.p custom={2} variants={textRevealVariants} className="text-lg max-w-lg opacity-80">
                Curriculum-aligned learning that builds clarity, confidence,
                and real-world understanding.
              </motion.p>

              <motion.div custom={3} variants={textRevealVariants} className="flex gap-4 flex-wrap">
                <Button asChild size="lg" className="bg-[#faa114] text-[#3f3f39]">
                  <Link to="/courses">
                    Explore Our Approach <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Work With TECHINS</Link>
                </Button>
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageCarousel items={heroImages} interval={5000} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= WHY TECHINS ================= */}
      <section className="py-20 bg-[#D1D1D1] dark:bg-[#aba4a4] text-[#3f3f39] dark:text-white">
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <motion.h2 custom={0} variants={textRevealVariants} className="text-3xl lg:text-4xl font-bold mb-4">
              Why TECHINS ?
            </motion.h2>
            <motion.p custom={1} variants={textRevealVariants} className="opacity-80">
              Designed around how students actually learn — clarity over memorization.
            </motion.p>
          </AnimatedSection>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <motion.div key={index} variants={cardVariants}
                whileHover={isMobile ? {} : { y: -12, scale: 1.05 }}
                whileTap={isMobile ? { scale: 0.97 } : {}}
                className="bg-[#786e67] dark:bg-[#2b2a28] rounded-xl p-6 text-white">
                <motion.div variants={iconVariants} className="mb-4">
                  {item.icon}
                </motion.div>
                <motion.h3 variants={textRevealVariants} className="text-xl font-semibold mb-2">
                  {item.title}
                </motion.h3>
                <motion.p variants={textRevealVariants} className="opacity-90 text-sm">
                  {item.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
