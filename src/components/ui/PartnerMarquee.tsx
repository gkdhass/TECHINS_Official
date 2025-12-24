import { motion } from "framer-motion";

interface PartnerMarqueeProps {
  partners: { name: string; logo: string }[];
}

const PartnerMarquee = ({ partners }: PartnerMarqueeProps) => {
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="overflow-hidden py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex marquee"
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 mx-8 lg:mx-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnerMarquee;
