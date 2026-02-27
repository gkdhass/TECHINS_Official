import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const letters = "TECHINS".split("");

const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);
      if (p < 100) requestAnimationFrame(tick);
      else setTimeout(onDone, 300);
    };

    requestAnimationFrame(tick);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C120C]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Glow ring */}
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(250,154,2,0.15) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Logo */}
      <motion.img
        src={logo}
        alt="TECHINS"
        className="w-20 h-20 object-contain mb-6 relative z-10"
        initial={{ scale: 0, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      />

      {/* Letter-by-letter text */}
      <div className="flex gap-1 mb-8">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="text-3xl font-bold text-white tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.08, duration: 0.4, ease: "easeOut" }}
          >
            {letter === "I" ? (
              <span className="text-[#fa9a02]">{letter}</span>
            ) : (
              letter
            )}
          </motion.span>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#fa9a02] rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Tagline */}
      <motion.p
        className="mt-4 text-white/40 text-xs tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Connecting Education with Reality
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;