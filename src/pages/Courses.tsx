import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Monitor, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CourseCard from "@/components/ui/CourseCard";
import EnrollModal from "@/components/ui/EnrollModal";
import CourseDetailsModal from "@/components/ui/CourseDetailsModal";

/* ================= IMAGES ================= */
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

/* ================= WORKSHOPS ================= */
const workshops = [
  {
    id: 101,
    title: "Innovate 360° Workshop",
    image: courseAi,
    mode: "Offline",
    duration: "1 Day",
    classLevel: "8th–12th",
    amount: "₹299",
    language: "English",
    description:
      "This innovation and creativity focused workshop helps students unlock their creative potential...",
  },
  {
    id: 102,
    title: "Science in Real Life",
    image: courseData,
    mode: "Offline",
    duration: "6 Hours",
    classLevel: "6th–12th",
    amount: "₹199",
    language: "English",
    description:
      "This practical science workshop connects classroom concepts with real-life experiences...",
  },
  {
    id: 103,
    title: "Career Discovery",
    image: courseCloud,
    mode: "Offline",
    duration: "8 Hours",
    classLevel: "8th–12th",
    amount: "₹199",
    language: "English",
    description:
      "This career awareness workshop helps students explore their interests and personal strengths...",
  },
  {
    id: 104,
    title: "Confidence & Communication",
    image: courseWeb,
    mode: "Offline",
    duration: "2 Days",
    classLevel: "8th–12th",
    amount: "₹499",
    language: "English",
    description:
      "This confidence building and communication skills program helps students develop a strong personality...",
  },
];

/* ================= ONLINE COURSES ================= */
const onlineCourses = [
  {
    id: 201,
    title: "Concept → Clarity",
    image: courseWeb1,
    mode: "Online",
    duration: "3 Months",
    classLevel: "6th–12th / 6th–9th / 10th–12th",
    amount: "₹1,999 / ₹3,999",
    language: "English",
    description:
      "This online course is designed to help students clearly understand their school syllabus concepts...",
  },
  {
    id: 202,
    title: "Future Map",
    image: courseAi1,
    mode: "Online",
    duration: "4–6 Weeks",
    classLevel: "9th–12th",
    amount: "₹999",
    language: "English",
    description:
      "This online guidance course helps students discover their interests and personal strengths...",
  },
];

/* ================= OFFLINE COURSES ================= */
const offlineCourses = [
  {
    id: 301,
    title: "Foundation X",
    image: courseMobile,
    mode: "Offline",
    duration: "2 Months",
    classLevel: "6th–8th",
    amount: "₹2,999",
    language: "English",
    description:
      "This foundation course focuses on building strong basics in Science and Mathematics...",
  },
  {
    id: 302,
    title: "Score+",
    image: courseSecurity,
    mode: "Offline",
    duration: "2 Months",
    classLevel: "9th–12th",
    amount: "₹1,999",
    language: "English",
    description:
      "This academic improvement program is designed to boost students’ exam performance...",
  },
  {
    id: 303,
    title: "Applied Learning Lab",
    image: courseData1,
    mode: "Offline",
    duration: "3 Months",
    classLevel: "7th–9th",
    amount: "₹2,999",
    language: "English",
    description:
      "This hands-on program helps students apply theoretical concepts to real-world situations...",
  },
  {
    id: 304,
    title: "Exam Ready",
    image: courseCloud1,
    mode: "Offline",
    duration: "45 Days – 2 Months",
    classLevel: "10th–12th",
    amount: "₹2,499",
    language: "English",
    description:
      "This short-term revision program is designed for effective final exam preparation...",
  },
  {
    id: 305,
    title: "Mentor Path",
    image: courseWeb2,
    mode: "Offline",
    duration: "3 Months",
    classLevel: "9th–12th",
    amount: "₹2,999",
    language: "English",
    description:
      "This one-to-one mentorship program provides personalized academic and career guidance...",
  },
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState<any>(null);

  const filterData = (data: any[]) =>
    data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <Layout>
      <section className="py-20 bg-[#fffcf2] dark:bg-[#00030d] text-neutral-900 dark:text-neutral-100">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Learn Skills That <span className="text-[#fa9a02]">Matter</span>
            </h1>
            <p className="text-lg opacity-80">
              Workshops, Online & Offline Courses
            </p>
          </AnimatedSection>

          <AnimatedSection className="max-w-xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#fa9a02]" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..."
                className="pl-12 py-6"
              />
            </div>
          </AnimatedSection>

          <CourseSection
            title="Workshops"
            icon={<Users className="text-[#fa9a02]" />}
            data={filterData(workshops)}
          />

          <CourseSection
            title="Offline Courses"
            icon={<Users className="text-[#fa9a02]" />}
            data={filterData(offlineCourses)}
          />

          <CourseSection
            title="Online Courses"
            icon={<Monitor className="text-[#fa9a02]" />}
            data={filterData(onlineCourses)}
          />
        </div>
      </section>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        courseName={selectedCourse}
        type="course"
      />

      <CourseDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        course={selectedDetails}
      />
    </Layout>
  );
};

const CourseSection = ({ title, icon, data }: any) => (
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
          className="bg-[#786e67] dark:bg-[#1a1d1f] rounded-xl"
        >
          <CourseCard {...item} />
        </motion.div>
      ))}
    </div>
  </div>
);

export default Courses;
