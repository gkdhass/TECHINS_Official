import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Monitor, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CourseCard from "@/components/ui/CourseCard";
import EnrollModal from "@/components/ui/EnrollModal";
import CourseDetailsModal from "@/components/ui/CourseDetailsModal";

import courseWeb from "@/assets/course-web.jpg";
import courseData from "@/assets/course-data.jpg";
import courseCloud from "@/assets/course-cloud.jpg";
import courseSecurity from "@/assets/course-security.jpg";
import courseMobile from "@/assets/course-mobile.jpg";
import courseAi from "@/assets/course-ai.jpg";

/* ================= COURSES DATA ================= */
const workshops = [
  {
    id: 101,
    title: "Web Development Workshop",
    image: courseWeb,
    duration: "1 Day",
    language: "English",
    price: "Free",
    description: "Hands-on workshop covering HTML, CSS & basics of React.",
  },
  {
    id: 102,
    title: "AI & Future Tech Workshop",
    image: courseAi,
    duration: "3 Hours",
    language: "English",
    price: "₹499",
    description: "Introduction to AI, tools & future tech trends.",
  },
  {
    id: 102,
    title: "AI & Future Tech Workshop",
    image: courseAi,
    duration: "3 Hours",
    language: "English",
    price: "₹499",
    description: "Introduction to AI, tools & future tech trends.",
  },
  {
    id: 102,
    title: "AI & Future Tech Workshop",
    image: courseAi,
    duration: "3 Hours",
    language: "English",
    price: "₹499",
    description: "Introduction to AI, tools & future tech trends.",
  },
];

const onlineCourses = [
  {
    id: 1,
    title: "Full Stack Web Development Bootcamp",
    image: courseWeb,
    duration: "12 Weeks",
    language: "English",
    price: "₹29,999",
    description: "Frontend + Backend + Projects + Deployment.",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    image: courseData,
    duration: "16 Weeks",
    language: "English",
    price: "₹34,999",
    description: "Python, ML models, real-world datasets.",
  },
  
];

const offlineCourses = [
  {
    id: 3,
    title: "Cybersecurity Professional Program",
    image: courseSecurity,
    duration: "14 Weeks",
    language: "English",
    price: "₹44,999",
    description: "Ethical hacking, networking & security tools.",
  },
  {
    id: 4,
    title: "Mobile App Development (React Native)",
    image: courseMobile,
    duration: "12 Weeks",
    language: "English",
    price: "₹39,999",
    description: "Build Android & iOS apps using React Native.",
  },
  {
    id: 4,
    title: "Mobile App Development (React Native)",
    image: courseMobile,
    duration: "12 Weeks",
    language: "English",
    price: "₹39,999",
    description: "Build Android & iOS apps using React Native.",
  },
  {
    id: 4,
    title: "Mobile App Development (React Native)",
    image: courseMobile,
    duration: "12 Weeks",
    language: "English",
    price: "₹39,999",
    description: "Build Android & iOS apps using React Native.",
  },
  {
    id: 4,
    title: "Mobile App Development (React Native)",
    image: courseMobile,
    duration: "12 Weeks",
    language: "English",
    price: "₹39,999",
    description: "Build Android & iOS apps using React Native.",
  },
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState<any>(null);

  const handleEnroll = (title: string) => {
    setSelectedCourse(title);
    setIsEnrollOpen(true);
  };

  const handleMore = (course: any) => {
    setSelectedDetails(course);
    setIsDetailsOpen(true);
  };

  const filterData = (data: any[]) =>
    data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <Layout>
      <section className="py-20 bg-[#dbd7c7] dark:bg-[#b3aa9e]">
        <div className="container mx-auto px-4">

          {/* HERO */}
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Learn Skills That <span className="text-[#faa114]">Matter</span>
            </h1>
            <p className="text-lg opacity-80">
              Workshops, Online & Offline Courses
            </p>
          </AnimatedSection>

          {/* SEARCH */}
          <AnimatedSection className="max-w-xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..."
                className="pl-12 py-6"
              />
            </div>
          </AnimatedSection>

          {/* WORKSHOPS */}
          <CourseSection
            title="Workshops"
            icon={<Users className="text-[#faa114]" />}
            data={filterData(workshops)}
            onEnroll={handleEnroll}
            onMore={handleMore}
          />

          {/* OFFLINE */}
          <CourseSection
            title="Offline Courses"
            icon={<Users className="text-[#faa114]" />}
            data={filterData(offlineCourses)}
            onEnroll={handleEnroll}
            onMore={handleMore}
          />

          {/* ONLINE */}
          <CourseSection
            title="Online Courses"
            icon={<Monitor className="text-[#faa114]" />}
            data={filterData(onlineCourses)}
            onEnroll={handleEnroll}
            onMore={handleMore}
          />
        </div>
      </section>

      {/* MODALS */}
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        courseName={selectedCourse}
      />

      <CourseDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        course={selectedDetails}
      />
    </Layout>
  );
};

const CourseSection = ({ title, icon, data, onEnroll, onMore }: any) => (
  <div className="mb-20">
    <AnimatedSection className="flex items-center gap-3 mb-8">
      {icon}
      <h2 className="text-2xl font-bold">{title}</h2>
    </AnimatedSection>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((item: any) => (
        <motion.div
          key={item.id}
          whileHover={{ y: -8 }}
          className="bg-[#786e67] dark:bg-[#262a2b] rounded-xl"
        >
          <CourseCard
            {...item}
            onEnroll={() => onEnroll(item.title)}
            onMore={() => onMore(item)}
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default Courses;
