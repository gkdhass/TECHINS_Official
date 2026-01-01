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
      "This innovation and creativity focused workshop helps students unlock their creative potential.Through fun and engaging activities, students learn to think differently and explore new ideas.Hands-on tasks encourage teamwork and effective collaboration.Real-world challenges help students develop strong problem-solving skills.The workshop builds confidence in expressing ideas and experimenting without fear.Students learn to approach problems with curiosity and innovation.It nurtures creativity while strengthening communication and leadership abilities.",
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
      "This practical science workshop connects classroom concepts with real-life experiences.Students learn how science works in everyday situations around them.Hands-on experiments make learning fun, engaging, and interactive.Complex scientific ideas are explained in a simple and relatable way.The workshop encourages curiosity and active participation.Students gain a deeper understanding by learning through doing.It helps build strong scientific thinking and real-world awareness.",
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
      "This career awareness workshop helps students explore their interests and personal strengths.It introduces various career options in a clear and engaging way.Students gain early clarity about different career paths and opportunities.Interactive activities help them understand their abilities and preferences.The workshop encourages informed decision-making for the future.Students build confidence in planning their academic and career journey.It supports purposeful goal setting from an early stage.",
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
      "This confidence building and communication skills program helps students develop a strong and positive personality.It focuses on improving self-expression and clarity in communication.Students learn effective public speaking skills through guided practice.Leadership activities help build responsibility and decision-making abilities.The program boosts self-confidence in academic and social situations.Interactive sessions encourage students to speak without fear.It prepares students to express ideas clearly and confidently in real life.",
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
      "This online course is designed to help students clearly understand their school syllabus concepts.Topics are explained using simple language and easy step-by-step methods.Visual learning techniques make concepts more engaging and memorable.Complex ideas are simplified for better clarity and understanding.The course focuses on building strong foundational knowledge.Students learn at their own pace in a comfortable learning environment.It supports better academic confidence and improved performance.",
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
      "This online guidance course helps students discover their interests and personal strengths.It introduces a wide range of future career options in a simple and clear manner.Students gain early awareness to make informed academic choices.Guided activities help students understand their skills and preferences.The course supports confident decision-making for the future.It encourages purposeful planning and goal setting.Students develop clarity and confidence about their career path.",
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
      "This foundation course focuses on building strong basics in Science and Mathematics.Core concepts are explained in a simple and structured way.Students develop clear understanding rather than memorization.Step-by-step learning helps strengthen problem-solving skills.The course lays a solid academic foundation for higher studies.Regular practice improves confidence and accuracy.It prepares students to handle advanced topics with ease.",
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
      "This academic improvement program is designed to boost students’ exam performance.It focuses on strengthening weak areas and improving subject understanding.Smart study techniques help students learn more effectively.Regular practice and assessments enhance accuracy and speed.Exam-oriented strategies reduce stress and improve confidence.Personalized guidance supports steady academic progress.The program helps students achieve better results with clarity and confidence.",
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
      "This hands-on program helps students apply theoretical concepts to real-world situations.Learning is driven through practical activities and real-life examples.Students gain deeper understanding by learning through experience.Concepts become more meaningful and easier to remember.The program encourages critical thinking and active participation.It bridges the gap between classroom learning and real-world application.Students develop practical skills along with strong conceptual clarity.",
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
      "This short-term revision program is designed for effective final exam preparation.Key concepts are revised quickly with clear and focused explanations.Important topics are covered in a structured and time-efficient manner.Practice sessions help reinforce learning and improve retention.Exam-focused guidance boosts confidence and reduces last-minute stress.Students gain clarity on frequently asked questions and patterns.The program helps students approach exams with confidence and readiness.",
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
      "This one-to-one mentorship program provides personalized academic and career guidance.Students receive individual attention based on their learning needs and goals.Mentors help identify strengths, interests, and areas for improvement.Academic planning is aligned with long-term career aspirations.Regular guidance sessions build clarity and confidence.Students receive support in decision-making and goal setting.The program encourages steady growth with focused and expert mentorship.",
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

          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Learn Skills That <span className="text-[#faa114]">Matter</span>
            </h1>
            <p className="text-lg opacity-80">
              Workshops, Online & Offline Courses
            </p>
          </AnimatedSection>

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

          <CourseSection
            title="Workshops"
            icon={<Users className="text-[#faa114]" />}
            data={filterData(workshops)}
            onEnroll={handleEnroll}
            onMore={handleMore}
          />

          <CourseSection
            title="Offline Courses"
            icon={<Users className="text-[#faa114]" />}
            data={filterData(offlineCourses)}
            onEnroll={handleEnroll}
            onMore={handleMore}
          />

          <CourseSection
            title="Online Courses"
            icon={<Monitor className="text-[#faa114]" />}
            data={filterData(onlineCourses)}
            onEnroll={handleEnroll}
            onMore={handleMore}
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
