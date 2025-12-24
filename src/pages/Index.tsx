import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Users, Globe, Play, ChevronRight } from "lucide-react";
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroImages = [
    <img src={hero1} alt="EdTech learning" className="w-full h-full object-cover" />,
    <img src={hero2} alt="Coding bootcamp" className="w-full h-full object-cover" />,
    <img src={hero3} alt="Tech education" className="w-full h-full object-cover" />,
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center py-12 lg:py-0">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <motion.div
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <motion.span
                  custom={0}
                  variants={textVariants}
                  className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                >
                  #1 Tech Education Platform
                </motion.span>
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                >
                  Transform Your Future with{" "}
                  <span className="text-gradient">Tech Skills</span>
                </motion.h1>
                <motion.p
                  custom={2}
                  variants={textVariants}
                  className="text-lg text-muted-foreground max-w-lg"
                >
                  Industry-relevant courses designed to launch your tech career.
                  Learn from experts, build real projects, and get placed in
                  top companies.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 btn-glow"
                >
                  <Link to="/courses">
                    Explore Courses
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageCarousel items={heroImages} interval={5000} />
              </div>
              {/* Floating decoration */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <StatsCard
              icon={Star}
              value="4.9/5"
              label="Google Rating"
              delay={0}
            />
            <StatsCard
              icon={Users}
              value="15,000+"
              label="Students Trained"
              delay={0.1}
            />
            <StatsCard
              icon={Globe}
              value="50+"
              label="Outreach Programs"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Our Partners & Accreditations
            </h2>
            <p className="text-muted-foreground">
              Recognized by leading tech companies worldwide
            </p>
          </AnimatedSection>
          <PartnerMarquee partners={partners} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose TECHINS?
            </h2>
            <p className="text-muted-foreground">
              We provide comprehensive tech education with hands-on experience
              and industry mentorship.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry-Ready Curriculum",
                description:
                  "Courses designed with input from top tech companies to ensure job relevance.",
                icon: "📚",
              },
              {
                title: "Expert Instructors",
                description:
                  "Learn from professionals with years of industry experience.",
                icon: "👨‍🏫",
              },
              {
                title: "Hands-on Projects",
                description:
                  "Build real-world projects to add to your portfolio.",
                icon: "💻",
              },
              {
                title: "Placement Support",
                description:
                  "Dedicated placement cell with 95% placement rate.",
                icon: "🎯",
              },
              {
                title: "Flexible Learning",
                description:
                  "Choose between online and offline modes as per your convenience.",
                icon: "🌐",
              },
              {
                title: "Certification",
                description:
                  "Industry-recognized certificates upon course completion.",
                icon: "🏆",
              },
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-card border border-border rounded-xl p-6 h-full card-hover-glow"
                >
                  <span className="text-4xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="bg-hero-gradient rounded-3xl p-8 lg:p-16 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Start Your Tech Journey?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Join thousands of successful students who have transformed their
                careers with TECHINS.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 btn-glow"
              >
                <Link to="/courses">
                  Browse All Courses
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
