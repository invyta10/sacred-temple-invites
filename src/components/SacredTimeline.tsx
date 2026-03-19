import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Flower2, Sparkles, PartyPopper } from "lucide-react";

const events = [
  {
    name: "Haldi Ceremony",
    date: "February 12, 2027 — 10:00 AM",
    venue: "Family Residence, Chennai",
    description: "A sacred turmeric blessing for the couple",
    icon: Sparkles,
    accent: "38 70% 55%",
  },
  {
    name: "Mehendi & Sangeet",
    date: "February 13, 2027 — 5:00 PM",
    venue: "Grand Mahal Banquet, Chennai",
    description: "An evening of intricate henna art and music",
    icon: Flower2,
    accent: "140 35% 40%",
  },
  {
    name: "Wedding Ceremony",
    date: "February 14, 2027 — 9:30 AM",
    venue: "Sri Kapaleeshwarar Temple, Mylapore",
    description: "The sacred union around the holy fire",
    icon: Flame,
    accent: "25 85% 50%",
  },
  {
    name: "Grand Reception",
    date: "February 14, 2027 — 7:00 PM",
    venue: "The Leela Palace, Chennai",
    description: "A celebratory evening of blessings and joy",
    icon: PartyPopper,
    accent: "350 45% 40%",
  },
];

const SacredTimeline = () => {
  return (
    <section className="section-temple">
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-temple-sandalwood/60 font-body text-sm tracking-[0.3em] uppercase mb-4">
            The Sacred Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient">
            Wedding Events
          </h2>
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-temple-gold/30 to-transparent" />

          {events.map((event, i) => (
            <TimelineEvent key={event.name} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineEvent = ({
  event,
  index,
}: {
  event: (typeof events)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = event.icon;

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-6 md:gap-8 mb-16 last:mb-0"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8 }}
    >
      {/* Icon node */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-temple-gold/30 flex items-center justify-center"
          style={{
            background: `radial-gradient(circle, hsl(${event.accent} / 0.15), transparent)`,
            boxShadow: `0 0 20px hsl(${event.accent} / 0.2)`,
          }}
        >
          <Icon
            className="w-5 h-5 md:w-6 md:h-6"
            style={{ color: `hsl(${event.accent})` }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-1 md:pt-3">
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">
          {event.name}
        </h3>
        <p className="font-body text-temple-sandalwood/60 text-sm italic mb-3">
          {event.description}
        </p>
        <div className="space-y-1">
          <p className="font-body text-temple-gold text-sm tracking-wide">
            {event.date}
          </p>
          <p className="font-body text-muted-foreground text-sm">
            {event.venue}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SacredTimeline;
