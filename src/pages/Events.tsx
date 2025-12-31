import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Monitor, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EnrollModal from "@/components/ui/EnrollModal";
import hero1 from "@/assets/hero-1(e).jpg";
import hero2 from "@/assets/hero-2(e).jpg";
import hero3 from "@/assets/hero-3(e).jpg";
import hero4 from "@/assets/hero-4(e).jpg";
import hero5 from "@/assets/hero-5(e).jpg";
import hero6 from "@/assets/hero-6(e).jpg";

/* DATA – NO CHANGE */
const onlineEvents = [
  {
    id: 1,
    title: "IMPACT 360 – Online Learning Series",
    // date: "Jan 15, 2025",
    // time: "10:00 AM - 2:00 PM",
    image: hero1,
    type: "Online Series",
  },
  {
    id: 2,
    title: "Future Ready Virtual Program",
    // date: "Jan 20, 2025",
    // time: "6:00 PM - 8:00 PM",
    image: hero2,
    type: "Virtual Program",
  },
  {
    id: 3,
    title: "SkillUp Live – Online Sessions",
    // date: "Jan 25, 2025",
    // time: "11:00 AM - 1:00 PM",
    image: hero3,
    type: "Live Session",
  },
];


const offlineEvents = [
  {
    id: 4,
    title: "Growth Lab – Onsite Edition",
    // date: "Feb 5-6, 2025",
    // time: "9:00 AM - 6:00 PM",
    // location: "TECHINS Campus, Silicon Valley",
    image: hero4,
    type: "Hackathon",
  },
  {
    id: 5,
    title: "Student Elevation Day",
    // date: "Feb 10, 2025",
    // time: "3:00 PM - 7:00 PM",
    // location: "Tech Hub Convention Center",
    image: hero5,
    type: "Launch Event",
  },
  {
    id: 6,
    title: "The Knowledge Workshop",
    // date: "Feb 15, 2025",
    // time: "5:00 PM - 9:00 PM",
    // location: "Grand Tech Hotel, Downtown",
    image: hero6,
    type: "Networking",
  },
];

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleEnroll = (eventName: string) => {
    setSelectedEvent(eventName);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <section className="py-20 bg-[#dbd7c7] dark:bg-[#b3aa9e]">
        <div className="container mx-auto px-4">

          {/* HERO */}
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-[#faa114]/20 rounded-full text-sm font-medium mb-4">
              Events
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Upcoming <span className="text-[#faa114]">Events</span>
            </h1>
            <p className="text-lg opacity-80">
              Join our workshops, webinars, and networking events.
            </p>
          </AnimatedSection>

          {/* ONLINE EVENTS */}
          <div className="mb-20">
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <Monitor className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Online Events</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {onlineEvents.map((event) => (
                <AnimatedSection key={event.id}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-[#786e67] dark:bg-[#262a2b] rounded-xl overflow-hidden text-white"
                  >
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />

                    <div className="p-5">
                      <h3 className="font-semibold text-lg mb-3">{event.title}</h3>

                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#faa114]" />
                          {/* {event.date} */}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#faa114]" />
                          {/* {event.time} */}
                        </div>
                      </div>

                      {/* ✅ FIXED BUTTON */}
                      <Button
                        className="w-full bg-[#faa114] text-black hover:bg-[#e5940f]"
                        onClick={() => handleEnroll(event.title)}
                      >
                        Register Now
                      </Button>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* OFFLINE EVENTS */}
          <div>
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Offline Events</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offlineEvents.map((event) => (
                <AnimatedSection key={event.id}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-[#786e67] dark:bg-[#262a2b] rounded-xl overflow-hidden text-white"
                  >
                    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />

                    <div className="p-5">
                      <h3 className="font-semibold text-lg mb-3">{event.title}</h3>

                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#faa114]" />
                          {/* {event.date} */}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#faa114]" />
                          {/* {event.time} */}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#faa114]" />
                          {/* {event.location} */}
                        </div>
                      </div>

                      {/* ✅ FIXED BUTTON */}
                      <Button
                        className="w-full bg-[#faa114] text-black hover:bg-[#e5940f]"
                        onClick={() => handleEnroll(event.title)}
                      >
                        Register Now
                      </Button>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      
      <EnrollModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title={selectedEvent}
  type="event"
/>

    </Layout>
  );
};

export default Events;
