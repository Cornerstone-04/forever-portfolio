import { calendarLink } from "@/lib/constants";
import { motion } from "motion/react";

export const ContactSession = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-12 border-t border-[#B8AB9C]/20 bg-[#DED7CD]/30">
      <div className="max-w-400 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1">
            <h2
              className="text-5xl md:text-7xl font-light mb-8 text-[#3d3d3d]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <em>Book a Session</em>
            </h2>
            <p className="text-lg text-[#B8AB9C] max-w-xl mb-8 leading-relaxed">
              Prefer a face-to-face conversation? Skip the back-and-forth and
              pick a time that works best for you. Let&apos;s discuss your
              project or strategy over a virtual coffee.
            </p>
            <motion.a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-10 py-5 bg-[#3d3d3d] text-[#ECE4DB] uppercase tracking-[0.2em] text-sm font-bold hover:bg-[#C4A69B] transition-all duration-300"
            >
              Open Calendar
            </motion.a>
          </div>

          {/* Visual Element for the Calendar Section */}
          <div className="hidden md:block w-1/3 aspect-square border border-[#B8AB9C]/20 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="text-[12rem] font-black italic">2026</span>
            </div>
            <div className="absolute inset-12 border border-[#B8AB9C]/20 flex flex-col justify-center px-8">
              <p className="text-[#3d3d3d] font-bold text-2xl mb-2">
                Availability
              </p>
              <p className="text-[#B8AB9C] text-sm">Mon — Fri</p>
              <p className="text-[#B8AB9C] text-sm mb-6">9:00 AM — 5:00 PM</p>
              <div className="h-px bg-[#C4A69B]/40 w-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
