import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import templeCourtyard from "@/assets/temple-courtyard.jpg";

const VenueSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-temple">
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-temple-sandalwood/60 font-body text-sm tracking-[0.3em] uppercase mb-4">
            The Sacred Venue
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient">
            Sri Kapaleeshwarar Temple
          </h2>
          <p className="font-body text-muted-foreground mt-3 text-sm">
            Mylapore, Chennai, Tamil Nadu
          </p>
        </motion.div>

        {/* Venue image with carved frame effect */}
        <motion.div
          className="relative rounded-sm overflow-hidden border border-temple-gold/20 glow-divine"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <img
            src={templeCourtyard}
            alt="Temple courtyard venue"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <p className="font-display text-lg text-foreground">
              A temple of ancient grace and divine beauty
            </p>
          </div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          className="mt-8 border border-temple-gold/20 rounded-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <iframe
            title="Venue Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.269!3d13.034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f1b0!2sKapaleeshwarar+Temple!5e0!3m2!1sen!2sin!4v1"
            className="w-full h-48 md:h-64 opacity-80"
            style={{ border: 0, filter: "sepia(30%) saturate(70%)" }}
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
