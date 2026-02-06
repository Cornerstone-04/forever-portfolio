import { categories } from "@/lib/projects";

type FilterProps = {
  filter: string;
  setFilter: (cat: string) => void;
};

export const WorkFilter = ({ filter, setFilter }: FilterProps) => {
  return (
    <section className="pb-12 px-4 md:px-12">
      <div className="max-w-400 mx-auto">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-sm uppercase tracking-[0.15em] transition-all ${
                filter === cat
                  ? "bg-[#3d3d3d] text-[#ECE4DB]"
                  : "bg-[#CFC8BE]/20 text-[#B8AB9C] hover:bg-[#CFC8BE]/40"
              }`}
            >
              {cat === "all" ? "All Work" : cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
