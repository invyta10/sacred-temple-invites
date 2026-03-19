import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BlessingsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-temple">
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          className="temple-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="text-temple-gold text-2xl">✦</span>
        </motion.div>

        {/* Sanskrit shloka */}
        <motion.div
          className="my-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <p className="font-sacred text-xl md:text-2xl text-temple-gold sacred-glow leading-relaxed">
            मांगल्यं तन्तुनानेन मम जीवन हेतुना।
          </p>
          <p className="font-sacred text-xl md:text-2xl text-temple-gold sacred-glow leading-relaxed mt-2">
            कण्ठे बध्नामि सुभगे सं जीव शरदः शतम्॥
          </p>
        </motion.div>

        <motion.p
          className="font-display text-sm md:text-base text-temple-sandalwood/50 italic max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          "This sacred thread is essential for my life. O blessed one, I tie this
          around your neck. May we live together happily for a hundred years."
        </motion.p>

        <motion.div
          className="temple-divider mt-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <span className="text-temple-gold text-2xl">✦</span>
        </motion.div>
      </div>
    </section>
  );
};

export default BlessingsSection;
