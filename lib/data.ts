export type Project = {
  id: string
  title: string
  category: string
  tags: string[]
  year: string
  description: string
  longDescription: string
  image: string
  color: string
  client: string
  duration: string
  role: string
  tools: string[]
  outcomes: string[]
  gallery: string[]
}

export type CaseStudy = {
  id: string
  title: string
  subtitle: string
  image: string
  category: string
  year: string
  client: string
  duration: string
  challenge: string
  approach: string
  process: { phase: string; description: string }[]
  results: { label: string; value: string }[]
  tools: string[]
  color: string
}

export const projects: Project[] = [
  {
    id: 'lumina-brand-identity',
    title: 'Lumina Brand Identity',
    category: 'Brand Identity',
    tags: ['Branding', 'Logo', 'Visual Identity'],
    year: '2025',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',
    image: '/images/projects/brand-identity.jpg',
    color: '#E8715A',
    client: 'Lumina Skincare',
    duration: '6 weeks',
    role: 'Brand Designer',
    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams'],
    gallery: ['/images/projects/brand-identity.jpg', '/images/projects/packaging.jpg'],
  },
  {
    id: 'bloom-packaging',
    title: 'Bloom Packaging Design',
    category: 'Packaging',
    tags: ['Packaging', 'Print', 'Product Design'],
    year: '2025',
    description: 'Elegant packaging system for a premium organic beauty line, balancing sustainability messaging with high-end aesthetic.',
    longDescription: 'Bloom needed packaging that communicates both organic integrity and premium positioning. I developed a soft, botanical-inspired system using uncoated papers, pressed foils, and muted botanical illustrations that reinforces the brand ethos on shelf.',
    image: '/images/projects/packaging.jpg',
    color: '#D9845C',
    client: 'Bloom Organics',
    duration: '4 weeks',
    role: 'Packaging & Brand Designer',
    tools: ['Illustrator', 'Photoshop', 'Dimension'],
    outcomes: ['Product featured in Vogue Beauty', '40% increase in retail shelf pickup', 'Won Dieline Award 2025'],
    gallery: ['/images/projects/packaging.jpg', '/images/projects/brand-identity.jpg'],
  },
  {
    id: 'pulse-app-ui',
    title: 'Pulse App UI/UX',
    category: 'UI/UX Design',
    tags: ['App Design', 'UI/UX', 'Mobile'],
    year: '2024',
    description: 'End-to-end UI/UX design for a wellness tracking app, from wireframes to polished high-fidelity screens.',
    longDescription: 'Pulse is a daily wellness companion app. I led the full design process — starting from user research and journey mapping, through wireframing, prototyping, and final hi-fi UI. The interface balances calm aesthetics with clear data visualization.',
    image: '/images/projects/uiux.jpg',
    color: '#C86B4E',
    client: 'Pulse Health Tech',
    duration: '8 weeks',
    role: 'Lead UI/UX Designer',
    tools: ['Figma', 'Principle', 'FigJam'],
    outcomes: ['4.8★ App Store rating at launch', 'Reduced onboarding drop-off by 35%', '50K downloads in first month'],
    gallery: ['/images/projects/uiux.jpg', '/images/projects/social-media.jpg'],
  },
  {
    id: 'aura-editorial',
    title: 'Aura Magazine Editorial',
    category: 'Editorial',
    tags: ['Editorial', 'Typography', 'Print'],
    year: '2024',
    description: 'Art direction and layout design for a quarterly lifestyle magazine across 80 pages of editorial content.',
    longDescription: 'Aura is a quarterly publication exploring design, culture, and creativity. I served as art director for their spring issue — overseeing grid systems, typography hierarchies, photo treatment, and the overall visual narrative across 80 pages.',
    image: '/images/projects/editorial.jpg',
    color: '#B86045',
    client: 'Aura Publications',
    duration: '5 weeks',
    role: 'Art Director',
    tools: ['InDesign', 'Photoshop', 'Illustrator'],
    outcomes: ['Print run of 25,000 copies', 'Featured as Editor\'s Pick at Design Week', 'Sold out in 3 days'],
    gallery: ['/images/projects/editorial.jpg', '/images/projects/brand-identity.jpg'],
  },
  {
    id: 'soleil-social',
    title: 'Soleil Social Campaign',
    category: 'Social Media',
    tags: ['Social Media', 'Content', 'Digital'],
    year: '2024',
    description: 'A 3-month social media visual campaign for a French cafe brand, driving engagement through consistent, beautiful content.',
    longDescription: 'Soleil Cafe needed a digital presence that translated their Parisian warmth into social content. I designed a content system of templates, illustrated elements, and photo treatments that their team could execute consistently across platforms.',
    image: '/images/projects/social-media.jpg',
    color: '#E07D62',
    client: 'Soleil Cafe',
    duration: '3 months',
    role: 'Social Media Designer',
    tools: ['Figma', 'Photoshop', 'Canva Pro'],
    outcomes: ['300% increase in Instagram engagement', 'Follower growth from 2K to 18K', 'Campaign featured by Later Media'],
    gallery: ['/images/projects/social-media.jpg', '/images/projects/editorial.jpg'],
  },
  {
    id: 'kinetic-motion',
    title: 'Kinetic Motion Graphics',
    category: 'Motion Design',
    tags: ['Motion', 'Animation', 'Digital'],
    year: '2025',
    description: 'A series of motion graphic explainers and brand animations for a fintech startup launch campaign.',
    longDescription: 'Nova Fintech needed motion assets that could simplify complex financial concepts. I created a suite of animated explainers, logo animations, and social video templates that became the centerpiece of their Series A launch campaign.',
    image: '/images/projects/motion.jpg',
    color: '#CF7055',
    client: 'Nova Fintech',
    duration: '3 weeks',
    role: 'Motion Designer',
    tools: ['After Effects', 'Illustrator', 'Lottie'],
    outcomes: ['Launch video hit 500K views in 48hrs', 'Used across 6 investor presentations', 'Increased brand awareness by 78%'],
    gallery: ['/images/projects/motion.jpg', '/images/projects/uiux.jpg'],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'lumina-rebrand',
    title: 'Rebranding Lumina: From Generic to Iconic',
    subtitle: 'How a brand identity transformation doubled customer retention',
    image: '/images/case-studies/brand-rebrand.jpg',
    category: 'Brand Strategy',
    year: '2025',
    client: 'Lumina Skincare',
    duration: '8 weeks',
    challenge: 'Lumina had an outdated, generic visual identity that failed to communicate their premium positioning. Customers confused them with mass-market competitors, and their brand recognition was near zero despite having exceptional products.',
    approach: 'Starting with deep discovery — competitor audits, customer interviews, and brand positioning workshops — I uncovered a clear differentiation opportunity: Lumina\'s philosophy of "science meets soul." This became the foundation for the entire visual system.',
    process: [
      { phase: 'Discovery', description: 'Conducted 15 customer interviews, 3 brand positioning workshops, and comprehensive competitor visual audit across 25 brands in the premium skincare segment.' },
      { phase: 'Strategy', description: 'Defined brand personality (Intelligent, Warm, Elevated), identified core visual codes, and established a positioning map that placed Lumina uniquely between clinical and luxe.' },
      { phase: 'Identity Design', description: 'Developed 3 distinct identity directions over 2 weeks, presented with detailed rationale. Selected direction was refined through 4 rounds of iteration.' },
      { phase: 'System Build', description: 'Expanded the identity into a full system: typography scale, color palette, iconography library, photography guidelines, and 80-page brand guidelines document.' },
      { phase: 'Rollout', description: 'Managed identity rollout across website, packaging, social media, and retail POS materials, coordinating with 3 external production vendors.' },
    ],
    results: [
      { label: 'Brand Recognition', value: '+60%' },
      { label: 'Customer Retention', value: '+2×' },
      { label: 'NPS Score', value: '72 → 89' },
      { label: 'Social Followers', value: '+140%' },
    ],
    tools: ['Figma', 'Illustrator', 'Photoshop', 'InDesign'],
    color: '#E8715A',
  },
  {
    id: 'pulse-ux-overhaul',
    title: 'Pulse App: Designing for Calm in a Noisy World',
    subtitle: 'A complete UX overhaul that turned frustrated users into advocates',
    image: '/images/case-studies/app-design.jpg',
    category: 'UX Design',
    year: '2024',
    client: 'Pulse Health Tech',
    duration: '12 weeks',
    challenge: 'Pulse\'s original app had a 68% drop-off rate during onboarding, and users described it as "overwhelming" and "cluttered." Despite strong functionality, poor UX was killing growth and causing serious user frustration.',
    approach: 'I led a research-driven redesign focused on progressive disclosure — revealing complexity only when users are ready for it. Every decision was validated through usability testing, with 3 rounds of testing with 8 users each.',
    process: [
      { phase: 'Research', description: 'Analyzed 500 session recordings, conducted 12 user interviews, and ran a survey with 200 existing users to identify pain points and motivation patterns.' },
      { phase: 'IA & Flows', description: 'Restructured the information architecture from scratch. Reduced primary navigation from 7 items to 4, creating a clearer mental model aligned with user goals.' },
      { phase: 'Wireframing', description: 'Produced 60+ wireframe screens covering all primary and secondary flows. Tested paper prototypes with 6 users before moving to high-fidelity.' },
      { phase: 'Visual Design', description: 'Developed a calm, minimal visual language using generous whitespace, warm neutrals, and subtle coral accents. Built a complete component library in Figma.' },
      { phase: 'Prototype & Test', description: 'Created interactive prototype covering 3 key user journeys. Ran 3 rounds of usability testing, iterating between each round based on findings.' },
    ],
    results: [
      { label: 'Onboarding Completion', value: '+35%' },
      { label: 'App Store Rating', value: '3.1 → 4.8★' },
      { label: 'Daily Active Users', value: '+89%' },
      { label: 'Support Tickets', value: '-52%' },
    ],
    tools: ['Figma', 'FigJam', 'Maze', 'Principle', 'Notion'],
    color: '#C86B4E',
  },
]
