export type Project = {
  id: string
  title: string
  category: string
  thumbnail: string
  cover: string
  tags: string[]
  year: string
  description: string
  longDescription: string
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
  // {
  //   id: 'lumina-brand-identity',
  //   title: 'Lumina Brand Identity',
  //   category: 'Brand Identity',
  //   tags: ['Branding', 'Logo', 'Visual Identity'],
  //   year: '2025',
  //   description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
  //   longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',
  //   image: '/images/projects/brand-identity.jpg',
  //   color: '#E8715A',
  //   client: 'Lumina Skincare',
  //   duration: '6 weeks',
  //   role: 'Brand Designer',
  //   tools: ['Figma', 'Illustrator', 'Photoshop'],
  //   outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams'],
  //   gallery: ['/images/projects/brand-identity.jpg', '/images/projects/packaging.jpg'],
  // },
  {
    id: 'Izla-brand-identity',
    title: 'Izla-brand-identity',
    category: 'Brand Identity',

    thumbnail: '/images/projects/Izla/Izla thumbnail.png',   // grid image
    cover: '/images/projects/Izla/Izla brand identity.png',        // long hero image
    color: '#0b6e4f',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Izla',
    year: '2025',
    duration: '6 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Izla/Izla thumbnail.png', '/images/projects/Izla/Izla brand identity.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'BigBun-brand-identity',
    title: 'BigBun-brand-identity',
    category: 'Brand Identity',

    thumbnail: '/images/projects/big-bun/Bigbun-thumbnail.png',   // grid image
    cover: '/images/projects/big-bun/bigbun-brandidentity.png',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Bigbun',
    year: '2025',
    duration: '6 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/big-bun/Bigbun-thumbnail.png', '/images/projects/big-bun/bigbun-brandidentity.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'Engpro-brand-identity',
    title: 'Engpro-brand-identity',
    category: 'Brand Identity',

    thumbnail: '/images/projects/Engpro/engpro-thumbnail.png',   // grid image
    cover: '/images/projects/Engpro/Engpro-brandidentity.png',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Engpro',
    year: '2025',
    duration: '6 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Engpro/engpro-thumbnail.png', '/images/projects/Engpro/Engpro-brandidentity.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'Kelvin-Logan-brand-identity',
    title: 'Kelvin-Logan-brand-identity',
    category: 'Brand Identity',

    thumbnail: '/images/projects/Kelvin/Kelvin-thumbnail.png',   // grid image
    cover: '/images/projects/Kelvin/Kelvin-brandidentity.png',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Kelvin Logan',
    year: '2025',
    duration: '6 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Kelvin/Kelvin-thumbnail.png', '/images/projects/Kelvin/Kelvin-brandidentity.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'plexza-brand-identity',
    title: 'plexza-brand-identity',
    category: 'Brand Identity',

    thumbnail: '/images/projects/plexza/plexza-thumbnail.png',   // grid image
    cover: '/images/projects/plexza/plexza-brnadidentity.png',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'plexza',
    year: '2025',
    duration: '6 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/plexza/plexza-thumbnail.png', '/images/projects/plexza/plexza-brnadidentity.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'Chocoberry-Packaging',
    title: 'Chocoberry-Packaging',
    category: 'Packaging',

    thumbnail: '/images/projects/chocoberry/choco-thumbnail.png',   // grid image
    cover: '/images/projects/chocoberry/choco-packaging.png',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'choco',
    year: '2025',
    duration: '3 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/chocoberry/choco-thumbnail.png', '/images/projects/chocoberry/choco-packaging.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'Natura-Packaging',
    title: 'Natura-Packaging',
    category: 'Packaging',

    thumbnail: '/images/projects/Natura/Natura-thumbnail.png',   // grid image
    cover: '/images/projects/Natura/Natura-packaging.png',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'choco',
    year: '2025',
    duration: '3 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Natura/Natura-thumbnail.png', '/images/projects/Natura/Natura-packaging.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'Kbukka-Packaging',
    title: 'Kbukka-Packaging',
    category: 'Packaging',

    thumbnail: '/images/projects/Kabukka/Kabukka-thumbnail.png',   // grid image
    cover: '/images/projects/Kabukka/Kabukka-packaging.png',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'choco',
    year: '2025',
    duration: '3 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Kabukka/Kabukka-thumbnail.png', '/images/projects/Kabukka/Kabukka-packaging.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'Creative-labs',
    title: 'Creative-labs',
    category: 'pitch-deck',

    thumbnail: '/images/projects/Creative-labs/Creativelabs-thumbnail.png',   // grid image
    cover: '/images/projects/Creative-labs/Creativelab-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Creative labs',
    year: '2025',
    duration: '3 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Kabukka/Kabukka-thumbnail.png', '/images/projects/Kabukka/Kabukka-packaging.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'Agentic-AI',
    title: 'Agentic AI',
    category: 'pitch-deck',

    thumbnail: '/images/projects/Agentic-AI/agenticAi-thumbnail.png',   // grid image
    cover: '/images/projects/Agentic-AI/AgenticAi-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Agentic AI',
    year: '2025',
    duration: '3 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Agentic-AI/agenticAi-thumbnail.png', '/images/projects/Agentic-AI/AgenticAi-pitchdeck.jpg'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'Green-track',
    title: 'Green track',
    category: 'pitch-deck',

    thumbnail: '/images/projects/Green-track/Greentrack-thumbnail.png',   // grid image
    cover: '/images/projects/Green-track/Greentrack-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Green Track',
    year: '2025',
    duration: '3 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Green-track/Greentrack-thumbnail.png', '/images/projects/Green-track/Greentrack-pitchdeck.jpg'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'Automobile',
    title: 'Automobile',
    category: 'pitch-deck',

    thumbnail: '/images/projects/Automobile/Automobile-thumbnail.png',   // grid image
    cover: '/images/projects/Automobile/Automobile-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Automobile',
    year: '2025',
    duration: '3 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Automobile/Automobile-thumbnail.png', '/images/projects/Automobile/Automobile-pitchdeck.jpg'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'Norhtfair-studio',
    title: 'Northfair-studio',
    category: 'pitch-deck',

    thumbnail: '/images/projects/Northfairstudio/Northfair-thumbnail.png',   // grid image
    cover: '/images/projects/Northfairstudio/Northfair-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Northfair',
    year: '2025',
    duration: '3 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Northfairstudio/Northfair-thumbnail.png', '/images/projects/Northfairstudio/Northfair-thumbnail.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'design-studio',
    title: 'design-studio',
    category: 'pitch-deck',

    thumbnail: '/images/projects/designstudio/designstudio-thumbnail.png',   // grid image
    cover: '/images/projects/designstudio/designstudio-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Design Studio',
    year: '2025',
    duration: '3 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/designstudio/designstudio-thumbnail.png', '/images/projects/designstudio/designstudio-thumbnail.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'directdimension',
    title: 'directdimension',
    category: 'pitch-deck',

    thumbnail: '/images/projects/directdimension/directdimension-thumbnail.png',   // grid image
    cover: '/images/projects/directdimension/directdimension-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Direct dimension',
    year: '2025',
    duration: '3 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/directdimension/directdimension-thumbnail.png', '/images/projects/directdimension/directdimension-thumbnail.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
  {
    id: 'designstudio2',
    title: 'designstudio2',
    category: 'pitch-deck',

    thumbnail: '/images/projects/designstudio2/designstudio2-thumbnail.png',   // grid image
    cover: '/images/projects/designstudio2/designstudio2-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Lumina approached me to craft an identity that felt both luxurious and approachable. The result is a visual system rooted in warmth and clarity — clean serif wordmarks balanced against soft, earthy tones. The identity spans digital, print, and packaging touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'design studio2',
    year: '2025',
    duration: '3 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/designstudio2/designstudio2-thumbnail.png', '/images/projects/designstudio2/designstudio2-pitchdeck.jpg'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Increased brand recognition by 60%', 'Cohesive identity across 12 touchpoints', 'Brand guidelines adopted across global teams']
  },
]

  export const caseStudies: CaseStudy[] = [
    // {
    //   id: 'pulse-ux-overhaul',
    //   title: 'Pulse App: Designing for Calm in a Noisy World',
    //   subtitle: 'A complete UX overhaul that turned frustrated users into advocates',
    //   image: '/images/case-studies/app-design.jpg',
    //   category: 'UX Design',
    //   year: '2024',
    //   client: 'Pulse Health Tech',
    //   duration: '12 weeks',
    //   challenge: 'Pulse\'s original app had a 68% drop-off rate during onboarding, and users described it as "overwhelming" and "cluttered." Despite strong functionality, poor UX was killing growth and causing serious user frustration.',
    //   approach: 'I led a research-driven redesign focused on progressive disclosure — revealing complexity only when users are ready for it. Every decision was validated through usability testing, with 3 rounds of testing with 8 users each.',
    //   process: [
    //     { phase: 'Research', description: 'Analyzed 500 session recordings, conducted 12 user interviews, and ran a survey with 200 existing users to identify pain points and motivation patterns.' },
    //     { phase: 'IA & Flows', description: 'Restructured the information architecture from scratch. Reduced primary navigation from 7 items to 4, creating a clearer mental model aligned with user goals.' },
    //     { phase: 'Wireframing', description: 'Produced 60+ wireframe screens covering all primary and secondary flows. Tested paper prototypes with 6 users before moving to high-fidelity.' },
    //     { phase: 'Visual Design', description: 'Developed a calm, minimal visual language using generous whitespace, warm neutrals, and subtle coral accents. Built a complete component library in Figma.' },
    //     { phase: 'Prototype & Test', description: 'Created interactive prototype covering 3 key user journeys. Ran 3 rounds of usability testing, iterating between each round based on findings.' },
    //   ],
    //   results: [
    //     { label: 'Onboarding Completion', value: '+35%' },
    //     { label: 'App Store Rating', value: '3.1 → 4.8★' },
    //     { label: 'Daily Active Users', value: '+89%' },
    //     { label: 'Support Tickets', value: '-52%' },
    //   ],
    //   tools: ['Figma', 'FigJam', 'Maze', 'Principle', 'Notion'],
    //   color: '#C86B4E',
    // },
    {
      id: 'The-Global-BRIT',
      title: 'The Global BRIT',
      subtitle: 'How a brand identity transformation doubled customer retention',
      image: '/images/case-studies/theglobalbrit/theglobalbrit-thumbnail.png',
      category: 'Brand Strategy',
      year: '2025',
      client: 'global brit',
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
      id: 'modesto',
      title: 'modesto',
      subtitle: 'A complete UX overhaul that turned frustrated users into advocates',
      image: '/images/case-studies/modesto/Modesto-thumbnail.png',
      category: 'UX Design',
      year: '2024',
      client: 'modesto',
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
