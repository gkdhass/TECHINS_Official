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
      <section className="py-20 bg-[#B7B7B7] dark:bg-[#0C120C] text-neutral-900 dark:text-neutral-100">
        <div className="container mx-auto px-4">

          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-[#fa9a02]/10 text-[#fa9a02] rounded-full text-sm font-medium mb-4">
              Events
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Upcoming <span className="text-[#fa9a02]">Events</span>
            </h1>
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              Join our workshops, webinars, and networking events.
            </p>
          </AnimatedSection>

          {/* HINT ITEMS */}
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20">
            {[
              { icon: Calendar, label: "Schedule", sub: "To be announced" },
              { icon: Clock, label: "Duration", sub: "1–3 Hours" },
              { icon: Monitor, label: "Mode", sub: "Online & Offline" },
              { icon: MapPin, label: "Location", sub: "Shared soon" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 bg-[#2a2f2a] dark:bg-[#141a14] border border-white/10 rounded-xl p-4 hover:shadow-md transition">
                <Icon className="w-6 h-6 text-[#fa9a02]" />
                <div>
                  <p className="text-sm font-medium text-white">{label}</p>
                  <p className="text-xs text-white/60">{sub}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* ONLINE EVENTS */}
          <div className="mb-20">
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <Monitor className="w-6 h-6 text-[#fa9a02]" />
              <h2 className="text-2xl font-bold">Online Events</h2>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-[#2a2f2a] dark:bg-[#141a14] rounded-xl p-10 text-center text-white shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Upcoming Soon</h3>
                <p className="text-white/70">Exciting online sessions are on the way. Stay tuned!</p>
              </div>
            </AnimatedSection>
          </div>

          {/* OFFLINE EVENTS */}
          <div>
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-[#fa9a02]" />
              <h2 className="text-2xl font-bold">Offline Events</h2>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-[#2a2f2a] dark:bg-[#141a14] rounded-xl p-10 text-center text-white shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">Upcoming Soon</h3>
                <p className="text-white/70">Onsite events and workshops will be announced soon.</p>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </section>

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
