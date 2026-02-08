"use client";

import {
  ResumeCertification,
  ResumeEducation,
  ResumeExperience,
  ResumeHero,
  ResumeSkills,
} from "@/components/resume";
import { Divider } from "@/components/ui/divider";
import { blobURL } from "@/lib/constants";

export default function Resume() {
  const downloadLink = `${blobURL}/Forever%20Ephraim%202026.pdf`;
  // const handleDownload = () => {
  //   window.open(downloadLink, "_blank", "noopener,noreferrer");
  // };

  return (
    <div className="min-h-screen bg-[#ECE4DB] pt-32">
      <ResumeHero link={downloadLink} />
      {/* Divider */}
      <Divider width={1600} />
      {/* Experience Section */}
      <ResumeExperience />
      {/* Skills Section */}
      <ResumeSkills />
      {/* Education Section */}
      <ResumeEducation />
      {/* Certifications Section */}
      <ResumeCertification />
    </div>
  );
}
