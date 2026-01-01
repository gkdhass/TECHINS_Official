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
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.45 },
  }),
};

const Index = () => {
  const heroImages = [
    <img key="1" src={hero1} alt="Curriculum aligned learning" className="w-full h-full object-cover" />,
    <img key="2" src={hero2} alt="Concept based education" className="w-full h-full object-cover" />,
    <img key="3" src={hero3} alt="Real world learning" className="w-full h-full object-cover" />,
  ];

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="min-h-[90vh] flex items-center py-12 lg:py-0 bg-[#D1D1D1] dark:bg-[#aba4a4] text-[#3f3f39] dark:text-white">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div className="space-y-6">
              <motion.span
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="inline-block px-4 py-2 bg-[#faa114]/10 text-[#faa114] rounded-full text-sm font-medium"
              >
                Curriculum-Aligned EdTech Platform
              </motion.span>

              <motion.h1
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Connecting Education with{" "}
                <span className="text-[#eb9710]">Reality</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-lg max-w-lg opacity-80"
              >
                Curriculum-aligned learning that builds clarity, confidence, and real-world understanding.
                We help students move beyond memorization by connecting textbook concepts to real-life applications.
              </motion.p>

              <motion.div
                custom={3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="bg-[#faa114] text-[#3f3f39] hover:bg-[#faa114]/90">
                  <Link to="/courses">
                    Explore Our Approach
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black border border-black hover:bg-gray-100"
                >
                  <Link to="/contact">Work With TECHINS</Link>
                </Button>
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageCarousel items={heroImages} interval={5000} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= WHY TECHINS ================= */}
      <section className="py-20 bg-[#D1D1D1] dark:bg-[#aba4a4] text-[#3f3f39] dark:text-white">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why TECHINS</h2>
            <p className="opacity-80">
              Curriculum-aligned learning with equal focus on academic performance and conceptual clarity,
              designed around how students actually learn.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Curriculum-Aligned Learning",
              "Marks with Conceptual Clarity",
              "Real-World Application Focus",
            ].map((title, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-[#786e67] dark:bg-[#2b2a28] border border-[#3f3f39]/20 dark:border-white/20 rounded-xl p-6 text-white"
              >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="opacity-90">
                  Structured learning that connects textbook concepts with real-life understanding.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-[#dbd7c7] dark:bg-[#aba4a4] text-[#3f3f39] dark:text-white">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Start Learning with Clarity and Purpose
          </h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-80">
            Discover a learning approach that connects academics with real-world understanding.
          </p>

          <Button asChild size="lg" className="bg-[#faa114] text-[#3f3f39] hover:bg-[#faa114]/90">
            <Link to="/courses">
              Work With TECHINS
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
