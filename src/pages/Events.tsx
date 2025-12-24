import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Monitor, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EnrollModal from "@/components/ui/EnrollModal";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const onlineEvents = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: "Jan 15, 2025",
    time: "10:00 AM - 2:00 PM",
    image: hero1,
    type: "Workshop",
  },
  {
    id: 2,
    title: "AI in 2025: Industry Trends",
    date: "Jan 20, 2025",
    time: "6:00 PM - 8:00 PM",
    image: hero2,
    type: "Webinar",
  },
  {
    id: 3,
    title: "Career in Cloud Computing",
    date: "Jan 25, 2025",
    time: "11:00 AM - 1:00 PM",
    image: hero3,
    type: "Panel Discussion",
  },
];

const offlineEvents = [
  {
    id: 4,
    title: "Tech Hackathon 2025",
    date: "Feb 5-6, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "TECHINS Campus, Silicon Valley",
    image: hero2,
    type: "Hackathon",
  },
  {
    id: 5,
    title: "Data Science Bootcamp Launch",
    date: "Feb 10, 2025",
    time: "3:00 PM - 7:00 PM",
    location: "Tech Hub Convention Center",
    image: hero3,
    type: "Launch Event",
  },
  {
    id: 6,
    title: "Alumni Networking Meet",
    date: "Feb 15, 2025",
    time: "5:00 PM - 9:00 PM",
    location: "Grand Tech Hotel, Downtown",
    image: hero1,
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
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Events
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Upcoming <span className="text-gradient">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our workshops, webinars, and networking events to enhance your
              learning and connect with industry professionals.
            </p>
          </AnimatedSection>

          {/* Online Events */}
          <div className="mb-20">
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Monitor className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Online Events
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              {onlineEvents.map((event, index) => (
                <AnimatedSection key={event.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-card border border-border rounded-xl overflow-hidden card-hover-glow group"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-lg text-foreground mb-3">
                        {event.title}
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-accent" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-accent" />
                          {event.time}
                        </div>
                      </div>
                      <Button
                        onClick={() => handleEnroll(event.title)}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 btn-glow"
                      >
                        Register Now
                      </Button>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Offline Events */}
          <div>
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Offline Events
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offlineEvents.map((event, index) => (
                <AnimatedSection key={event.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-card border border-border rounded-xl overflow-hidden card-hover-glow group"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-lg text-foreground mb-3">
                        {event.title}
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-accent" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-accent" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          {event.location}
                        </div>
                      </div>
                      <Button
                        onClick={() => handleEnroll(event.title)}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 btn-glow"
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Want to Host an Event?
            </h2>
            <p className="text-muted-foreground mb-6">
              Partner with TECHINS to organize workshops, hackathons, or
              networking events. Reach out to our events team.
            </p>
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 btn-glow"
              onClick={() => handleEnroll("Event Partnership Inquiry")}
            >
              Contact Events Team
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Registration Modal */}
      <EnrollModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName={selectedEvent}
      />
    </Layout>
  );
};

export default Events;
