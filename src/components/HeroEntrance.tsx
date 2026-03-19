import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import templeCorridor from "@/assets/temple-corridor.jpg";

const HeroEntrance = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="relative h-[150vh] overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="fixed inset-0 w-full h-screen"
        style={{ y, scale, opacity }}
      >
        <img
          src={templeCorridor}
          alt="Temple corridor with oil lamps"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 bg-divine-radial" />
      </motion.div>

      {/* Welcome text */}
      <motion.div
        className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: textOpacity }}
      >
        <motion.p
          className="text-temple-sandalwood font-body text-sm tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          ॐ श्री गणेशाय नमः
        </motion.p>

        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-gold-gradient leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          With Divine Blessings
        </motion.h1>

        <motion.p
          className="font-display text-lg md:text-xl text-foreground/70 mt-6 max-w-2xl italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          We invite you to celebrate the sacred union
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="text-temple-sandalwood/60 text-xs tracking-widest uppercase font-body">
            Scroll to enter
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-temple-gold/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroEntrance;
