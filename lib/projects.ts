export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  metric: string;
  skills: string[];
  image: string;
  slug: string;
  brief: string;
  approach: string;
  copyExcerpt: {
    label: string;
    text: string;
  };
  result: string;
  driveUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Hackathon Campaign (Klusterthon)",
    category: "Audio-Visual Copywriting",
    description:
      "Wrote and directed copy for all marketing materials, from voiceover scripts and on-screen text to social media and email copy.",
    metric: "2,000+ sign-ups in under two months",
    skills: ["Scriptwriting", "Storytelling", "Creative Direction"],
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    slug: "klusterthon-campaign",
    brief:
      "Klusterthon needed to drive sign-ups for their 2025 hackathon — fast. The challenge was cutting through a noisy tech events space and getting developers, designers, and product thinkers to not just notice the campaign, but act on it. The target was ambitious: fill the cohort before the deadline.",
    approach:
      "I developed the campaign's core messaging framework first — a central idea that the hackathon wasn't just a competition, but a launchpad. From there, I wrote across every channel: promo video scripts with on-screen text, social media copy for Twitter/X, and email sequences to keep registered participants engaged and reduce drop-off. Each piece was calibrated for its platform — short and punchy for social, narrative-driven for email, energetic and visual for video.",
    copyExcerpt: {
      label: "Twitter/X Promo Post",
      text: "The best way to break into tech? Build something.\n\nKlusterthon 2025 is your chance to team up, ship fast, and get noticed by people who matter.\n\n72 hours. Real problems. Real prizes.\n\nApplications close soon — grab your spot 👇",
    },
    result:
      "The campaign drove 2,000+ applications and kept a community of 1,500+ registered participants engaged through to event day. A single Twitter/X post hit 9,273 impressions with 503 engagements. The promo video content reached 837 unique views organically.",
    driveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Mental Health Coach for Athletes",
    category: "Social Media Copy",
    description:
      "Blended storytelling and psychology-driven messaging to boost engagement and lead generation.",
    metric: "235% increase in lead generation",
    skills: ["Storytelling", "Creative Writing", "Lead Generation"],
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    slug: "mental-health-coach-athletes",
    brief:
      "A former Division 1 football player and NFL hopeful had built a resilience coaching practice for athletes — but his social media wasn't converting. The original target was 28 qualified leads per month. He was falling short, and the messaging wasn't connecting with the local athletic community he was trying to reach.",
    approach:
      "The key insight was that athletes don't respond to abstract mental health language — they respond to performance. I reframed the messaging around outcomes athletes care about: coming back from injury stronger, showing up in high-stakes moments, mental toughness as a trainable skill. I led with the coach's own credibility story — Division 1 background, coaching MLB pitchers back to peak velocity — and made the copy feel like it came from a teammate, not a therapist.",
    copyExcerpt: {
      label: "Facebook Ad Copy",
      text: "Hey [TOWNNAME]!\n\nPlaying Division 1 football at Pitt Uni was an incredible experience, but the real lessons came from the setbacks, comebacks, and my teammates who pushed me to be better.\n\nToday, I'm a husband, a dad to 2 amazing kids, and the owner of [business name], where we help young athletes strengthen their mental game on and off the field.\n\nWhether you're recovering from a tough season or preparing for the next big win, I'd love to support you.\n\nThis January, we're offering 20% off all training programs for first-time clients.\n\nBook a call with me here: [LINK]",
    },
    result:
      "The campaign generated an average of 94 qualified leads per month — more than three times the original monthly target of 28. That's a 235% increase in lead generation, driven entirely by targeted messaging built around local values and community identity.",
    driveUrl: "",
  },
  {
    id: 3,
    title: "Custom Storage Service",
    category: "Social Media Copy",
    description:
      "Leveraged storytelling and audience insights to break through a low-response market. Combined emotional resonance with behavioral triggers.",
    metric: "300% increase in weekly lead volume",
    skills: ["Storytelling", "Creative Writing", "Lead Generation"],
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=600&fit=crop",
    slug: "custom-storage-service",
    brief:
      "A custom storage and closet solutions business operating in Oregon was struggling in a historically low-response location. They were averaging just 1 qualified lead per week — and the previous messaging wasn't giving people a reason to care about storage solutions beyond the functional.",
    approach:
      "I leaned into the human story behind the business: a retired veterinarian and his wife who pivoted into her family's custom storage business. That story — trading cattle and stethoscopes for closets and garage systems — gave the brand a personality that flat, product-focused copy never could. I also used psychological triggers around chaos vs. control, and made the lifetime warranty a centrepiece rather than a footnote.",
    copyExcerpt: {
      label: "Facebook Ad Copy",
      text: "I retired from being a veterinarian in 2022… and honestly, I got bored.\n\nMy wife and I had vet practices here in the [location] area, but after selling them, we decided to stay close to home and do something new.\n\nSo we jumped into her family's business, [business name]. Her dad started it in [year] and now we run the [location] location.\n\nMy love for animals didn't retire, though. I still start my mornings checking our cattle, feeding our horses, chickens, and our dog, Rogue; then I'm off helping folks in [TOWNNAME] get organized with custom closets, garages, wallbeds, and more.\n\nWe build everything floor-based (not those rail systems that can fail), use industrial-grade materials, and offer the only transferable lifetime warranty in the industry. Plus, we work with every budget — custom doesn't have to mean costly.\n\nWe're offering free design consults and a free accessory upgrade for group members.\n\nGrab your spot here: [LINK]",
    },
    result:
      "Weekly lead volume jumped from an average of 1 lead to 4 — a 300% increase. This was in a location previously considered too difficult to run effective lead-gen campaigns. The copy broke through by making the business feel human and locally rooted rather than transactional.",
    driveUrl: "",
  },
  {
    id: 4,
    title: "Ed-Tech Brand — Stutern Graduate Accelerator",
    category: "Email Campaign",
    description:
      "Created a storytelling-driven email campaign that inspired rapid participation and trust with a conversational tone.",
    metric: "1,000+ responses in 7 days",
    skills: ["Email Marketing", "Copywriting", "Engagement Strategy"],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    slug: "stutern-graduate-accelerator",
    brief:
      "Stutern, a tech accelerator for Nigerian graduates, needed to fill cohort enrolment across multiple programs — including a women's tech scholarship — and grow their social presence. The brief also included a newsletter campaign to keep existing subscribers engaged and converting through each cohort cycle.",
    approach:
      "I anchored the email copy in real student stories — using voices like Silas, who went from self-doubt to working at Canva in Australia, to make the program feel achievable rather than aspirational in an intimidating way. The tone was warm, peer-to-peer, and honest. For social, I wrote platform-specific copy for Instagram, LinkedIn, and Twitter that grew the following and drove scholarship applications.",
    copyExcerpt: {
      label: "Newsletter Email — Stutern Graduate Accelerator",
      text: '"Others are already good at this, at what stage do I become that good if I am cut out for UI/UX Design?"\n\nThat was Silas when he joined our accelerator program. We can relate to the feeling of getting into something new. Thoughts like, "Is this meant for me? Can I do this?" keep running through your mind, making you feel less confident. Then again, how would you find out if you don\'t try and also put your heart into it?\n\nToday, Silas\' story is different — he works in Australia for Canva.\n\nWe are here to give you the head start into a career in tech. With the right mentors, peer-to-peer critiques and challenging projects, we believe any skill can be learnt. Apply to join our February 2021 cohort today!',
    },
    result:
      "The campaign drove 1,000+ applications for the women's tech scholarship in under 7 days. Social following grew by 25% across platforms. Newsletter copy consistently contributed to hitting cohort enrolment targets each cycle.",
    driveUrl: "",
  },
  {
    id: 5,
    title: "Laundry Service",
    category: "Social Media Copy",
    description:
      "Used tailored messaging to double engagement and grow local leads despite a challenging low-response location.",
    metric: "160% increase in lead volume",
    skills: ["Copywriting", "Community Engagement", "Marketing Strategy"],
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop",
    slug: "laundry-service",
    brief:
      "A pickup-and-delivery laundry service was operating in a market that historically underperformed for Facebook lead-gen. Average post engagement was low, and the brand had no distinct voice — just functional, forgettable copy about what the service does.",
    approach:
      "The positioning shift was simple but effective: stop selling laundry, start selling time. I wrote from the perspective of a busy parent — the overwhelmed dad with two kids under two, drowning in weekend chores — to make the target audience feel seen before making the offer. The copy addressed the emotional cost of laundry day, then introduced the service as the solution to that specific feeling, not just the task.",
    copyExcerpt: {
      label: "Facebook Ad Copy",
      text: "Weekends used to be for laundry until I found a way out.\n\nMy wife and I have two kids under two, and between work, diaper changes, and playtime, life can be a marathon sometimes. The last thing I want is to add laundry to the list.\n\nI know many other parents go through this. So, I bought [business name] in 2023 to make life a little easier for busy families in [location].\n\nWe offer pickup & delivery laundry service, so you can stop worrying about one more thing.\n\nFirst-time customers in [location] still get $50 off.\n\nRequest your laundry pickup here: [LINK]",
    },
    result:
      "Despite the historically low-response location, the campaign more than doubled average post engagement and increased lead volume by over 160%. The copy overcame market limitations by leading with empathy before introducing the offer.",
    driveUrl: "",
  },
  {
    id: 6,
    title: "Deela Dental Clinic",
    category: "Email Campaign",
    description:
      "Developed a friendly, youth-oriented campaign that simplified dental content using relatable Nigerian slang, visuals, and humor.",
    metric: "Simplified complex dental content for 1,000+ subscribers",
    skills: ["Copywriting", "Email Marketing", "Audience Targeting"],
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop",
    slug: "deela-dental-clinic",
    brief:
      "Deela Dental needed email campaigns that would actually get opened — and read — by young Nigerian adults. The challenge: dental content is dry, clinical, and easy to ignore. The secondary brief was a re-engagement email after a long period of silence from the brand.",
    approach:
      "I threw out the medical playbook entirely. For the IV Aligners campaign, I wrote like I was texting a friend — using Nigerian slang, light humour, and a casual warmth that made Invisalign feel exciting rather than anxiety-inducing. For the re-engagement email, I leaned into the awkwardness of going quiet (relatable!) and turned the brand's silence into a moment of self-aware humour before dropping the news about the new Ikeja branch.",
    copyExcerpt: {
      label: "Email — IV Aligners Made Simple",
      text: "Subject Line: Crooked teeth? You'll want to see this 🦷\nPreview Text: Something lowkey changing smiles around here... and you'll want in.\n\nHeyyyy [NAME]!\n\nLet's talk about something that's lowkey changing lives around here: IV Aligners.\n\nThey're basically the chill cousin of braces. No wires, no metal, and definitely no \"train track\" vibes. Just smooth, clear trays that gently shift your teeth into place over time.\n\nAnd yes, they actually work!\n\nSo if you've been thinking of straightening your teeth or fixing that one stubborn tooth that's just doing anyhow... this might be your sign.\n\nReady to start your IV Aligner journey? Click below to book a consultation and see if it's right for you.\n\n[Book a Consultation]\n\nYour future smile is already smiling at you.",
    },
    result:
      "The campaigns positioned Deela Dental as a brand with a distinct, trustworthy voice in a crowded market. The IV Aligners email made complex dental content approachable and shareable. The re-engagement newsletter successfully reactivated the subscriber base ahead of the Ikeja branch launch.",
    driveUrl: "",
  },
];

const categories = [
  "all",
  "Social Media Copy",
  "Email Campaign",
  "Audio-Visual Copywriting",
];

export { projects, categories };
