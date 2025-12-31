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
import courseWeb1 from "@/assets/course-web1.jpg";
import courseWeb2 from "@/assets/course-web2.jpg";
import courseData from "@/assets/course-data.jpg";
import courseData1 from "@/assets/course-data1.jpg";
import courseCloud from "@/assets/course-cloud.jpg";
import courseCloud1 from "@/assets/course-cloud1.jpg";
import courseSecurity from "@/assets/course-security.jpg";
import courseMobile from "@/assets/course-mobile.jpg";
import courseAi from "@/assets/course-ai.jpg";
import courseAi1 from "@/assets/course-ai1.jpg";

/* ================= COURSES DATA ================= */
const workshops = [
  {
    id: 101,
    title: "Innovate 360",
    image: courseAi,
    // duration: "1 Day",
    language: "English",
    // price: "Free",
    mode: "Offline",
    description:
      "Interactive workshop introducing creative thinking and innovation. Helps students think beyond textbooks and develop teamwork and problem-solving skills.",
  },
  {
    id: 102,
    title: "Science in Real Life",
    image: courseData,
    // duration: "3 Hours",
    language: "English",
    // price: "Free",
    mode: "Offline",
    description:
      "Demonstration-based workshop that connects scientific concepts with everyday life, making learning science enjoyable and memorable.",
  },
  {
    id: 103,
    title: "Career Discovery Day",
    image: courseCloud,
    // duration: "1 Day",
    language: "English",
    // price: "Free",
    mode: "Offline",
    description:
      "Career exploration workshop for students and parents to understand career paths, future opportunities, and make informed decisions early.",
  },
  {
    id: 104,
    title: "Confidence & Communication",
    image: courseWeb,
    // duration: "3 Hours",
    language: "English",
    // price: "Free",
    mode: "Offline",
    description:
      "Personality development workshop focused on communication skills, self-confidence, and leadership qualities.",
  },
];

const onlineCourses = [
  {
    id: 201,
    title: "Concept → Clarity",
    image: courseWeb1,
    // duration: "8 Weeks",
    language: "English",
    // price: "₹2,999",
    mode: "Online",
    description:
      "Online course designed to help students clearly understand school syllabus concepts through simple explanations and visual learning, improving academic performance.",
  },
  {
    id: 202,
    title: "Future Map",
    image: courseAi1,
    // duration: "4 Weeks",
    language: "English",
    // price: "₹1,999",
    mode: "Online",
    description:
      "Online guidance course helping students explore interests, strengths, and future career options for confident stream and career selection.",
  },
];

const offlineCourses = [
  {
    id: 301,
    title: "Score+",
    image: courseSecurity,
    duration: "10 Weeks",
    language: "English",
    price: "₹6,999",
    mode: "Offline",
    description:
      "Offline academic improvement program focused on boosting exam performance through structured teaching, assessments, and answer-writing strategies.",
  },
  {
    id: 302,
    title: "Foundation X",
    image: courseMobile,
    // duration: "12 Weeks",
    language: "English",
    // price: "₹7,999",
    mode: "Offline",
    description:
      "Foundation course that builds strong basics in Science and Mathematics, helping younger students gain confidence and logical thinking skills.",
  },
  {
    id: 303,
    title: "Applied Learning Lab",
    image: courseData1,
    // duration: "8 Weeks",
    language: "English",
    // price: "₹8,999",
    mode: "Offline",
    description:
      "Hands-on program where students apply theoretical concepts to real-world situations, improving practical understanding and problem-solving skills.",
  },
  {
    id: 304,
    title: "Exam Ready",
    image: courseCloud1,
    // duration: "4 Weeks",
    language: "English",
    // price: "₹3,999",
    mode: "Offline",
    description:
      "Short-term revision program designed to prepare students for final exams through focused revision, practice, and time management.",
  },
  {
    id: 305,
    title: "Mentor Path",
    image: courseWeb2,
    // duration: "Ongoing",
    language: "English",
    // price: "₹9,999",
    mode: "Offline",
    description:
      "Personalized one-to-one mentorship program providing academic guidance, career clarity, consistent motivation, and goal-focused support.",
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
