export const site = {
  name: 'Ressty Manuzon',
  fullName: 'Ressty Castañeda Manuzon',
  role: 'Product Manager',
  description:
    'Engineer-turned-Product Manager with 7+ years in tech, building consumer marketplace products and AI-powered automation.',
  email: 'resstymanuzon@gmail.com',
  linkedin: 'https://www.linkedin.com/in/resstymanuzon',
  github: 'https://github.com/resstymanuzon',
  // Hides the Writing section and Blog nav link. The /blog pages still build but aren't linked.
  showBlog: false,
};

export const traits = [
  {
    title: 'I speak engineer',
    color: 'coral',
    body: 'Years of writing full-stack code mean I can estimate realistically, weigh tech debt against features, and earn the trust of the engineers I work with.',
  },
  {
    title: 'I start with the why',
    color: 'yellow',
    body: 'Before deciding what to build, I want to understand the business problem. I use user interviews and data to find the problem worth solving first.',
  },
  {
    title: 'I lead by serving',
    color: 'blue',
    body: 'I build light, collaborative teams where people feel safe to push back. I clear blockers, give actionable feedback, and protect the team’s focus.',
  },
] as const;

export const experience = [
  {
    role: 'Senior Associate, Special Projects',
    company: 'SPX Express',
    period: 'May 2026 – Present',
    points: [
      'Lead a team of 4 delivering AI and automation projects for operations, and stabilized the team’s intake, prioritization, capacity planning, and delivery cadence.',
      'Launched an AI-based image validation tool for fraud detection: 85% less manual review volume and 50% less overall review time.',
      'Automated KYC application processing into Accept or Review queues, cutting manual review time by 46%.',
    ],
  },
  {
    role: 'IT Project Manager',
    company: 'FYB Technologies Inc.',
    period: 'Jul 2025 – Sep 2025',
    points: [
      'Turned management priorities into clear, actionable plans for technical teams and delivered projects on time.',
      'Served as the main liaison between executive stakeholders and development teams.',
    ],
  },
  {
    role: 'Associate Product Manager',
    company: 'Freelancer.com',
    period: 'Apr 2023 – Aug 2025',
    points: [
      'Ran a client notification experiment that increased hired freelancers by 9%.',
      'Revived user interviews to understand freelancer workflows and find friction points worth A/B testing.',
      'Partnered with international engineering and design teams across time zones.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Freelancer.com',
    period: 'Mar 2021 – Apr 2023',
    points: [
      'Built full-stack features to test marketplace hypotheses through A/B tests, such as chat suggestions that help freelancers win more work.',
      'Championed a shift-left mindset with QA to catch edge cases earlier and prevent scope creep.',
    ],
  },
  {
    role: 'Assistant R&D Engineer',
    company: 'Advanced World Solutions',
    period: 'Nov 2017 – Oct 2020',
    points: [
      'Built an automation script that boosted team productivity by up to 50%.',
      'Worked directly with Japanese clients to keep deliverables aligned.',
    ],
  },
];

export const education = {
  school: 'Texas A&M University',
  degree: 'B.S. Mechanical Engineering',
  year: '2017',
};

export const skills = {
  Product: ['Product strategy', 'User interviews', 'A/B testing', 'Prioritization'],
  Engineering: ['TypeScript', 'PHP', 'SQL', 'HTML', 'CSS'],
  Languages: ['English', 'Tagalog', 'Japanese (JLPT N3)'],
};

// `highlight` is a verbatim excerpt shown as the pull quote; `quote` holds the full text.
export const testimonials = [
  {
    name: 'Christian Jay Rosales',
    relation: 'Software Engineer · Reported to Ressty',
    color: 'coral',
    highlight:
      'Ressty is a standout PM, largely because his technical background allows him to bridge the gap between engineering and business.',
    quote: [
      'I had the pleasure of working under Ressty’s leadership for 8 months at Freelancer, where he was my Product Manager and I was a Software Engineer.',
      'Ressty is a standout PM, largely because his technical background allows him to bridge the gap between engineering and business. He understands complex processes, which helps him create accurate estimates and communicate seamlessly with the engineering team. He excels at translating this technical detail for stakeholders.',
      'He combines this with an outstanding work ethic. He is proactive in managing all aspects of the product, frequently going out of his way to talk to other teams to clear blockers and ensure everything runs smoothly. This meticulousness allows him to anticipate challenges and prevent unpredictable issues from derailing the team.',
      'As a leader, he is also a fantastic mentor who provides actionable feedback for growth. He is diligent in his product strategy, using data and research to back up his decisions. On top of it all, Ressty is incredibly approachable and builds a positive, comfortable team culture.',
      'I would be thrilled to work with him again.',
    ],
  },
  {
    name: 'Matthew Lopez',
    relation: 'Teammate',
    color: 'yellow',
    highlight: 'If you need a solid product manager who understands engineers, Ressty is that guy.',
    quote: [
      'If you need a solid product manager who understands engineers, Ressty is that guy. I’ve worked with him, both when he was a software engineer and when he became a product manager. He is a solid and highly technical PM having been in the trenches doing full stack web dev, which made it so smooth to work with him and build great products. He’s very data driven and is so passionate about UX. He’s known to be my company’s most avid user of Whimsical and Figma—he just loves to visualise and document everything from user flows to architectures to team processes which makes him so well organised. And overall he’s just a great individual to work with because he’s naturally good with people, jibes well with colleagues, and always looks out for them.',
    ],
  },
  {
    name: 'Elsha Siochi',
    relation: 'Software Engineer · Reported to Ressty',
    color: 'blue',
    highlight:
      'With his technical background, Ressty demonstrated strong judgment in balancing product goals with engineering realities.',
    quote: [
      'I worked with Ressty for more than a year while he was an Associate Product Manager on our team. As a software engineer, I saw firsthand how effectively he partnered with both engineering and product.',
      'With his technical background, Ressty demonstrated strong judgment in balancing product goals with engineering realities. He communicated clearly, took ownership of discussions, and kept us focused on delivering meaningful results. As a concrete example, his support for addressing technical debt improved developer experience and contributed to measurable business results, reflecting his long-term, impact-driven mindset.',
      'Beyond execution, Ressty was a positive force on the team. He genuinely cared about the people he worked with, and contributed to a collaborative and supportive culture that made the team more effective and enjoyable to work with. I would strongly recommend him to any team looking for a PM who partners closely with engineering while driving business goals.',
    ],
  },
  {
    name: 'Kiyan Vasquez',
    relation: 'Reported to Ressty',
    color: 'green',
    highlight:
      'As our PM, he was instrumental in leading multiple initiatives and features that were highly visible to both clients and stakeholders.',
    quote: [
      'I have worked under Ressty since the start of my formal employment at Freelancer.com. As one of my direct superiors, he had shown multiple times that he strives to explore all possible angles to create the best product decisions, from performing user interviews of his own volition, to taking in product feedback from the engineering team, to conversing with senior stakeholders. He has the knowledge and communication skills to effectively discuss with non-product teams like Operations or Engineering, easily informing them of product/feature goals.',
      'As our PM, he was instrumental in leading multiple initiatives and features that were highly visible to both clients and stakeholders. Despite being a direct manager, he has also proved himself to be capable of forming a light, collaborative and egalitarian team culture that persists to this day.',
    ],
  },
  {
    name: 'Juan Miguel Garcia',
    relation: 'Cross-team stakeholder',
    color: 'pink',
    highlight:
      'He is strategic, data-driven, and user focused with a balanced approach to product objectives and business goals.',
    quote: [
      'Ressty is among a handful of people I’ve worked with in my career who doesn’t just understand what it means how to manage relationships within and across groups, but also does it very well. He would always get stakeholders involved on features that he would launch to ensure everyone understands the playbook before roll out. I would always walk away after product and operations meetings with a deeper appreciation and understanding of product management. It is an absolute pleasure to work alongside Ressty as his contributions have been invaluable and impactful to provide better, long-term solutions to our users. He is strategic, data-driven, and user focused with a balanced approach to product objectives and business goals. It is also good to put out there that Ressty would often go out of his way to help colleagues find out solutions to customer challenges and as one of his stakeholders, I’ve personally witnessed the hours he would spend between planning OKRs, feedback gathering, and executing multiple projects at the same time. I’m confident that any company would be lucky to have him in the team.',
    ],
  },
] as const;
