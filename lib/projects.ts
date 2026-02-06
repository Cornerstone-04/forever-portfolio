export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  metric: string;
  skills: string[];
  image: string;  
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mental Health & Fitness",
    category: "Social Media Copy",
    description:
      "Blended storytelling and psychology-driven messaging to boost engagement and lead generation.",
    metric: "235% increase in lead generation",
    skills: ["Storytelling", "Creative Writing", "Lead Generation"],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Custom Storage (Woodwork)",
    category: "Social Media Copy",
    description:
      "Leveraged storytelling and audience insights to break through a low-response market. Combined emotional resonance with behavioral triggers.",
    metric: "300% increase in weekly lead volume",
    skills: ["Storytelling", "Creative Writing", "Lead Generation"],
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Ed-Tech Brand (Nigerian Graduate Report)",
    category: "Email Campaign",
    description:
      "Created a storytelling-driven email campaign that inspired rapid participation and trust with a conversational tone.",
    metric: "1,000+ responses in 7 days",
    skills: ["Email Marketing", "Copywriting", "Engagement Strategy"],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Deela Dental Clinic",
    category: "Email Campaign",
    description:
      "Developed a friendly, youth-oriented campaign that simplified medical language using relatable Nigerian slang, visuals, and humor.",
    metric: "Simplified medical content (IV aligners)",
    skills: ["Copywriting", "Email Marketing", "Audience Targeting"],
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Hackathon Campaign (Klusterthon)",
    category: "Audio-Visual Copywriting",
    description:
      "Wrote and directed copy for all video marketing materials, from voiceover scripts to on-screen text. Collaborated with editing team.",
    metric: "2,000+ sign-ups in under two months",
    skills: ["Scriptwriting", "Storytelling", "Creative Direction"],
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Laundry Service",
    category: "Social Media Copy",
    description:
      "Used tailored messaging to double engagement and grow local leads despite challenging low-response location.",
    metric: "160% increase in lead volume",
    skills: ["Copywriting", "Community Engagement", "Marketing Strategy"],
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop",
  },
];

const categories = [
  "all",
  "Social Media Copy",
  "Email Campaign",
  "Audio-Visual Copywriting",
];

export { projects, categories };
