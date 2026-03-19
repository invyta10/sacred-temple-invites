import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ClosingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-temple min-h-[70vh]">
      {/* Golden glow background */}
      <div className="absolute inset-0 bg-divine-radial opacity-50" />

      <div className="relative z-10 text-center max-w-xl mx-auto">
        <motion.p
          className="text-temple-sandalwood/60 font-body text-sm tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          With love & devotion
        </motion.p>

        <motion.h2
          className="font-display text-3xl md:text-4xl text-gold-gradient mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We await your gracious presence
        </motion.h2>

        <motion.div
          className="space-y-2 text-temple-sandalwood/50 font-body text-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p>The Ramachandran Family</p>
          <p className="text-temple-gold/40">&</p>
          <p>The Venkataraman Family</p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-temple-gold/30" />
            <span className="text-temple-gold/40 text-xs font-body tracking-widest">
              ॐ शान्तिः शान्तिः शान्तिः
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-temple-gold/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
