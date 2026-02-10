import { formApi } from "@/lib/api";
import { formspreeID } from "@/lib/constants";
import { motion } from "motion/react";
import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const form_fields = [
    {
      label: "Full Name *",
      id: "name",
      type: "text",
      placeholder: "Your name",
    },
    {
      label: "Email Address *",
      id: "email",
      type: "email",
      placeholder: "your@email.com",
    },
    {
      label: "Subject *",
      id: "subject",
      type: "text",
      placeholder: "What is this about?",
    },
  ];

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await formApi.post(formspreeID, formData);

      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      setStatus("error");
      console.log(err);
    }
  };

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
            className="text-5xl md:text-7xl text-center font-light mb-12 text-[#3d3d3d]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <em>Send A Message</em>
          </h2>

          {status === "success" ? (
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
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm uppercase tracking-widest text-[#C4A69B] hover:text-[#3d3d3d] transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {form_fields.map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-sm uppercase tracking-[0.2em] text-[#B8AB9C] mb-3"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[#B8AB9C]/30 text-[#3d3d3d] placeholder-[#B8AB9C]/40 focus:outline-none focus:border-[#C4A69B] transition-all"
                    placeholder={field.placeholder}
                  />
                </motion.div>
              ))}

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
                  className="w-full px-4 py-3 bg-transparent border border-[#B8AB9C]/30 text-[#3d3d3d] placeholder-[#B8AB9C]/40 focus:outline-none focus:border-[#C4A69B] transition-all resize-none"
                  placeholder="Tell me more about your project..."
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-4 bg-[#3d3d3d] text-[#ECE4DB] uppercase tracking-[0.2em] text-sm font-bold hover:bg-[#C4A69B] transition-all duration-300 disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "error" && (
                <p className="text-sm text-red-500 text-center">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
