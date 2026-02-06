import { type Project } from "@/lib/projects";
import { motion } from "motion/react";
import Image from "next/image";

export const WorkProjects = ({
  filteredProjects,
}: {
  filteredProjects: Project[];
}) => {
  return (
    <section className="py-12 px-4 md:px-12 pb-32">
      <div className="max-w-400 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="mb-6 overflow-hidden bg-[#CFC8BE]/20 aspect-4/3 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-3 block">
                {project.category}
              </span>

              <h3
                className="text-2xl font-light mb-3 text-[#3d3d3d] group-hover:text-[#C4A69B] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.title}
              </h3>

              <p className="text-[#3d3d3d]/70 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              <p
                className="text-2xl font-bold text-[#C4A69B] mb-6"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {project.metric}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-[#B8AB9C]/10 text-[#3d3d3d]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
