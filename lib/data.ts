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
  fullimage:String
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
    title: 'Izla brand identity',
    category: 'Brand Identity',

    thumbnail: '/images/projects/Izla/Izla thumbnail.png',   // grid image
    cover: '/images/projects/Izla/Izla brand identity.png',        // long hero image
    color: '#0b6e4f',
    description: 'A complete brand identity system for an AI driven wellness platform, built around the philosophy of intelligent well-being and proactive health.',
    longDescription: ' Izla is an AI driven wellness platform on a mission to redefine well-being for a billion people. The brand needed an identity that felt both intelligent and human. The result is a visual system rooted in growth and clarity, anchored by a bold custom logo mark, a refined green palette representing balance and innovation, and a full set of guidelines covering logo usage, color, typography, brand values and stationery across digital and print touchpoints.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Izla',
    year: '2026',
    duration: '2 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Izla/Izla thumbnail.png', '/images/projects/Izla/Izla brand identity.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Complete brand guidelines delivered across 22+ pages', 'Logo system with color, monochrome and usage variations', 'Brand stationery including letterhead designed and documented']
  },
  {
    id: 'BigBun-brand-identity',
    title: 'Big Bun Brand Identity ',
    category: 'Brand Identity',

    thumbnail: '/images/projects/big-bun/Bigbun-thumbnail.png',   // grid image
    cover: '/images/projects/big-bun/bigbun-brandidentity.png',        // long hero image
    color: '#764c34',
    description: 'A bold, playful brand identity for a burger house built on personality, attitude and unapologetic fun.',
    longDescription: 'Big Bun needed a brand as bold as its burgers. The identity leans into retro cartoon energy with loud typography, vibrant color blocking and custom illustrated characters that give the brand a street culture edge. Every touchpoint from stickers to packaging carries the same irreverent personality, making Big Bun instantly recognizable and impossible to ignore.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Kith Nelson',
    year: '2026',
    duration: '1 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/big-bun/Bigbun-thumbnail.png', '/images/projects/big-bun/bigbun-brandidentity.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Full visual identity with logo, typography and color system', 'Custom brand illustrations and mascot characters', 'Sticker and packaging design']
  },
  {
    id: 'Engpro-brand-identity',
    title: 'Branding Collection',
    category: 'Brand Identity',

    thumbnail: '/images/projects/Engpro/engpro-thumbnail.png',   // grid image
    cover: '/images/projects/Engpro/Engpro-brandidentity.png',        // long hero image
    color: '#764c34',
    description: 'A curated collection of brand identity and design work spanning industries, from music labels and sports cars to food trucks and engineering firms.',
    longDescription: 'A selection of standout branding projects across diverse industries. Each piece in this collection represents a distinct visual world built from the ground up. Infinity Music brings dark cinematic energy to a global music label. Engepro delivers a bold technical identity for an engineering firm. NexOnic pushes futuristic automotive branding into a high fidelity web experience. Superdog wraps a food truck personality into a vibrant orange character driven identity. IMSSY builds a full scale industrial brand system with app, pattern and environmental applications.',

    tags: ['Brand Guidelines', 'Logo design', 'Visual Identity','wrap & Packagin'],
    client: 'Various',
    year: '2026',
    duration: 'Multiple Projects',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Engpro/engpro-thumbnail.png', '/images/projects/Engpro/Engpro-brandidentity.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['5 distinct brand identities across different industries', 'Full visual systems including logo, color, typography and mockups', 'Applied across digital, print, environmental and product touchpoints']
  },
  {
    id: 'Kelvin-Logan-brand-identity',
    title: 'Kelvin Logan Brand Identity',
    category: 'Brand Identity',

    thumbnail: '/images/projects/Kelvin/Kelvin-thumbnail.png',   // grid image
    cover: '/images/projects/Kelvin/Kelvin-brandidentity.png',        // long hero image
    color: '#764c34',
    description: 'A sophisticated personal brand identity built around authority, elegance and a strong visual presence across print and physical spaces.',
    longDescription: ' Kelvin Logan required a personal brand that commanded presence. The identity pairs a sharp geometric monogram mark with a deep teal and dark palette, communicating confidence and premium positioning. The system was applied across business cards, signage, office interiors and marketing collateral, creating a cohesive and authoritative brand experience at every physical touchpoint.',

    tags: ['Branding', 'Logo Design', 'Visual Identity'],
    client: 'Kelvin Logan',
    year: '2026',
    duration: '1 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/Kelvin/Kelvin-thumbnail.png', '/images/projects/Kelvin/Kelvin-brandidentity.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Logo and monogram mark designed for versatile use', 'Brand applied across business cards, signage and print', 'Interior and environmental branding mockups delivered']
  },
  {
    id: 'plexza-brand-identity',
    title: 'Plexa Brand Identity',
    category: 'Brand Identity',

    thumbnail: '/images/projects/plexza/plexza-thumbnail.png',   // grid image
    cover: '/images/projects/plexza/plexza-brnadidentity.png',        // long hero image
    color: '#764c34',
    description: 'A sharp, modern brand identity for a digital marketing agency built around precision, growth and forward momentum.',
    longDescription: 'Plexa needed an identity that reflected its core promise of promoting with precision. The result is a clean dynamic logomark combining a bold P with a forward moving form, anchored in a confident blue palette that communicates trust, innovation and digital authority. The brand was applied across signage and environmental touchpoints, giving Plexa a strong physical presence to match its digital ambitions.',

    tags: ['Brand Guidelines', 'Logo Design', 'Visual Identity',' wrap & Packaging'],
    client: 'Ronald Jaker',
    year: '2026',
    duration: '2 weeks',
    role: 'Brand Designer',

    gallery: [
      '/images/projects/plexza/plexza-thumbnail.png', '/images/projects/plexza/plexza-brnadidentity.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Logo and brand mark designed with environmental application', 'Color system defined across primary and supporting tones', 'Signage and outdoor branding mockups delivered']
  },
  {
    id: 'Chocoberry-Packaging',
    title: 'ChoCo Ice Cream Packaging',
    category: 'Packaging',

    thumbnail: '/images/projects/chocoberry/choco-thumbnail.png',   // grid image
    cover: '/images/projects/chocoberry/choco-packaging.png',        // long hero image
    color: '#764c34',
    description: 'A vibrant, flavour forward packaging system for an ice cream brand built to stand out on shelf and make you want more.',
    longDescription: 'ChoCo needed packaging that did the selling before a single scoop was tasted. Each flavour gets its own bold color world, Berry in red, Banana in yellow, Minty in green, anchored by a consistent typographic system and playful ingredient photography. The result is a cohesive range that pops on shelf, communicates flavour instantly and carries a personality that is as fun as the product itself.',

    tags: ['Packaging', 'Label Design', 'Brand Identity'],
    client: 'Daniel Wilington',
    year: '2025',
    duration: '2 weeks',
    role: 'Packaging Designer',

    gallery: [
      '/images/projects/chocoberry/choco-thumbnail.png', '/images/projects/chocoberry/choco-packaging.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Full packaging system designed across multiple flavour variants', 'Distinct color coding per flavour with consistent brand architecture', 'Label design applied to cup and tub packaging formats']
  },
  {
    id: 'Natura-Packaging',
    title: 'Natura Essential Oil Packaging',
    category: 'Packaging',

    thumbnail: '/images/projects/Natura/Natura-thumbnail.png',   // grid image
    cover: '/images/projects/Natura/Natura-packaging.png',        // long hero image
    color: '#764c34',
    description: 'Calm, organic packaging design for a pure essential oils brand rooted in natural wellbeing and mindful living.',
    longDescription: 'Natura specializes in pure essential oils that bring together the art and science of natural wellness. The packaging needed to feel as honest and grounded as the product itself. Soft earthy tones, clean minimal typography and delicate botanical details work together to communicate purity and trust. Applied across dropper bottles and folding cartons, the system feels cohesive, premium and quietly confident on any surface.',

    tags: ['Packaging', 'Label Design', 'Brand Identity'],
    client: 'Erik Gonzalo',
    year: '2025',
    duration: '2 weeks',
    role: 'Packaging Designer',

    gallery: [
      '/images/projects/Natura/Natura-thumbnail.png', '/images/projects/Natura/Natura-packaging.png'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Label and carton packaging designed across product range', 'Earthy minimal visual language built to reflect brand values', 'Applied across glass dropper bottles and box packaging']
  },
  {
    id: 'Kbukka-Packaging',
    title: 'Kvokka Bubble Tea Branding and Packaging',
    category: 'Packaging',

    thumbnail: '/images/projects/Kabukka/Kabukka-thumbnail.png',   // grid image
    cover: '/images/projects/Kabukka/Kabbukka.svg',        // long hero image
    color: '#764c34',
    description: 'A playful, character driven brand and packaging system for a bubble tea shop built on personality, color and pure fun.',
    longDescription: 'Kvokka needed a brand as delightful as its drinks. Built around a lovable quokka mascot holding a bubble tea cup, the identity leans into soft purples, warm pinks and playful typography to create a world that feels instantly inviting. The system spans cup packaging, coasters, stickers and a full menu design, giving every touchpoint the same cheerful energy that makes Kvokka impossible to walk past.',

    tags: ['Branding', 'Logo', 'Visual Identity'],
    client: 'Erik Gonzalo',
    year: '2025',
    duration: '2 weeks',
    role: 'Packaging Designer',

    gallery: [
      '/images/projects/Kabukka/Kabukka-thumbnail.png', '/images/projects/Kabukka/Kabbukka.svg'
    ],

    tools: ['Figma', 'Illustrator', 'Photoshop'],
    outcomes: ['Mascot and logo designed as the core of the brand identity', 'Cup, coaster and sticker packaging designed and applied', 'Cohesive brand world built across all customer touchpoints']
  },
  {
    id: 'Creative-labs',
    title: 'CreativeLab Startup Pitch Deck',
    category: 'pitch-deck',

    thumbnail: '/images/projects/Creative-labs/Creativelabs-thumbnail.png',   // grid image
    cover: '/images/projects/Creative-labs/Creativelab-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A sleek, modern pitch deck designed to help a creative startup communicate its vision, team and solution with clarity and confidence.',
    longDescription: 'This pitch deck needed to feel as innovative as the company it represented. Built on a deep blue glassmorphism aesthetic with soft glowing forms and clean typography, the design guides investors through the company story in a natural and compelling flow. From challenge and solution to team introductions, every slide balances visual impact with clear readable content, giving founders a deck they can present with confidence.',

    tags: ['Pitch Deck', 'Presentation Design', 'Slide Design'],
    client: 'Jenna Doe ',
    year: '2025',
    duration: '3 weeks',
    role: 'Presentation Designer',

    gallery: [
      '/images/projects/Creative-labs/Creativelabs-thumbnail.png', '/images/projects/Creative-labs/Creativelab-pitchdeck.jpg'
    ],

    tools: ['Figma', 'Illustrator CC', 'Powerpoint'],
    outcomes: ['Full pitch deck designed across multiple slide sections', 'Consistent visual language built around glassmorphism aesthetic', 'Challenge, solution, company overview and team slides delivered']
  },
  {
    id: 'Izla-Investor-Deck',
    title: 'Izla Investor Deck',
    category: 'pitch-deck',

    thumbnail: '/images/projects/Agentic-AI/agenticAi-thumbnail.png',   // grid image
    cover: '/images/projects/Agentic-AI/AgenticAi-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A bold investor pitch deck for an agentic AI wellness platform, designed to communicate vision, technology and team with authority.',
    longDescription: 'Izla needed an investor deck that matched the ambition of its product. Built on the brand\s signature deep green palette with clean bold typography, the deck walks investors through the core proposition of agentic AI for weight loss and wellness, covering the agenda, underlying technology, market insight and the team behind it. Every slide balances visual confidence with information clarity, giving Izla a deck that commands attention in any room.',

    tags: ['Pitch Deck', 'Presentation Design', 'Slide Design'],
    client: 'Sarah ',
    year: '2025',
    duration: '3 weeks',
    role: 'Presentation Designer',

    gallery: [
      '/images/projects/Agentic-AI/agenticAi-thumbnail.png', '/images/projects/Agentic-AI/AgenticAi-pitchdeck.jpg'
    ],

    tools: ['Figma', 'Illustrator CC', 'Powerpoint'],
    outcomes: ['Full investor deck designed across all key sections', 'Brand consistent visual system applied throughout', 'Deck optimized for both digital sharing and live presentation']
  },
  {
    id: 'Green-track',
    title: 'Greentrack Logistics Pitch Deck',
    category: 'pitch-deck',

    thumbnail: '/images/projects/Green-track/Greentrack-thumbnail.png',   // grid image
    cover: '/images/projects/Green-track/Greentrack-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: ' A high impact pitch deck for a green logistics platform helping fleet businesses monitor, manage and reduce carbon emissions in real time.',
    longDescription: ' Greentrack needed a deck as bold as its mission. The design pairs dramatic full bleed photography of highways and warehouses with a sharp blue gradient palette and oversized typography, creating slides that feel urgent and authoritative. The deck communicates Greentrack\s core solution clearly, a real time dashboard giving logistics companies full visibility over their fleet emissions, backed by strong numbers and a compelling mission narrative throughout.',

    tags: ['Pitch Deck', 'Presentation Design', 'Slide Design'],
    client: 'Sarah',
    year: '2026',
    duration: '6 weeks',
    role: 'Presentation Designer',

    gallery: [
      '/images/projects/Green-track/Greentrack-thumbnail.png', '/images/projects/Green-track/Greentrack-pitchdeck.jpg'
    ],

    tools: ['Figma', 'Illustrator CC', 'Powerpoint'],
    outcomes: ['Full pitch deck designed across all key sections', 'Bold visual language built around full bleed photography and blue gradient palette', 'Solution, mission, metrics and brand slides delivered']
  },
  {
    id: 'Automobile',
    title: 'Rent Car Business Plan Deck',
    category: 'pitch-deck',

    thumbnail: '/images/projects/Automobile/Automobile-thumbnail.png',   // grid image
    cover: '/images/projects/Automobile/Automobile-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A premium, dark toned business plan presentation for a luxury car rental company built around confidence, quality and elegance.',
    longDescription: 'This business plan deck needed to feel as premium as the vehicles it represented. Built on a deep navy palette with cinematic car photography and refined typography, the presentation guides stakeholders through the company introduction, new models, about us and client journey in a clean and authoritative flow. The visual language communicates luxury and trust at every slide, giving the brand the gravitas expected from a high end car rental proposition.',

    tags: ['Pitch Deck', 'Presentation Design', 'Slide Design'],
    client: 'Darren Forth',
    year: '2026',
    duration: '6 weeks',
    role: 'Presentation Designer',

    gallery: [
      '/images/projects/Automobile/Automobile-thumbnail.png', '/images/projects/Automobile/Automobile-pitchdeck.jpg'
    ],

    tools: ['Figma', 'Illustrator CC', 'Powerpoint'],
    outcomes: ['Full business plan deck designed across all key sections', 'Premium dark visual system built around luxury car photography', 'Deck optimized for stakeholder presentations and business pitches']
  },
  {
    id: 'Norhtfair-studio',
    title: 'Northform Studio Agency Deck',
    category: 'pitch-deck',

    thumbnail: '/images/projects/Northfairstudio/Northfair-thumbnail.png',   // grid image
    cover: '/images/projects/Northfairstudio/Northfair-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A clean, editorial agency deck for a brand studio that believes good branding is good business.',
    longDescription: 'Northform Studio needed a deck that practiced what it preached. Built on a sophisticated off white and deep green palette with bold editorial typography, the presentation walks potential clients through the studio\s story, principles, capabilities, team and reasons to work together. Every slide feels considered and purposeful, reflecting a brand that works with bold ideas, honest stories and thoughtful execution.',

    tags: ['Pitch Deck', 'Presentation Design',' Slide Design'],
    client: 'Northform Studio',
    year: '2026',
    duration: '3 weeks',
    role: 'Presentation Designer',

    gallery: [
      '/images/projects/Northfairstudio/Northfair-thumbnail.png', '/images/projects/Northfairstudio/Northfair-thumbnail.png'
    ],

    tools: ['Figma', 'Illustrator CC', 'Powerpoint'],
    outcomes: ['Full business plan deck designed across all key sections', 'Cohesive identity across 12 touchpointsPremium dark visual system built around luxury car photography', 'Deck optimized for stakeholder presentations and business pitches']
  },
  {
    id: 'design-studio',
    title: 'Shoreditch Design Studio Investor Deck',
    category: 'pitch-deck',

    thumbnail: '/images/projects/designstudio/designstudio-thumbnail.png',   // grid image
    cover: '/images/projects/designstudio/designstudio-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: ' Shoreditch Design Studio needed an investor deck that demonstrated both creative range and business credibility. The presentation covers product offering across branding, UI UX and all creative needs, a two stage business model moving from fixed price projects to monthly retainers, and a market size analysis showing a total addressable market of $12.7bn in the US alone. Clean minimal layout with strong data visualization gives investors exactly what they need to take the studio seriously.',

    tags: ['Pitch Deck', 'Presentation Design', 'Slide Design'],
    client: 'Sari Witson',
    year: '2026',
    duration: '3 weeks',
    role: 'Presentation Designer',

    gallery: [
      '/images/projects/designstudio/designstudio-thumbnail.png', '/images/projects/designstudio/designstudio-thumbnail.png'
    ],

    tools: ['Figma', 'Illustrator CC', 'powerpoint'],
    outcomes: ['Full investor deck designed across all key sections', 'Product, business model and market size slides delivered', 'TAM, SAM and share of market visualized clearly']
  },
  {
    id: 'directdimension',
    title: 'Direct Dimension Pricing Strategy Deck',
    category: 'pitch-deck',

    thumbnail: '/images/projects/directdimension/directdimension-thumbnail.png',   // grid image
    cover: '/images/projects/directdimension/directdimension-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A full brand identity system for a luxury skincare brand, including logo, typography, color palette, and brand guidelines.',
    longDescription: 'Direct Dimension needed a presentation that turned complex pricing data into a clear and compelling business case. Built on a bold orange and dark palette, the deck walks stakeholders through current pricing inconsistencies across brands, a three pronged standardization approach and the financial impact per company. Strong data visualization, bar charts, variance analysis and key findings make the $181,847 revenue opportunity impossible to ignore, giving leadership exactly the clarity needed to act.',

    tags: ['Pitch Deck, Presentation Design, Slide Design'],
    client: 'Direct Dimension',
    year: '2026',
    duration: '3 weeks',
    role: 'Presentation Designer',

    gallery: [
      '/images/projects/directdimension/directdimension-thumbnail.png', '/images/projects/directdimension/directdimension-thumbnail.png'
    ],

    tools: ['Figma', 'Illustrator CC', 'Powerpoint'],
    outcomes: ['Full strategy deck designed across all key sections', 'Data visualization designed for pricing variance and revenue impact', 'Key findings, financial impact and SAE volume slides delivered']
  },
  {
    id: 'designstudio2',
    title: 'GameGrid Pitch Deck',
    category: 'pitch-deck',

    thumbnail: '/images/projects/designstudio2/designstudio2-thumbnail.png',   // grid image
    cover: '/images/projects/designstudio2/designstudio2-pitchdeck.jpg',        // long hero image
    color: '#764c34',
    description: 'A compelling pitch deck for a modern sports league management platform built to replace outdated tools and give amateur athletes a real digital experience. ',
    longDescription: 'GameGrid needed a deck that made the problem as clear as the solution. The presentation opens with a bold app showcase, then walks investors through the broken state of sports league management, local leagues still running on Excel and group chats, before presenting GameGrid as the modern all in one alternative. Problem, solution, product feature breakdown and business model are all laid out across a clean green branded layout that feels as energetic and credible as the platform itself.',

    tags: ['Pitch Deck', 'Presentation Design', 'Slide Design'],
    client: 'GameGrid',
    year: '2026',
    duration: '3 weeks',
    role: 'Presentation Designer',

    gallery: [
      '/images/projects/designstudio2/designstudio2-thumbnail.png', '/images/projects/designstudio2/designstudio2-pitchdeck.jpg'
    ],

    tools: ['Figma', 'Illustrator CC', 'Powerpoint'],
    outcomes: ['Full strategy deck designed across all key sections', 'Data visualization designed for pricing variance and revenue impact', 'Key findings, financial impact and SAE volume slides delivered']
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
      title: 'Rebranding The Global Brit: From Generic to Iconic',
      subtitle: 'How simplifying a cluttered identity created a logo that finally tells the right story ',
      image: '/images/case-studies/theglobalbrit/theglobalbrit-thumbnail.png',
      fullimage:'/images/case-studies/theglobalbrit/theglobalbrit-complete.png',
      category: 'Brand Strategy',
      year: '2025',
      client: 'Karlo smith',
      duration: '2 months',
      challenge: ' The Global Brit had an outdated, overly literal logo. A Union Jack globe with a clunky arrow that looked generic, collapsed at small sizes, and failed to communicate what the brand actually stood for. No guidelines, no cohesive digital presence, nothing to build on.',
      approach: 'Starting with a full identity audit and audience research, the visual direction shifted from geography to momentum and transition. The globe became a clean geometric arrow flag mark. From there, the work expanded into a complete brand system covering guidelines, website, socials and YouTube, building every touchpoint from the ground up.',
      process: [
        { phase: 'Discovery', description: 'Conducted 15 customer interviews, 3 brand positioning workshops, and comprehensive competitor visual audit across 25 brands in the premium skincare segment.' },
        { phase: 'Strategy', description: 'Defined brand personality (Intelligent, Warm, Elevated), identified core visual codes, and established a positioning map that placed Lumina uniquely between clinical and luxe.' },
        { phase: 'Identity Design', description: 'Developed 3 distinct identity directions over 2 weeks, presented with detailed rationale. Selected direction was refined through 4 rounds of iteration.' },
        { phase: 'System Build', description: 'Expanded the identity into a full system: typography scale, color palette, iconography library, photography guidelines, and 80-page brand guidelines document.' },
        { phase: 'Rollout', description: 'Managed identity rollout across website, packaging, social media, and retail POS materials, coordinating with 3 external production vendors.' },
      ],
      results: [
        { label: 'Logo Clarity', value: 'Generic → Iconic' },
        { label: 'Scalability', value: 'Broken → Resolved' },
        { label: 'Brand Story', value: 'Unclear → Purposeful' },
        { label: 'Variations Delivered', value: '2' },
      ],
      tools: ['Figma', 'Illustrator', 'Photoshop'],
      color: '#E8715A',
    },
    {
      id: 'modesto',
      title: 'Building Modesto Psychotherapy: A Brand Built on Science and Soul',
      subtitle: 'How a complete brand identity gave a mental health practice the visual authority it deserved',
      image: '/images/case-studies/modesto/Modesto-thumbnail.png',
      fullimage:'/images/case-studies/modesto/Modesto-complate.png',
      category: 'UX Design',
      year: '2026',
      client: 'Manthais Fisker',
      duration: '1 month',
      challenge: 'The previous identity used an owl logo over a dark dramatic background with futuristic typography. While visually ambitious, it communicated the wrong thing entirely. A first time visitor could not identify this as a psychotherapy practice. It felt closer to a gaming brand or nightclub than a trusted mental health provider. The logo had no scalability, no emotional warmth, and no connection to the field it served.',
      approach: 'The project started with deep research into the practice, its audience, and the competitive landscape. Four distinct logo concepts were developed, each exploring a different visual direction. The client selected the bold brain mark, a maze inspired illustration that captures the complexity of the mind while communicating clarity and precision. From there the work expanded into a full brand identity system covering color palette, typography, usage guidelines, social media post templates, profile systems and brand mockups across print, digital and merchandise.',
      process: [
        { phase: 'Research', description: 'Analyzed 500 session recordings, conducted 12 user interviews, and ran a survey with 200 existing users to identify pain points and motivation patterns.' },
        { phase: 'IA & Flows', description: 'Restructured the information architecture from scratch. Reduced primary navigation from 7 items to 4, creating a clearer mental model aligned with user goals.' },
        { phase: 'Wireframing', description: 'Produced 60+ wireframe screens covering all primary and secondary flows. Tested paper prototypes with 6 users before moving to high-fidelity.' },
        { phase: 'Visual Design', description: 'Developed a calm, minimal visual language using generous whitespace, warm neutrals, and subtle coral accents. Built a complete component library in Figma.' },
        { phase: 'Prototype & Test', description: 'Created interactive prototype covering 3 key user journeys. Ran 3 rounds of usability testing, iterating between each round based on findings.' },
      ],
      results: [
        { label: 'Client Trust Signal', value: '+75%' },
        { label: 'Platform Consistency', value: '0 → 100%' },
        { label: 'Brand Story Brand Strength Score', value: '56 → 90' },
        { label: 'Social Followers', value: '+140%' },
      ],
      tools: ['Figma', 'Illustrator', 'Photoshop'],
      color: '#C86B4E',
    },
]
