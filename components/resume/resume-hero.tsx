import { Download } from "lucide-react";
import { motion } from "motion/react";

export const ResumeHero = ({ link }: { link: string }) => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12">
      <div className="max-w-400 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#B8AB9C] mb-8 block">
            Resume{" "}
          </span>
          <h1 className="text-[clamp(2.5rem,12vw,10rem)] font-black leading-[0.9] tracking-tighter text-[#3d3d3d] uppercase mb-8">
            Professional
            <br />
            <span className="text-[#C4A69B]">Background</span>
          </h1>
          <p className="text-lg text-[#B8AB9C] max-w-2xl mb-8">
            A track record of transforming words into results for brands across
            industries.
          </p>
          <a
            href={link}
            target="_blank"
            download
            className="flex items-center w-fit gap-2 px-6 py-3 bg-[#3d3d3d] text-[#ECE4DB] font-medium whitespace-nowrap hover:bg-[#C4A69B] transition-all duration-300"
          >
            <Download size={18} />
            Download PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
};
