import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Monitor,
  Users,
} from "lucide-react";
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

          {/* ================= HERO ================= */}
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-[#fa9a02]/10 text-[#fa9a02] rounded-full text-sm font-medium mb-4">
              Events
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Upcoming <span className="text-[#fa9a02]">Events</span>
            </h1>

            <p className="text-lg opacity-80">
              Join our workshops, webinars, and networking events.
            </p>
          </AnimatedSection>

          {/* ================= HINT ITEMS ================= */}
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20">
            
            <div className="flex items-center gap-3 bg-white dark:bg-[#0b0f1a] border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 hover:shadow-md transition">
              <Calendar className="w-6 h-6 text-[#fa9a02]" />
              <div>
                <p className="text-sm font-medium">Schedule</p>
                <p className="text-xs opacity-70">To be announced</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white dark:bg-[#0b0f1a] border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 hover:shadow-md transition">
              <Clock className="w-6 h-6 text-[#fa9a02]" />
              <div>
                <p className="text-sm font-medium">Duration</p>
                <p className="text-xs opacity-70">1–3 Hours</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white dark:bg-[#0b0f1a] border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 hover:shadow-md transition">
              <Monitor className="w-6 h-6 text-[#fa9a02]" />
              <div>
                <p className="text-sm font-medium">Mode</p>
                <p className="text-xs opacity-70">Online & Offline</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white dark:bg-[#0b0f1a] border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 hover:shadow-md transition">
              <MapPin className="w-6 h-6 text-[#fa9a02]" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-xs opacity-70">Shared soon</p>
              </div>
            </div>

          </AnimatedSection>

          {/* ================= ONLINE EVENTS ================= */}
          <div className="mb-20">
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <Monitor className="w-6 h-6 text-[#fa9a02]" />
              <h2 className="text-2xl font-bold">Online Events</h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-[#786e67] dark:bg-[#1a1d1f] rounded-xl p-10 text-center text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  Upcoming Soon
                </h3>
                <p className="opacity-80">
                  Exciting online sessions are on the way. Stay tuned!
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* ================= OFFLINE EVENTS ================= */}
          <div>
            <AnimatedSection className="flex items-center gap-3 mb-8">
              <Users className="w-6 h-6 text-[#fa9a02]" />
              <h2 className="text-2xl font-bold">Offline Events</h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-[#786e67] dark:bg-[#1a1d1f] rounded-xl p-10 text-center text-white">
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

      {/* ================= MODAL ================= */}
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
