import {
  BookOpen,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "foreverephraim@gmail.com",
    href: "mailto:foreverephraim@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+2347013471417",
    href: "tel:+2347013471417",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "@forever-ephraim",
    href: "https://www.linkedin.com/in/forever-ephraim/",
  },
  {
    icon: Twitter,
    title: "Twitter",
    value: "@the__Tamtam",
    href: "https://x.com/the__Tamtam",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@_forever.ephraim",
    href: "https://www.instagram.com/_forever.ephraim",
  },
  {
    icon: BookOpen,
    title: "Substack",
    value: "@foreverephraim",
    href: "https://substack.com/@foreverephraim",
  },
];

const contactFAQS = [
  {
    q: "What services do you offer?",
    a: "I specialize in content strategy, editorial design, brand voice development, and storytelling. I work with organizations to create compelling narratives and strategic communication frameworks.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Project timelines vary depending on scope and complexity. Strategy projects typically take 4-8 weeks, while editorial design projects range from 6-12 weeks. We can discuss specific timelines for your project.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes! I love working with startups and helping them establish their brand voice and content strategy from the ground up. I offer flexible engagement models that work for early-stage companies.",
  },
  {
    q: "What is your pricing structure?",
    a: "Pricing varies based on project scope, complexity, and timeline. I offer project-based pricing, retainer arrangements, and hourly consulting. Let's discuss what works best for your needs.",
  },
  {
    q: "How do you approach content strategy?",
    a: "I start with deep audience research and brand analysis to understand your unique positioning. From there, I develop a comprehensive content strategy that aligns with your business goals and resonates with your target audience.",
  },
  {
    q: "Can I see samples of your work?",
    a: "Absolutely! Check out the Work section of this site to see selected projects. I'm happy to discuss case studies and results from previous projects during our initial consultation.",
  },
];

export { contactFAQS, contactMethods };
