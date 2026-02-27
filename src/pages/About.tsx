import { motion } from "framer-motion";
import { Target, Eye, Instagram, Linkedin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import hero2 from "@/assets/hero-2.jpg";
import founderImg from "@/assets/founder.jpg";

const About = () => {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="py-20 bg-[#B7B7B7] dark:bg-[#0C120C] text-neutral-900 dark:text-neutral-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-[#fa9a02]/10 text-[#fa9a02] rounded-full text-sm font-medium mb-4">
              About TECHINS
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Connecting Education with{" "}
              <span className="text-[#fa9a02]">Reality</span>
            </h1>

            <p className="text-lg opacity-80">
              TECHINS (Technologically Innovative Students) is an MSME-registered
              EdTech and educational research organization focused on bridging
              academics with real-world understanding.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src={hero2}
                  alt="TECHINS learning environment"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#fa9a02]/30 rounded-full blur-3xl" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-6">
              <h2 className="text-3xl font-bold">Who We Are</h2>
              <p className="opacity-80 leading-relaxed">
                TECHINS operates at the foundational level of education, ensuring
                students clearly understand why they study, how academic concepts
                work in reality, and where learning leads in life and career.
              </p>
              <p className="opacity-80 leading-relaxed">
                Unlike platforms that deliver disconnected information, TECHINS
                follows a curriculum-first, clarity-driven approach that strengthens
                both conceptual understanding and academic performance.
              </p>

              <div className="flex gap-8 pt-4">
                {[
                  { value: "1+", label: "Years of Impact" },
                  { value: "50+", label: "Academic Mentors" },
                  { value: "95%", label: "Learning Satisfaction" },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-3xl font-bold text-[#fa9a02]">
                      {item.value}
                    </p>
                    <p className="text-sm opacity-70">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-[#B7B7B7] dark:bg-[#0C120C] text-neutral-900 dark:text-neutral-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <AnimatedSection direction="left">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#786e67] dark:bg-[#1a1d1f] text-white rounded-2xl p-8 h-full"
            >
              <div className="p-4 bg-[#fa9a02]/20 rounded-xl inline-block mb-6">
                <Target className="w-8 h-8 text-[#fa9a02]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="opacity-90 leading-relaxed">
                To connect textbook concepts with real-world use, improve conceptual
                clarity alongside academic performance, and guide students toward
                informed educational and career decisions.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#786e67] dark:bg-[#1a1d1f] text-white rounded-2xl p-8 h-full"
            >
              <div className="p-4 bg-[#fa9a02]/20 rounded-xl inline-block mb-6">
                <Eye className="w-8 h-8 text-[#fa9a02]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="opacity-90 leading-relaxed">
                To build a generation of technologically innovative students who
                learn with clarity, purpose, and confidence.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-20 bg-[#B7B7B7] dark:bg-[#0C120C] text-neutral-900 dark:text-neutral-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Founder’s Note
            </h2>
            <p className="opacity-80">Personal perspective behind TECHINS</p>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              whileHover={{ y: -8 }}
              className="max-w-md mx-auto bg-[#786e67] dark:bg-[#1a1d1f] text-white rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#fa9a02]/40">
                  <img
                    src={founderImg}
                    alt="Siva K.K - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-1">Siva K.K</h3>
              <p className="text-[#fa9a02] mb-2">
                Founder & CEO – TECHINS
              </p>

              <p className="opacity-80 text-sm mb-4">
                Students study for years but often lack clarity about why they study
                and how learning connects to life. TECHINS exists to solve that gap.
              </p>

              {/* UPDATED SOCIAL LINKS */}
              <div className="flex justify-center gap-3">
                <motion.a
                  href="https://www.instagram.com/mr.k.k.siva?igsh=MW5mOGgwZm83YXp6aQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-[#fa9a02] text-black"
                >
                  <Instagram />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/siva-k-k-218b96360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-[#fa9a02] text-black"
                >
                  <Linkedin />
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 bg-[#B7B7B7] dark:bg-[#0C120C] text-neutral-900 dark:text-neutral-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Clarity", icon: "🔍", desc: "Understanding before memorization." },
              { title: "Relevance", icon: "🔗", desc: "Learning connected to real life." },
              { title: "Integrity", icon: "🛡️", desc: "Ethical and transparent education." },
              { title: "Purpose", icon: "🎯", desc: "Education with direction and meaning." },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-[#786e67] dark:bg-[#1a1d1f] text-white rounded-xl p-6 text-center h-full"
                >
                  <span className="text-4xl mb-4 block">{v.icon}</span>
                  <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm opacity-80">{v.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
