import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import mandalaPattern from "@/assets/mandala-pattern.png";

const WEDDING_DATE = new Date("2027-02-14T09:30:00+05:30");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section ref={ref} className="section-temple">
      {/* Mandala background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src={mandalaPattern}
          alt=""
          className="mandala-rotate w-[500px] md:w-[700px] opacity-[0.04]"
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.p
          className="text-temple-sandalwood/60 font-body text-sm tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Counting down to the
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-5xl text-gold-gradient mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Sacred Muhurtham
        </motion.h2>

        <div className="flex gap-4 md:gap-8 justify-center">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-temple-gold/30 flex items-center justify-center glow-divine">
                <span className="font-display text-2xl md:text-4xl text-temple-gold font-light">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <span className="font-body text-xs md:text-sm text-temple-sandalwood/50 mt-3 tracking-widest uppercase">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
