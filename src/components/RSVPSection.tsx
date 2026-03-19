import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const RSVPSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your RSVP! We look forward to celebrating with you.", {
      duration: 5000,
    });
    setFormData({ name: "", guests: "1", message: "" });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello! I would love to attend Priya & Aravind's wedding celebration. Please count me in! 🙏"
  );

  return (
    <section ref={ref} className="section-temple kolam-dots">
      <div className="relative z-10 w-full max-w-lg mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-temple-sandalwood/60 font-body text-sm tracking-[0.3em] uppercase mb-4">
            Grace us with your presence
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient">
            RSVP
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div>
            <label className="font-body text-sm text-temple-sandalwood/70 tracking-wide block mb-2">
              Your Name
            </label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-muted/50 border-temple-gold/20 text-foreground font-body focus:border-temple-gold/50 focus:ring-temple-gold/20 transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="font-body text-sm text-temple-sandalwood/70 tracking-wide block mb-2">
              Number of Guests
            </label>
            <Input
              type="number"
              min="1"
              max="10"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="bg-muted/50 border-temple-gold/20 text-foreground font-body focus:border-temple-gold/50 focus:ring-temple-gold/20 transition-all duration-300"
            />
          </div>

          <div>
            <label className="font-body text-sm text-temple-sandalwood/70 tracking-wide block mb-2">
              Your Blessings (optional)
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-muted/50 border-temple-gold/20 text-foreground font-body focus:border-temple-gold/50 focus:ring-temple-gold/20 transition-all duration-300 min-h-[100px]"
              placeholder="Share your wishes for the couple..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-body text-sm tracking-[0.2em] uppercase border border-temple-gold/40 text-temple-gold rounded-sm transition-all duration-300 hover:bg-temple-gold/10 hover:border-temple-gold/60 hover:shadow-[0_0_20px_hsl(38_65%_50%/0.15)]"
          >
            Accept with Grace
          </button>
        </motion.form>

        {/* WhatsApp button */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground text-xs mb-3 font-body">Or respond quickly via</p>
          <a
            href={`https://wa.me/918141721001?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-temple-green/40 text-temple-green rounded-sm font-body text-sm tracking-wide transition-all duration-300 hover:bg-temple-green/10"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp RSVP
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
