import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import mandalaPattern from "@/assets/mandala-pattern.png";

const CoupleIntro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-temple kolam-dots">
      {/* Rotating mandala background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src={mandalaPattern}
          alt=""
          className="mandala-rotate w-[600px] md:w-[800px] opacity-[0.06]"
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Decorative top */}
        <motion.div
          className="temple-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="text-temple-gold text-2xl">✦</span>
        </motion.div>

        <motion.p
          className="text-temple-sandalwood/70 font-body text-sm tracking-[0.25em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Together with their families
        </motion.p>

        {/* Bride name */}
        <motion.h2
          className="font-display text-5xl md:text-7xl font-light text-gold-gradient mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Priya
        </motion.h2>
        <motion.p
          className="font-body text-temple-sandalwood/60 text-sm tracking-widest mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Daughter of Mr. & Mrs. Ramachandran
        </motion.p>

        {/* Ampersand */}
        <motion.div
          className="my-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
        >
          <span className="font-display text-4xl md:text-5xl text-temple-gold/80 italic">&</span>
        </motion.div>

        {/* Groom name */}
        <motion.h2
          className="font-display text-5xl md:text-7xl font-light text-gold-gradient mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Aravind
        </motion.h2>
        <motion.p
          className="font-body text-temple-sandalwood/60 text-sm tracking-widest"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          Son of Mr. & Mrs. Venkataraman
        </motion.p>

        {/* Wedding date */}
        <motion.div
          className="mt-12 p-6 border border-temple-gold/20 rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <p className="font-body text-temple-gold text-sm tracking-[0.3em] uppercase">
            Request the honour of your presence
          </p>
          <p className="font-display text-2xl md:text-3xl text-foreground mt-3">
            Sunday, February 14, 2027
          </p>
          <p className="font-body text-temple-sandalwood/60 text-sm mt-2">
            At the auspicious Muhurtham — 9:30 AM
          </p>
        </motion.div>

        <motion.div
          className="temple-divider mt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-temple-gold text-2xl">✦</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleIntro;
