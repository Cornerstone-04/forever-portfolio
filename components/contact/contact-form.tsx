import { motion } from "motion/react";

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  submitted: boolean;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

export const ContactForm = ({
  formData,
  submitted,
  handleChange,
  handleSubmit,
}: ContactFormProps) => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-12 border-t border-[#B8AB9C]/20">
      <div className="max-w-2xl mx-auto">
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
            <em>Send Message</em>
          </h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#CFC8BE]/20 border border-[#B8AB9C]/20 p-12 rounded text-center"
            >
              <h3
                className="text-2xl text-[#3d3d3d] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Thank You!
              </h3>
              <p className="text-[#B8AB9C]">
                Your message has been received. I&apos;ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm uppercase tracking-[0.2em] text-[#B8AB9C] mb-3"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#ECE4DB] border border-[#B8AB9C]/30 text-[#3d3d3d] placeholder-[#B8AB9C]/50 focus:outline-none focus:border-[#C4A69B] transition-all"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm uppercase tracking-[0.2em] text-[#B8AB9C] mb-3"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#ECE4DB] border border-[#B8AB9C]/30 text-[#3d3d3d] placeholder-[#B8AB9C]/50 focus:outline-none focus:border-[#C4A69B] transition-all"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm uppercase tracking-[0.2em] text-[#B8AB9C] mb-3"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#ECE4DB] border border-[#B8AB9C]/30 text-[#3d3d3d] placeholder-[#B8AB9C]/50 focus:outline-none focus:border-[#C4A69B] transition-all"
                  placeholder="What is this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm uppercase tracking-[0.2em] text-[#B8AB9C] mb-3"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#ECE4DB] border border-[#B8AB9C]/30 text-[#3d3d3d] placeholder-[#B8AB9C]/50 focus:outline-none focus:border-[#C4A69B] transition-all resize-none"
                  placeholder="Tell me more about your project..."
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                type="submit"
                className="w-full px-6 py-3 bg-[#3d3d3d] text-[#ECE4DB] uppercase tracking-[0.2em] text-sm font-medium hover:bg-[#C4A69B] transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
