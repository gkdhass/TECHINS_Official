import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Search, Monitor, Users, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CourseCard from "@/components/ui/CourseCard";

import courseWeb from "@/assets/course-web.jpg";
import courseData from "@/assets/course-data.jpg";
import courseCloud from "@/assets/course-cloud.jpg";
import courseSecurity from "@/assets/course-security.jpg";
import courseMobile from "@/assets/course-mobile.jpg";
import courseAi from "@/assets/course-ai.jpg";

/* -------------------- COURSE DATA -------------------- */

const onlineCourses = [
  { id: 1, title: "Full Stack Web Development Bootcamp", image: courseWeb, duration: "12 weeks", language: "English", price: "₹29,999" },
  { id: 2, title: "Data Science & Machine Learning", image: courseData, duration: "16 weeks", language: "English", price: "₹34,999" },
  { id: 3, title: "AWS Cloud Practitioner Certification", image: courseCloud, duration: "8 weeks", language: "English", price: "₹19,999" },
  { id: 4, title: "Artificial Intelligence Fundamentals", image: courseAi, duration: "10 weeks", language: "English", price: "₹24,999" },
];

const offlineCourses = [
  { id: 5, title: "Cybersecurity Professional Program", image: courseSecurity, duration: "14 weeks", language: "English", price: "₹44,999" },
  { id: 6, title: "Mobile App Development (React Native)", image: courseMobile, duration: "12 weeks", language: "English", price: "₹39,999" },
  { id: 7, title: "DevOps Engineering Bootcamp", image: courseCloud, duration: "10 weeks", language: "English", price: "₹34,999" },
];

/* -------------------- MAIN COMPONENT -------------------- */

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  // Email form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEnroll = (courseName) => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const handleEmailSend = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_m8prvnc",
      "template_049akar",
      {
        from_name: name,
        from_mail: email,
        course_name: selectedCourse,
        message: message,
        to_name: "TECHINS",
      },
      "C3kSMsITJ-JZMpXE7"
    )
    .then(() => {
      alert("Enrollment request sent 🚀");
      setName("");
      setEmail("");
      setMessage("");
      setIsModalOpen(false);
    })
    .catch(() => {
      alert("Email send failed ❌");
    });
  };

  const filteredOnline = useMemo(
    () => onlineCourses.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  const filteredOffline = useMemo(
    () => offlineCourses.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">

          {/* HERO */}
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl font-bold">
              Learn Skills That <span className="text-gradient">Matter</span>
            </h1>
          </AnimatedSection>

          {/* SEARCH */}
          <div className="max-w-xl mx-auto mb-14 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-12 py-6"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* ONLINE COURSES */}
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <Monitor /> Online Courses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {filteredOnline.map(course => (
              <CourseCard
                key={course.id}
                {...course}
                onEnroll={() => handleEnroll(course.title)}
              />
            ))}
          </div>

          {/* OFFLINE COURSES */}
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <Users /> Offline Courses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOffline.map(course => (
              <CourseCard
                key={course.id}
                {...course}
                onEnroll={() => handleEnroll(course.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- MODAL + EMAIL FORM -------------------- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-card p-6 rounded-xl w-full max-w-md relative"
          >
            <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3">
              <X />
            </button>

            <h3 className="text-xl font-bold mb-2">Enroll Now</h3>
            <p className="text-sm mb-4">
              Course: <strong>{selectedCourse}</strong>
            </p>

            <form onSubmit={handleEmailSend} className="space-y-4">
              <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <Input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <Textarea placeholder="Message (optional)" value={message} onChange={(e) => setMessage(e.target.value)} />
              <Button type="submit" className="w-full">Send Enrollment</Button>
            </form>
          </motion.div>
        </div>
      )}
    </Layout>
  );
};

export default Courses;
