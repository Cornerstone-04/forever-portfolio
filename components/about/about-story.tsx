import { motion } from "motion/react";
import Image from "next/image";

export const AboutStory = () => {
  const storyText = [
    "YES, that's really my name, and no, I didn't make it up for branding, though maybe I should've.",
    "I've been writing professionally for 4+ years, starting out in the trenches of digital marketing: social posts, email campaigns, blogs, you name it. Since then, I've written for hundreds of brands (plus my own blog — On a Journey) and I've learned this: good copy isn't about sounding smart, it's about sounding human.",
    "That's what I do. Copies that connect, make people feel something, and (bonus) actually convert.",
    "Case in point: a roofing client hit $100K in 10 months, another doubled leads, and a mental health company tripled engagement by leaning into storytelling that felt real. It's not magic, it's just words that sound like they were written by a person, not a robot.",
    "So… if your brand is ready for copy that feels alive, WELCOME. Let's get you initiated.",
  ];
  return (
    <section className="py-24 md:py-32 px-4 md:px-12 border-t border-[#B8AB9C]/20">
      <div className="max-w-400 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl md:text-7xl font-light mb-12 text-[#3d3d3d]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <em> &quot;Forever?? That&apos;s Your Real Name?&quot;</em>
            </h2>

            <div className="space-y-8 text-lg text-[#B8AB9C] leading-relaxed">
              {storyText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-start md:h-full"
          >
            <div className="relative w-full max-w-lg overflow-hidden border border-[#B8AB9C]/20 bg-[#CFC8BE]/10 shadow-xl">
              <div className="relative aspect-3/4">
                <Image
                  src="/forever-2.jpeg"
                  alt="Forever Ephraim"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
