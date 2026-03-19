import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import mandapFire from "@/assets/mandap-fire.jpg";
import templeCorridor from "@/assets/temple-corridor.jpg";
import templeCourtyard from "@/assets/temple-courtyard.jpg";

const images = [
  { src: mandapFire, alt: "Sacred mandap with holy fire", caption: "The Sacred Mandap" },
  { src: templeCorridor, alt: "Temple corridor illuminated by lamps", caption: "Temple of Eternal Light" },
  { src: templeCourtyard, alt: "Decorated temple courtyard", caption: "A Courtyard of Blessings" },
];

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

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
            Moments of Grace
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient">
            Gallery
          </h2>
        </motion.div>

        {/* Story-style gallery */}
        <div className="space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative rounded-sm overflow-hidden border border-temple-gold/10 cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.8 }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <p className="font-display text-lg md:text-xl text-foreground">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
        >
          <motion.img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <button
            className="absolute top-6 right-6 text-temple-gold/60 font-body text-sm tracking-widest hover:text-temple-gold transition-colors"
            onClick={() => setLightbox(null)}
          >
            CLOSE
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
