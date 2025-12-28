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
      <section className="py-20 bg-[#dbd7c7] dark:bg-[#b3aa9e] text-neutral-900 dark:text-neutral-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-[#faa114]/20 text-[#faa114] rounded-full text-sm font-medium mb-4">
              About TECHINS
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Learning Today,{" "}
              <span className="text-[#faa114]">Leading Tomorrow</span>
            </h1>
            <p className="text-lg opacity-80">
              TECHINS (Technologically Innovative Students) is an EdTech
              initiative focused on bridging the gap between academic learning
              and real-world application.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src={hero2}
                  alt="TECHINS Learning Environment"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#faa114]/30 rounded-full blur-3xl" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-6">
              <h2 className="text-3xl font-bold">Welcome to TECHINS</h2>
              <p className="opacity-80 leading-relaxed">
                TECHINS is a premier EdTech institution dedicated to providing
                world-class technology education.
              </p>
              <p className="opacity-80 leading-relaxed">
                We offer industry-aligned programs that prepare students for
                real-world challenges.
              </p>

              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-[#faa114]">5+</p>
                  <p className="text-sm opacity-70">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#faa114]">50+</p>
                  <p className="text-sm opacity-70">Expert Mentors</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#faa114]">95%</p>
                  <p className="text-sm opacity-70">Placement Rate</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-[#dbd7c7] dark:bg-[#b3aa9e] text-neutral-900 dark:text-neutral-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">

          <AnimatedSection direction="left">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#786e67] dark:bg-[#262a2b] text-white rounded-2xl p-8 h-full"
            >
              <div className="p-4 bg-[#faa114]/20 rounded-xl inline-block mb-6">
                <Target className="w-8 h-8 text-[#faa114]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="opacity-90 leading-relaxed">
                To empower school students by connecting academic concepts with
                real-world applications, innovation, and technology.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#786e67] dark:bg-[#262a2b] text-white rounded-2xl p-8 h-full"
            >
              <div className="p-4 bg-[#faa114]/20 rounded-xl inline-block mb-6">
                <Eye className="w-8 h-8 text-[#faa114]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="opacity-90 leading-relaxed">
                To build confident, creative, and responsible innovators from
                an early age.
              </p>
            </motion.div>
          </AnimatedSection>

        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-20 bg-[#dbd7c7] dark:bg-[#b3aa9e] text-neutral-900 dark:text-neutral-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Meet Our Founder
            </h2>
            <p className="opacity-80">
              Visionary leadership driving innovation in education
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              whileHover={{ y: -8 }}
              className="max-w-md mx-auto bg-[#786e67] dark:bg-[#262a2b] text-white rounded-2xl p-8 text-center"
            >

              {/* 🔽 REDUCED FOUNDER PHOTO */}
              <div className="flex justify-center mb-6">
                <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#faa114]/40">
                  <img
                    src={founderImg}
                    alt="Siva K.K - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-1">Siva K.K</h3>
              <p className="text-[#faa114] mb-2">
                Founder & CEO – TECHINS
              </p>
              <p className="opacity-80 text-sm mb-4">
                Education-focused entrepreneur driving innovation
                in technology-based learning.
              </p>

              <div className="flex justify-center gap-3">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-[#faa114] hover:bg-[#e69510]"
                >
                  <Instagram className="text-black" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-full bg-[#faa114] hover:bg-[#e69510]"
                >
                  <Linkedin className="text-black" />
                </motion.a>
              </div>

            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 bg-[#dbd7c7] dark:bg-[#b3aa9e] text-neutral-900 dark:text-neutral-100">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Excellence", icon: "⭐", desc: "We strive for the highest quality." },
              { title: "Innovation", icon: "💡", desc: "We embrace modern teaching methods." },
              { title: "Inclusivity", icon: "🤝", desc: "Education for everyone." },
              { title: "Integrity", icon: "🛡️", desc: "Ethics and trust matter." },
            ].map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-[#786e67] dark:bg-[#262a2b] text-white rounded-xl p-6 text-center h-full"
                >
                  <span className="text-4xl mb-4 block">{v.icon}</span>
                  <h3 className="text-xl font-semibold mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm opacity-80">
                    {v.desc}
                  </p>
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
