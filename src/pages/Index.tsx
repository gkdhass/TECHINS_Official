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

const textRevealVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.2,
      duration: 1.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -20 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

/* ================= PARTNERS ================= */
const partners = [
  "Google",
  "IBM",
  "Microsoft",
  "Zoho",
  "Apple",
  "Amazon",
  "Meta",
  "TCS",
  "Infosys",
  "Reliance Industries",
];

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const heroImages = [
    <img key="1" src={hero1} className="w-full h-full object-cover" />,
    <img key="2" src={hero2} className="w-full h-full object-cover" />,
    <img key="3" src={hero3} className="w-full h-full object-cover" />,
  ];

  const features = [
    {
      title: "Curriculum-Aligned Learning",
      description:
        "Structured learning that strictly follows curriculum standards while improving understanding.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fa9a02" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M4 4v15.5" />
          <path d="M20 4v15.5" />
          <path d="M6.5 4H20" />
        </svg>
      ),
    },
    {
      title: "Marks with Conceptual Clarity",
      description:
        "Strong fundamentals that improve exam performance with genuine understanding.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fa9a02" strokeWidth="2">
          <path d="M12 20l9-5-9-5-9 5 9 5z" />
          <path d="M12 12l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
    },
    {
      title: "Real-World Application Focus",
      description:
        "Connecting classroom concepts with practical, real-life applications.",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fa9a02" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="min-h-[90vh] flex items-center py-12 bg-[#B7B7B7] dark:bg-[#0C120C]">
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.span
                custom={0}
                variants={textRevealVariants}
                className="inline-block px-4 py-2 bg-[#fa9a02]/10 text-[#fa9a02] rounded-full text-sm font-medium"
              >
                Curriculum-Aligned EdTech Platform
              </motion.span>

              <motion.h1 custom={1} variants={textRevealVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Connecting Education with <span className="text-[#fa9a02]">Reality</span>
              </motion.h1>

              <motion.p custom={2} variants={textRevealVariants} className="opacity-80 max-w-lg">
                Curriculum-aligned learning that builds clarity, confidence, and real-world understanding.
              </motion.p>

              <motion.div custom={3} variants={textRevealVariants} className="flex gap-4 flex-wrap">
                <Button asChild size="lg" className="bg-[#fa9a02] text-[#3f3f39]">
                  <Link to="/courses">
                    Explore Our Approach <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Work With TECHINS</Link>
                </Button>
              </motion.div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageCarousel items={heroImages} interval={5000} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= WHY TECHINS ================= */}
      <section className="py-20 bg-[#B7B7B7] dark:bg-[#0C120C]">
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <motion.h2 custom={0} variants={textRevealVariants} className="text-3xl lg:text-4xl font-bold">
              Why <span className="text-[#fa9a02]">TECHINS</span> ?
            </motion.h2>
          </AnimatedSection>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={isMobile ? {} : { y: -12, scale: 1.05 }}
                className="bg-[#786e67] dark:bg-[#1a1d1f] rounded-xl p-6 text-white"
              >
                <motion.div variants={iconVariants} className="mb-4">
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-90 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ================= OUR PARTNERS (SLOW & SMOOTH) ================= */}
      {/* <section className="py-20 bg-[#B7B7B7] dark:bg-[#0C120C] overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Our <span className="text-[#fa9a02]">Partners</span>
            </h2>
          </AnimatedSection>

          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-10 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 30, // 🐢 slower movement
                ease: "linear",
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={index}
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{
                    duration: 7, // 🐢 slower rotation
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ rotate: 0, scale: 1.08 }}
                  className="bg-[#786e67] dark:bg-[#1a1d1f]
                    text-white px-10 py-4
                    rounded-xl text-lg font-semibold
                    whitespace-nowrap shadow-lg"
                >
                  {partner}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Index;
