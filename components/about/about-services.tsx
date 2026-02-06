import { motion } from "motion/react";

export const AboutServices = () => {
  const services = [
    {
      title: "Social Media Copywriting",
      description:
        "Engaging, platform-specific copy that drives engagement, followers, and conversions. I craft compelling posts, captions, and campaigns tailored to your audience and goals.",
    },
    {
      title: "Email Campaigns",
      description:
        "Persuasive email sequences that nurture relationships and drive action. From newsletter copy to launch campaigns, I create messages that resonate and convert.",
    },
    {
      title: "Brand Voice & Strategy",
      description:
        "Defining and developing your brand's unique voice, tone, and messaging framework. Creating consistency across all communication channels and touchpoints.",
    },
    {
      title: "Content Strategy",
      description:
        "Comprehensive strategies that align your content with business goals. Planning, positioning, and executing content that reaches your audience where they are.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-12 border-t border-[#B8AB9C]/20">
      <div className="max-w-400 mx-auto">
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
            <em>What I Offer</em>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3
                  className="text-2xl font-light mb-4 text-[#3d3d3d]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#B8AB9C] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
