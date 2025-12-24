import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Monitor, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CourseCard from "@/components/ui/CourseCard";
import EnrollModal from "@/components/ui/EnrollModal";
import courseWeb from "@/assets/course-web.jpg";
import courseData from "@/assets/course-data.jpg";
import courseCloud from "@/assets/course-cloud.jpg";
import courseSecurity from "@/assets/course-security.jpg";
import courseMobile from "@/assets/course-mobile.jpg";
import courseAi from "@/assets/course-ai.jpg";

const onlineCourses = [
  {
    id: 1,
    title: "Full Stack Web Development Bootcamp",
    image: courseWeb,
    duration: "12 weeks",
    language: "English",
    price: "₹29,999",
    mode: "online" as const,
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    image: courseData,
    duration: "16 weeks",
    language: "English",
    price: "₹34,999",
    mode: "online" as const,
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner Certification",
    image: courseCloud,
    duration: "8 weeks",
    language: "English",
    price: "₹19,999",
    mode: "online" as const,
  },
  {
    id: 4,
    title: "Artificial Intelligence Fundamentals",
    image: courseAi,
    duration: "10 weeks",
    language: "English",
    price: "₹24,999",
    mode: "online" as const,
  },
];

const offlineCourses = [
  {
    id: 5,
    title: "Cybersecurity Professional Program",
    image: courseSecurity,
    duration: "14 weeks",
    language: "English",
    price: "₹44,999",
    mode: "offline" as const,
  },
  {
    id: 6,
    title: "Mobile App Development (React Native)",
    image: courseMobile,
    duration: "12 weeks",
    language: "English",
    price: "₹39,999",
    mode: "offline" as const,
  },
  {
    id: 7,
    title: "DevOps Engineering Bootcamp",
    image: courseCloud,
    duration: "10 weeks",
    language: "English",
    price: "₹34,999",
    mode: "offline" as const,
  },
  {
    id: 8,
    title: "Python Programming Masterclass",
    image: courseData,
    duration: "8 weeks",
    language: "English",
    price: "₹24,999",
    mode: "offline" as const,
  },
  {
    id: 9,
    title: "Frontend Development with React",
    image: courseWeb,
    duration: "10 weeks",
    language: "English",
    price: "₹29,999",
    mode: "offline" as const,
  },
  {
    id: 10,
    title: "Machine Learning with Python",
    image: courseAi,
    duration: "14 weeks",
    language: "English",
    price: "₹39,999",
    mode: "offline" as const,
  },
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleEnroll = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const allCourses = [...onlineCourses, ...offlineCourses];

  const filteredOnlineCourses = useMemo(() => {
    return onlineCourses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredOfflineCourses = useMemo(() => {
    return offlineCourses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Courses
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Learn Skills That <span className="text-gradient">Matter</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Industry-relevant courses designed by experts to help you succeed
              in the tech industry.
            </p>
          </AnimatedSection>

          {/* Search Bar */}
          <AnimatedSection className="max-w-xl mx-auto mb-16">
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-card border-border focus:ring-accent"
              />
            </motion.div>
          </AnimatedSection>

          {/* Online Courses */}
          <div className="mb-20">
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Monitor className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Online Courses
              </h2>
            </AnimatedSection>

            {filteredOnlineCourses.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredOnlineCourses.map((course, index) => (
                  <AnimatedSection key={course.id} delay={index * 0.1}>
                    <CourseCard
                      title={course.title}
                      image={course.image}
                      duration={course.duration}
                      language={course.language}
                      price={course.price}
                      onEnroll={() => handleEnroll(course.title)}
                    />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                No online courses found matching your search.
              </p>
            )}
          </div>

          {/* Offline Courses */}
          <div>
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Offline Courses (Classroom)
              </h2>
            </AnimatedSection>

            {filteredOfflineCourses.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOfflineCourses.map((course, index) => (
                  <AnimatedSection key={course.id} delay={index * 0.1}>
                    <CourseCard
                      title={course.title}
                      image={course.image}
                      duration={course.duration}
                      language={course.language}
                      price={course.price}
                      onEnroll={() => handleEnroll(course.title)}
                    />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                No offline courses found matching your search.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName={selectedCourse}
      />
    </Layout>
  );
};

export default Courses;
