import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Monitor, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import EnrollModal from "@/components/ui/EnrollModal";

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

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

          {/* ONLINE EVENTS – UPCOMING SOON */}
          <div className="mb-20">
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <Monitor className="w-6 h-6 text-[#faa114]" />
              <h2 className="text-2xl font-bold">Online Events</h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-[#786e67] dark:bg-[#262a2b] rounded-xl p-10 text-center text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  Upcoming Soon
                </h3>
                <p className="opacity-80">
                  Exciting online sessions are on the way. Stay tuned!
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* OFFLINE EVENTS – UPCOMING SOON */}
          <div>
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-[#faa114]" />
              <h2 className="text-2xl font-bold">Offline Events</h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-[#786e67] dark:bg-[#262a2b] rounded-xl p-10 text-center text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  Upcoming Soon
                </h3>
                <p className="opacity-80">
                  Onsite events and workshops will be announced soon.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* MODAL (kept for future use) */}
      <EnrollModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="event"
        courseName={selectedEvent}
      />
    </Layout>
  );
};

export default Events;
