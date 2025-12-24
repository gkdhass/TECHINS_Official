import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

const StatsCard = ({ icon: Icon, value, label, delay = 0 }: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="bg-card border border-border rounded-xl p-6 card-hover-glow"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-accent/10 text-accent">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-2xl lg:text-3xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;
