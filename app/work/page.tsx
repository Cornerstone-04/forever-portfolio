"use client";

import { WorkFilter, WorkHero, WorkProjects } from "@/components/work";
import { projects } from "@/lib/projects";
import { useState } from "react";

export default function WorkPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-[#ECE4DB] pt-32">
      {/* Hero */}
      <WorkHero />
      {/* Filter */}
      <WorkFilter filter={filter} setFilter={setFilter} />
      {/* Projects Grid */}
      <WorkProjects filteredProjects={filteredProjects} />
    </div>
  );
}
