import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Users, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ImageCarousel from "@/components/ui/ImageCarousel";
import StatsCard from "@/components/ui/StatsCard";
import PartnerMarquee from "@/components/ui/PartnerMarquee";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const partners = [
  { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" },
];

const Index = () => {
  const heroImages = [
    <img key="1" src={hero1} alt="Curriculum aligned learning" className="w-full h-full object-cover" />,
    <img key="2" src={hero2} alt="Concept based education" className="w-full h-full object-cover" />,
    <img key="3" src={hero3} alt="Real world learning" className="w-full h-full object-cover" />,
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="min-h-[90vh] flex items-center py-12 lg:py-0 bg-[#D1D1D1] dark:bg-[#8C8C8C] text-[#3f3f39]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div initial="hidden" animate="visible" className="space-y-4">
                <motion.span
                  custom={0}
                  variants={textVariants}
                  className="inline-block px-4 py-2 bg-[#faa114]/10 text-[#faa114] rounded-full text-sm font-medium"
                >
                  Curriculum-Aligned EdTech Platform
                </motion.span>

                <motion.h1
                  custom={1}
                  variants={textVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Connecting Education with{" "}
                  <span className="text-[#eb9710]">Reality</span>
                </motion.h1>

                <motion.p
                  custom={2}
                  variants={textVariants}
                  className="text-lg max-w-lg opacity-80"
                >
                  Curriculum-aligned learning that builds clarity, confidence, and real-world understanding.
                  We help students move beyond memorization by connecting textbook concepts to real-life applications.
                </motion.p>
              </motion.div>

              <motion.div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#faa114] text-[#3f3f39] hover:bg-[#faa114]/90"
                >
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

            <motion.div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageCarousel items={heroImages} interval={5000} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY TECHINS */}
      <section className="py-20 bg-[#D1D1D1] dark:bg-[#8C8C8C] text-[#3f3f39]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why TECHINS
            </h2>
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
                whileHover={{ y: -8 }}
                className="bg-[#786e67] dark:bg-[#2b2a28] border border-[#3f3f39]/20 dark:border-white/20 rounded-xl p-6 text-white dark:text-[#D1D1D1]"
              >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="opacity-90">
                  Structured learning that connects textbook concepts with real-life understanding.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      {/* <section className="py-16 bg-[#dbd7c7] dark:bg-[#b3aa9e] text-[#262a2b] dark:text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Our Partners & Accreditations
            </h2>
            <p className="opacity-90">
              Recognized by leading technology organizations
            </p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <PartnerMarquee partners={partners} />
          </motion.div>
        </div>
      </section> */}

      {/* FINAL CTA */}
      <section className="py-20 bg-[#dbd7c7] dark:bg-[#3f3f39] text-[#3f3f39] dark:text-[#D1D1D1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Start Learning with Clarity and Purpose
          </h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-80">
            Discover a learning approach that connects academics with real-world understanding.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-[#faa114] text-[#3f3f39] hover:bg-[#faa114]/90"
          >
            <Link to="/courses">
              Work With TECHINS
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
