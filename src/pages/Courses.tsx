import { useState } from "react";
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

const workshops = [
  { id: 101, title: "Innovate 360° Workshop", image: courseAi, mode: "Offline", duration: "1 Day", classLevel: "8th–12th", amount: "₹299", language: "English", description: "This innovation and creativity focused workshop helps students unlock their creative potential and think beyond traditional boundaries.Participants learn practical idea-generation techniques, problem-solving frameworks, and creative thinking methods used in real-world projects.The session encourages curiosity, experimentation, and collaboration through engaging activities and challenges.Students gain confidence to transform ideas into impactful solutions.This workshop is ideal for building an innovative mindset essential for future careers and startups." },
  { id: 102, title: "Science in Real Life", image: courseData, mode: "Offline", duration: "6 Hours", classLevel: "6th–12th", amount: "₹199", language: "English", description: "This practical science workshop connects classroom concepts with real-life experiences through hands-on learning.Students explore scientific principles using experiments, demonstrations, and interactive activities.The workshop helps improve understanding by applying theory to everyday situations.It encourages curiosity, critical thinking, and problem-solving skills.Learners gain a deeper interest in science by experiencing how it works in the real world." },
  { id: 103, title: "Career Discovery", image: courseCloud, mode: "Offline", duration: "8 Hours", classLevel: "8th–12th", amount: "₹199", language: "English", description: "This career awareness workshop helps students explore their interests, strengths, and career possibilities. It introduces various career paths, industries, and emerging opportunities. Students gain clarity about skills required for different roles and future trends. The session encourages self-reflection and informed decision-making. Participants leave with better confidence to plan their academic and career journey." },
  { id: 104, title: "Confidence & Communication", image: courseWeb, mode: "Offline", duration: "2 Days", classLevel: "8th–12th", amount: "₹499", language: "English", description: "This confidence and communication program helps students develop a strong personality and self-belief.It focuses on improving speaking skills, body language, and effective expression.Students learn to communicate clearly in academic, professional, and social settings.The program encourages active participation and confidence building activities.Participants gain the skills needed to present ideas with clarity and impact." },
];

const onlineCourses = [
  { id: 201, title: "Concept → Clarity", image: courseWeb1, mode: "Online", duration: "3 Months", classLevel: "6th–12th", amount: "₹1,999 / ₹3,999", language: "English", description: "Designed to help students clearly understand their school syllabus concepts through structured and engaging learning.The program simplifies complex topics using practical examples and explanations.It strengthens core fundamentals and improves subject clarity.Students gain better confidence in exams and daily classroom learning.The approach encourages consistent understanding rather than rote memorization." },
  { id: 202, title: "Future Map", image: courseAi1, mode: "Online", duration: "4–6 Weeks", classLevel: "9th–12th", amount: "₹999", language: "English", description: "This guidance course helps students discover their interests, strengths, and career direction.It provides clarity on academic choices and future career paths.Students learn how their skills align with different industries and roles.The course encourages self-awareness and goal setting.Participants gain confidence to make informed decisions about their future." },
];

const offlineCourses = [
  { id: 301, title: "Foundation X", image: courseMobile, mode: "Offline", duration: "2 Months", classLevel: "6th–8th", amount: "₹2,999", language: "English", description: "Builds strong fundamentals in Science and Mathematics through clear explanations and practical learning.The program focuses on core concepts to improve understanding and application.Students develop logical thinking and problem-solving skills.It helps reduce fear of complex topics by simplifying concepts.Learners gain confidence for exams and higher-level studies." },
  { id: 302, title: "Score+", image: courseSecurity, mode: "Offline", duration: "2 Months", classLevel: "9th–12th", amount: "₹1,999", language: "English", description: "Designed to boost academic and exam performance through focused learning strategies.The program helps students improve understanding, accuracy, and speed.It covers important concepts, practice methods, and exam techniques.Students learn time management and smart revision approaches.This results in better confidence and consistent academic improvement." },
  { id: 303, title: "Applied Learning Lab", image: courseData1, mode: "Offline", duration: "3 Months", classLevel: "7th–9th", amount: "₹2,999", language: "English", description: "This hands-on program connects theory with real-world applications through practical learning.Students apply concepts using activities, experiments, and real-life examples.It strengthens understanding by moving beyond textbook knowledge.The program encourages curiosity, exploration, and problem-solving.Learners gain skills that are useful in academics and everyday life." },
  { id: 304, title: "Exam Ready", image: courseCloud1, mode: "Offline", duration: "45 Days – 2 Months", classLevel: "10th–12th", amount: "₹2,499", language: "English", description: "This short-term revision program is designed for effective final exam preparation.It focuses on important concepts, key formulas, and frequently asked questions.Students revise topics quickly with clear explanations and guided practice.The program helps improve accuracy, confidence, and exam readiness.Ideal for last-stage preparation before final examinations." },
  { id: 305, title: "Mentor Path", image: courseWeb2, mode: "Offline", duration: "3 Months", classLevel: "9th–12th", amount: "₹2,999", language: "English", description: "This one-to-one mentorship program provides personalized academic and career guidance.Students receive individual attention based on their goals and strengths.Mentors help clarify doubts, plan studies, and explore career options.The program supports confident decision-making and long-term planning.Learners benefit from focused guidance and continuous motivation." },
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState<any>(null);

  const filterData = (data: any[]) =>
    data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleEnroll = (title: string) => { setSelectedCourse(title); setIsEnrollOpen(true); };
  const handleViewDetails = (course: any) => { setSelectedDetails(course); setIsDetailsOpen(true); };

  return (
    <Layout>
      <section className="py-20 bg-[#B7B7B7] dark:bg-[#0C120C] text-neutral-900 dark:text-neutral-100">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Learn Skills That <span className="text-[#fa9a02]">Matter</span>
            </h1>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
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
                className="pl-12 py-6 bg-[#2a2f2a] dark:bg-[#141a14] border-white/10 text-white placeholder:text-white/50"
              />
            </div>
          </AnimatedSection>

          <CourseSection title="Workshops" icon={<Users className="text-[#fa9a02]" />} data={filterData(workshops)} onEnroll={handleEnroll} onViewDetails={handleViewDetails} />
          <CourseSection title="Offline Courses" icon={<Users className="text-[#fa9a02]" />} data={filterData(offlineCourses)} onEnroll={handleEnroll} onViewDetails={handleViewDetails} />
          <CourseSection title="Online Courses" icon={<Monitor className="text-[#fa9a02]" />} data={filterData(onlineCourses)} onEnroll={handleEnroll} onViewDetails={handleViewDetails} />
        </div>
      </section>

      <EnrollModal isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} courseName={selectedCourse} type="course" />
      <CourseDetailsModal isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} course={selectedDetails} />
    </Layout>
  );
};

const CourseSection = ({ title, icon, data, onEnroll, onViewDetails }: any) => (
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
          className="bg-[#2a2f2a] dark:bg-[#141a14] rounded-xl shadow-lg"
        >
          <CourseCard
            {...item}
            onEnroll={() => onEnroll(item.title)}
            onMore={() => onViewDetails(item)}
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default Courses;
