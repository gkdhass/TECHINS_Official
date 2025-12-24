import { motion } from "framer-motion";
import { Target, Eye, Instagram, Linkedin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import hero2 from "@/assets/hero-2.jpg";
import founderImg from "@/assets/founder.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Empowering Tomorrow's <span className="text-gradient">Tech Leaders</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Since 2018, TECHINS has been at the forefront of tech education,
              bridging the gap between academic knowledge and industry requirements.
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
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Welcome to TECHINS
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                TECHINS is a premier EdTech institution dedicated to providing
                world-class technology education. Our mission is to democratize
                tech education and make it accessible to everyone, regardless of
                their background.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We offer a diverse range of courses from web development and data
                science to cloud computing and cybersecurity. Our curriculum is
                constantly updated to reflect the latest industry trends and
                technologies.
              </p>
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-accent">5+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">50+</p>
                  <p className="text-sm text-muted-foreground">Expert Mentors</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">95%</p>
                  <p className="text-sm text-muted-foreground">Placement Rate</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-8 h-full card-hover-glow"
              >
                <div className="p-4 bg-accent/10 rounded-xl inline-block mb-6">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, high-quality tech education that empowers
                  individuals to achieve their career goals. We strive to create
                  an inclusive learning environment where every student can thrive
                  and develop the skills needed for the digital economy.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-8 h-full card-hover-glow"
              >
                <div className="p-4 bg-accent/10 rounded-xl inline-block mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the world's most trusted platform for tech education,
                  producing industry-ready professionals who drive innovation and
                  technological advancement. We envision a future where quality
                  tech education is available to all.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Founder
            </h2>
            <p className="text-muted-foreground">
              Visionary leadership driving innovation in education
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              whileHover={{ y: -8 }}
              className="max-w-md mx-auto bg-card border border-border rounded-2xl overflow-hidden card-hover-glow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={founderImg}
                  alt="John Smith - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  John Smith
                </h3>
                <p className="text-accent mb-2">Founder & CEO</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Former Tech Lead at Google with 15+ years of experience in
                  software development and education technology.
                </p>
                <div className="flex justify-center gap-3">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Excellence",
                description: "We strive for the highest quality in everything we do.",
                icon: "⭐",
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and teaching methods.",
                icon: "💡",
              },
              {
                title: "Inclusivity",
                description: "Education should be accessible to everyone.",
                icon: "🤝",
              },
              {
                title: "Integrity",
                description: "We maintain the highest ethical standards.",
                icon: "🛡️",
              },
            ].map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-card border border-border rounded-xl p-6 text-center h-full card-hover-glow"
                >
                  <span className="text-4xl mb-4 block">{value.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
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
