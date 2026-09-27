import { Product, Course, Bundle, QuizQuestion, ExamType, SkillType } from '../types';

export const EXAM_LIST: ExamType[] = [
  'CAT / MBA',
  'UPSC',
  'SSC',
  'Banking',
  'NEET',
  'JEE',
  'CLAT',
  'Placements'
];

export const SKILL_LIST: SkillType[] = [
  'Speed',
  'Memory',
  'Focus',
  'Reasoning',
  'Communication',
  'Decision-Making',
  'Productivity'
];

export const PRODUCTS: Product[] = [
  // APPAREL (5)
  {
    id: 'prod-apparel-1',
    name: '“One More Mock” Oversized T-Shirt',
    category: 'Apparel',
    price: 699,
    originalPrice: 999,
    description: 'Heavyweight 240 GSM French Terry cotton t-shirt with signature typographic back print. Crafted for marathon library hours, mock analysis sessions, and the late-night grind.',
    shortBenefit: 'Built with 240 GSM breathable combed cotton for 10-hour library marathons.',
    skill: 'Focus',
    exams: ['CAT / MBA', 'SSC', 'Banking', 'JEE'],
    rating: 4.9,
    reviewsCount: 142,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    alternateImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 28,
    tags: ['Oversized', '100% Cotton', 'Streetwear', 'Exam Motif'],
    benefits: [
      'Heavyweight 240 GSM bio-washed pre-shrunk cotton',
      'Relaxed drop-shoulder fit allows unrestricted movement during long chair hours',
      'Fade-resistant screen print enduring 50+ wash cycles',
      'Minimalist front SkillSutra insignia with bold back mantra'
    ],
    whatsInside: [
      '1x “One More Mock” Oversized T-Shirt',
      '1x SkillSutra Aspirant Manifesto Postcard',
      '1x Waterproof Laptop Sticker'
    ],
    howToUse: 'Machine wash cold inside-out. Do not iron directly on print. Wear as your battle armor on mock test days.',
    reviews: [
      {
        id: 'rev-1',
        author: 'Rohan Deshmukh',
        exam: 'CAT / MBA',
        city: 'Pune',
        rating: 5,
        title: 'Insane fabric quality for library grind',
        comment: 'Usually merch t-shirts shrink after 2 washes. This feels like an expensive streetwear drop. Everyone in my IMS test center asked where I got it.',
        date: '14 Sept 2026',
        verified: true
      },
      {
        id: 'rev-2',
        author: 'Shreya Roy',
        exam: 'Banking',
        city: 'Kolkata',
        rating: 5,
        title: 'True to size and super comfortable',
        comment: 'Wore it for my 8-hour IBPS PO weekend marathon. Super soft and breathable.',
        date: '02 Sept 2026',
        verified: true
      }
    ]
  },
  {
    id: 'prod-apparel-2',
    name: '“Rank Is Built, Not Given” Heavy Hoodie',
    category: 'Apparel',
    price: 1299,
    originalPrice: 1899,
    description: '380 GSM fleece-lined hoodie engineered for freezing morning revision sessions and late-night winter study. Double-layered hood with deep kangaroo pocket to warm hands before mental math drills.',
    shortBenefit: '380 GSM brushed fleece keeping you warm during 5 AM winter revisions.',
    skill: 'Productivity',
    exams: ['UPSC', 'CAT / MBA', 'NEET', 'JEE'],
    rating: 4.8,
    reviewsCount: 98,
    badge: 'NEW DROP',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    alternateImage: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 14,
    tags: ['Winter Drop', 'Heavy Fleece', 'Aspirant Uniform'],
    benefits: [
      '380 GSM thick cotton-blend fleece for high thermal insulation',
      'Dual-layer structured hood blocks ambient library drafts and distractions',
      'Hidden internal pocket for flashcards or phone during Pomodoro breaks',
      'Ribbed cuffs that maintain shape even after daily wear'
    ],
    whatsInside: [
      '1x “Rank Is Built, Not Given” Hoodie',
      '1x Metal Lapel Pin',
      '1x Daily Revision Habit Tracker Card'
    ],
    howToUse: 'Gentle wash cycle. Dry flat in shade. Ideal uniform for winter test series prep.',
    reviews: [
      {
        id: 'rev-3',
        author: 'Arjun Verma',
        exam: 'UPSC',
        city: 'Old Rajinder Nagar, Delhi',
        rating: 5,
        title: 'The ORN official uniform now!',
        comment: 'Winter in Delhi coaching hubs is brutal. This hoodie is thick, warm, and keeps me in deep work mode without feeling sloppy.',
        date: '20 Aug 2026',
        verified: true
      }
    ]
  },
  {
    id: 'prod-apparel-3',
    name: '“Mock. Analyse. Repeat.” T-Shirt',
    category: 'Apparel',
    price: 749,
    originalPrice: 1049,
    description: 'The golden rule of competitive exams screen-printed on ultra-soft 100% Supima blend cotton. Deep Indigo base with Amber Ochre typography.',
    shortBenefit: 'Supima blend cotton with the core philosophy of high-percentile aspirants.',
    skill: 'Reasoning',
    exams: ['SSC', 'Banking', 'CAT / MBA', 'CLAT'],
    rating: 4.7,
    reviewsCount: 86,
    badge: 'EXAM SEASON',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 35,
    tags: ['Graphic Tee', 'Deep Indigo', 'Daily Wear'],
    benefits: [
      'Silky Supima cotton feel with sweat-wicking properties',
      'Tailored modern fit suitable for coaching classes or home study',
      'Reinforced collar prevents collar baconing over time'
    ],
    whatsInside: ['1x Graphic T-Shirt', '1x Mock Test Score Log Book'],
    howToUse: 'Pair with sweatpants for home mocks or denim for coaching center sessions.',
    reviews: []
  },
  {
    id: 'prod-apparel-4',
    name: '“Train The Mind” Minimalist Hoodie',
    category: 'Apparel',
    price: 1399,
    originalPrice: 1999,
    description: 'Clean, understated luxury fleece hoodie featuring the subtle embroidered SkillSutra Mind-Matrix symbol on chest and tagline on sleeve.',
    shortBenefit: 'Sleek embroidered branding for aspirants who prefer subtle excellence.',
    skill: 'Focus',
    exams: ['CAT / MBA', 'UPSC', 'Placements'],
    rating: 4.9,
    reviewsCount: 64,
    badge: 'LIMITED DROP',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 9,
    tags: ['Embroidered', 'Minimal', 'Luxury Fleece'],
    benefits: [
      'High-density 40,000 stitch micro-embroidery',
      'Ultra-soft brushed peach-skin exterior',
      'Custom gunmetal drawstrings with engraved tips'
    ],
    whatsInside: ['1x Embroidered Hoodie', '1x Dust Bag', '1x Certificate of Limited Drop'],
    howToUse: 'Wear during mock days or campus interviews.',
    reviews: []
  },

  // FOCUS & WELLNESS KITS (3)
  {
    id: 'prod-focus-1',
    name: 'Deep Work Focus Kit',
    category: 'Focus',
    price: 799,
    originalPrice: 1199,
    description: 'Designed specifically for the 50-minute distraction-free study model. Contains our proprietary physical Pomodoro flip card set, focus timer, high-density foam earplugs, and distraction blocker scratchpad.',
    shortBenefit: 'Build a ritualized study cockpit that cuts digital impulse and doubles deep-work output.',
    skill: 'Focus',
    exams: ['UPSC', 'CAT / MBA', 'NEET', 'JEE', 'Banking', 'SSC'],
    rating: 4.8,
    reviewsCount: 126,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    alternateImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 42,
    tags: ['Deep Work', 'Ritual Kit', 'Top Recommended'],
    benefits: [
      'Designed around cognitive science 50:10 ultradian rhythm cycles',
      'Eliminates the "check phone" itch with physical tactile tactile cards',
      'Reduces ambient library and hostel noise by 32dB with industrial earplugs',
      'Compact matte tin fits right inside your backpack side pocket'
    ],
    whatsInside: [
      '1x 50-Minute Analog Mechanical Rotary Timer',
      '1x Distraction Parking Scratchpad (100 sheets)',
      '2x Reusable 32dB Noise-Cancelling Silicone Earplugs with Travel Case',
      '1x “Do Not Disturb: Deep Work in Progress” Reversible Desk Tent Card',
      '1x Quick Start Guide to Cal Newport Focus Protocols'
    ],
    howToUse: 'Step 1: Set phone to Do Not Disturb outside arm’s reach. Step 2: Write your single micro-goal on the scratchpad. Step 3: Wind the timer to 50 min and enter the zone.',
    reviews: [
      {
        id: 'rev-4',
        author: 'Dr. Tanya Mukherjee',
        exam: 'NEET',
        city: 'Jaipur',
        rating: 5,
        title: 'Saved my NEET PG second attempt',
        comment: 'My biggest bottleneck was opening Instagram whenever I hit a difficult pharmacology question. Writing thoughts on the parking pad broke the reflex immediately.',
        date: '18 Sept 2026',
        verified: true
      },
      {
        id: 'rev-5',
        author: 'Gaurav Kulkarni',
        exam: 'UPSC',
        city: 'Nagpur',
        rating: 5,
        title: 'The timer tick is soothing, no digital screen temptation',
        comment: 'Using your phone as a timer is a trap. This physical kit created an ironclad study ritual for GS-2 notes.',
        date: '05 Sept 2026',
        verified: true
      }
    ]
  },
  {
    id: 'prod-focus-2',
    name: '50-Minute Focus Kit (Pro Edition)',
    category: 'Focus',
    price: 899,
    originalPrice: 1299,
    description: 'Upgraded version with dual sand hourglass (50 min deep study + 10 min break), premium leatherette desk pad, and habit checklist journal.',
    shortBenefit: 'Dual sand hourglass and leatherette workspace upgrade for serious desk setups.',
    skill: 'Focus',
    exams: ['CAT / MBA', 'UPSC', 'CLAT'],
    rating: 4.9,
    reviewsCount: 74,
    badge: 'NEW DROP',
    image: 'https://images.unsplash.com/photo-1507842229451-79b1be886a20?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507842229451-79b1be886a20?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 22,
    tags: ['Hourglass', 'Desk Upgrade', 'Pro Ritual'],
    benefits: [
      'Visual sand countdown creates ambient urgency without intrusive alarms',
      'Premium vegan leather binding with embossed silver lettering',
      'Includes 30-day streak tracking card'
    ],
    whatsInside: [
      '1x 50-Min Amber Sand Hourglass',
      '1x 10-Min Indigo Sand Hourglass',
      '1x A5 Habit Checklist Journal'
    ],
    howToUse: 'Flip the amber sand glass when your study session begins. No digital screens allowed.',
    reviews: []
  },
  {
    id: 'prod-focus-3',
    name: 'Calm Before Exam Kit',
    category: 'Focus',
    price: 699,
    originalPrice: 999,
    description: 'Pre-exam anxiety management kit formulated with stress-relief pressure balls, exam breathing flashcards, lavender roll-on pulse oil, and exam-eve checklist.',
    shortBenefit: 'Reset cortisol spikes and enter the examination hall in a peak flow state.',
    skill: 'Decision-Making',
    exams: ['CAT / MBA', 'NEET', 'JEE', 'UPSC', 'Banking'],
    rating: 4.8,
    reviewsCount: 52,
    badge: 'EXAM SEASON',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 31,
    tags: ['Stress Relief', 'Exam Day', 'Mental Poise'],
    benefits: [
      'Box-breathing protocol cards scientifically proven to lower heart rate in 3 minutes',
      'Aromatherapy roll-on with pure lavender and peppermint essential extracts',
      'Ergonomic grip stress ball for forearm relaxation between test sections'
    ],
    whatsInside: [
      '1x Ergonomic Tactile Stress Sphere',
      '1x 10ml Pure Botanical Focus Pulse Oil',
      '5x Laminated 4-7-8 Breathing Guide Flashcards',
      '1x Exam-Eve Anxiety Checklist'
    ],
    howToUse: 'Apply pulse oil on wrists 30 minutes before sleep or right before walking into your exam center.',
    reviews: []
  },

  // TECH & DESK ACCESSORIES (5)
  {
    id: 'prod-desk-1',
    name: 'SkillSutra Extended Desk Mat (90x40cm)',
    category: 'Desk',
    price: 699,
    originalPrice: 1099,
    description: 'Microfiber-textured desk mat printed with mental math speed formulas, Vedic speed multipliers, and high-frequency percentage-to-fraction conversions for instant recall.',
    shortBenefit: 'Zero-reflection surface with mental math speed tables right beneath your hands.',
    skill: 'Speed',
    exams: ['CAT / MBA', 'Banking', 'SSC'],
    rating: 4.9,
    reviewsCount: 168,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    alternateImage: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 45,
    tags: ['Desk Setup', 'Formulas', 'Speed Math', 'Non-Slip'],
    benefits: [
      'Covers 90x40cm — accommodates laptop, external monitor, notepad, and mouse',
      'Features high-resolution crisp print of 1/2 to 1/20 fraction values, square roots, cubes',
      'Waterproof hydrophobic coating resists chai, coffee, and water spills',
      'Non-slip natural rubber base prevents shifting during frantic mouse clicks'
    ],
    whatsInside: ['1x Extended Speed Math Desk Mat', '1x Microfiber Cleaning Cloth'],
    howToUse: 'Unroll over your study desk. Look down during mock test review whenever fractions or tables slip your mind.',
    reviews: [
      {
        id: 'rev-6',
        author: 'Kunal Sen',
        exam: 'CAT / MBA',
        city: 'Bengaluru',
        rating: 5,
        title: 'Shaved 20 seconds off every DI set',
        comment: 'Having fractions like 1/17 = 5.88% in my peripheral vision trained my subconscious memory without having to cram flashcards.',
        date: '11 Sept 2026',
        verified: true
      }
    ]
  },
  {
    id: 'prod-desk-2',
    name: 'Precision Productivity Study Timer',
    category: 'Desk',
    price: 599,
    originalPrice: 899,
    description: 'Rotary-dial magnetic countdown and count-up timer with large crisp LED display, silent visual vibration mode for silent reading rooms, and dual alarm volumes.',
    shortBenefit: 'Dedicated digital-free hardware timer with silent visual flash for library desks.',
    skill: 'Productivity',
    exams: ['SSC', 'Banking', 'UPSC', 'CAT / MBA', 'NEET'],
    rating: 4.8,
    reviewsCount: 110,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 33,
    tags: ['Hardware Timer', 'Silent Mode', 'Library Safe'],
    benefits: [
      'Twist bezel to set time in seconds: intuitive and tactile',
      'Silent LED flashing alert ensures no angry library glares',
      'Magnetic back mounts directly on metal study shelves or whiteboard'
    ],
    whatsInside: ['1x Rotary Study Timer', '3x AAA Alkaline Batteries', '1x Desk Stand'],
    howToUse: 'Twist dial clockwise for minutes, tap button to commence test countdown.',
    reviews: []
  },
  {
    id: 'prod-desk-3',
    name: 'SkillSutra Armor Laptop Sleeve (13-15.6")',
    category: 'Desk',
    price: 899,
    originalPrice: 1399,
    description: 'Shockproof water-repellent padded laptop sleeve with dedicated tablet and test-paper storage dividers. Designed for daily coaching commute on metro and buses.',
    shortBenefit: '360° internal foam bumpers safeguarding your device during cramped metro commutes.',
    skill: 'Productivity',
    exams: ['Placements', 'CAT / MBA', 'CLAT'],
    rating: 4.7,
    reviewsCount: 48,
    badge: 'STAFF PICK',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 19,
    tags: ['Commute', 'Waterproof', 'Minimalist'],
    benefits: [
      'YKK weather-sealed zippers protect against sudden Indian monsoon downpours',
      'Plush faux-fur interior lining stops scratches',
      'Exterior zipper pocket holds mouse, charger dongle, and ID cards'
    ],
    whatsInside: ['1x Laptop Sleeve', '1x Cable Management Strap'],
    howToUse: 'Fits 13" MacBook up to 15.6" thin & light laptops.',
    reviews: []
  },
  {
    id: 'prod-desk-4',
    name: 'Ergonomic Aluminum Tablet & Phone Stand',
    category: 'Desk',
    price: 399,
    originalPrice: 699,
    description: 'Foldable aircraft-grade aluminum stand with anti-slip silicone pads and dual 270° swivel hinges. Elevates your screen to eye level to prevent "aspirant neck strain".',
    shortBenefit: 'Eye-level viewing during 3-hour marathon lecture video sessions.',
    skill: 'Focus',
    exams: ['NEET', 'JEE', 'UPSC', 'Banking'],
    rating: 4.8,
    reviewsCount: 92,
    badge: 'NEW DROP',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 60,
    tags: ['Ergonomics', 'Aluminum', 'Video Lectures'],
    benefits: [
      'Cuts cervical neck strain by keeping tablet at 45° angle',
      'Cable routing cutout lets you charge while watching continuous live lectures',
      'Folds flat to 15mm thickness for your bag'
    ],
    whatsInside: ['1x Foldable Aluminum Stand', '1x Velvet Carry Pouch'],
    howToUse: 'Adjust tilt hinges to align camera with eye level for interviews or lecture viewing.',
    reviews: []
  },
  {
    id: 'prod-desk-5',
    name: 'Modular Study Desk Organizer & Pen Tray',
    category: 'Desk',
    price: 499,
    originalPrice: 799,
    description: 'Matte Indigo multi-tier desk caddy with magnetic sticky-note dock, highlighter slots, and cardholder for your daily 3 priorities.',
    shortBenefit: 'Declutter visual distractions to keep cognitive load 100% focused on solving.',
    skill: 'Productivity',
    exams: ['UPSC', 'SSC', 'CAT / MBA', 'Banking'],
    rating: 4.6,
    reviewsCount: 38,
    badge: 'STAFF PICK',
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 25,
    tags: ['Organization', 'Clean Desk', 'Productivity'],
    benefits: [
      'Keeps highlighters, rough pens, and sticky pads neatly segmented',
      'Built-in slot displays your "Today\'s Non-Negotiable 3 Tasks" card'
    ],
    whatsInside: ['1x Modular Desk Caddy', '1x 50-Card Priority Index Deck'],
    howToUse: 'Place on top right of your study desk. Keep only active stationery out.',
    reviews: []
  },

  // DIGITAL MERCHANDISE (4)
  {
    id: 'prod-digital-1',
    name: 'SkillSutra Master Digital Study Planner (Notion + PDF)',
    category: 'Digital',
    price: 199,
    originalPrice: 499,
    description: 'The ultimate digital operating system for serious aspirants. Includes automated spaced-repetition schedules, syllabus tracker, mock score analytics sheet, and Pomodoro logger.',
    shortBenefit: 'Automated spaced repetition algorithm and mock-test percentile trend charts.',
    skill: 'Productivity',
    exams: ['CAT / MBA', 'UPSC', 'SSC', 'Banking', 'NEET', 'JEE', 'CLAT', 'Placements'],
    rating: 4.9,
    reviewsCount: 284,
    badge: 'DIGITAL',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 9999,
    isDigital: true,
    tags: ['Notion Template', 'Printable PDF', 'GoodNotes', 'Instant Download'],
    benefits: [
      'One-click duplicate into your free Notion account',
      'Automated 1-3-7-30 day spaced repetition review calculator',
      'Mock exam percentile progression graphs across all test series',
      'Hyperlinked GoodNotes & iPad printable PDF edition included'
    ],
    whatsInside: [
      '1x Notion Master Workspace Template Link',
      '1x 120-Page Interactive Digital PDF Planner for iPad/Tablets',
      '1x Video Walkthrough Tutorial by 99.8%iler Mentor'
    ],
    howToUse: 'Instant email delivery with duplicate link. Customize your exam target date in 2 clicks.',
    reviews: [
      {
        id: 'rev-7',
        author: 'Nikhil Kashyap',
        exam: 'Banking',
        city: 'Patna',
        rating: 5,
        title: 'Best 199 rupees spent in my entire life',
        comment: 'I was maintaining 4 separate messy Excel sheets for IBPS PO. This Notion template has automated formulas for accuracy rate and negative mark analysis.',
        date: '21 Sept 2026',
        verified: true
      }
    ]
  },
  {
    id: 'prod-digital-2',
    name: 'Spaced-Repetition Revision Tracker',
    category: 'Digital',
    price: 149,
    originalPrice: 349,
    description: 'Scientific Ebbinghaus forgetting curve tracker for mastering heavy theoretical subjects like UPSC GS, NEET Biology, and SSC Static GK.',
    shortBenefit: 'Systematize your revision intervals so you never forget what you read 3 weeks ago.',
    skill: 'Memory',
    exams: ['UPSC', 'NEET', 'SSC', 'CLAT'],
    rating: 4.8,
    reviewsCount: 147,
    badge: 'DIGITAL',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 9999,
    isDigital: true,
    tags: ['Memory Science', 'Excel & Sheets', 'Instant Download'],
    benefits: [
      'Colour-coded warning indicators when a subject is due for revision',
      'Pre-populated with 250+ standard exam subtopics',
      'Eliminates the "have I revised this yet?" guesswork'
    ],
    whatsInside: ['1x Google Sheets & Excel Template', '1x Spaced Repetition Mastery Cheat Sheet'],
    howToUse: 'Input date of first completion. The sheet calculates review reminders on Days 3, 7, 21, and 45.',
    reviews: []
  },
  {
    id: 'prod-digital-3',
    name: 'Mock Test Error-Log & Strategy Sheet',
    category: 'Digital',
    price: 199,
    originalPrice: 399,
    description: 'Diagnose whether an error was conceptual, silly misread, or time crunch. The exact analytics framework utilized by top 100 rankers to eliminate recurring mistakes.',
    shortBenefit: 'Categorize silly vs conceptual mistakes to plug score leaks systematically.',
    skill: 'Reasoning',
    exams: ['CAT / MBA', 'JEE', 'Banking', 'SSC'],
    rating: 4.9,
    reviewsCount: 189,
    badge: 'DIGITAL',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 9999,
    isDigital: true,
    tags: ['Mock Analysis', 'Error Log', 'Instant Download'],
    benefits: [
      'Auto-calculates Time Spent on Unattempted Questions',
      'Identifies trap questions that cost you negative marks',
      'Sectional drill tracker with speed vs accuracy radar chart'
    ],
    whatsInside: ['1x Comprehensive Mock Analytics Dashboard', '1x 15-Min Error Log Video Framework'],
    howToUse: 'Open directly after taking any mock. Log questions that were skipped or negative.',
    reviews: []
  },
  {
    id: 'prod-digital-4',
    name: 'Campus Placement & GD-PI Interview Template Deck',
    category: 'Digital',
    price: 249,
    originalPrice: 599,
    description: 'STAR framework behavioral interview story builder, MBA WAT essay frameworks, and GD strategy cheat-sheets curated by ex-IIM & corporate recruiters.',
    shortBenefit: 'Structure your personal stories with the STAR method for top tier interview rounds.',
    skill: 'Communication',
    exams: ['Placements', 'CAT / MBA', 'UPSC'],
    rating: 4.9,
    reviewsCount: 112,
    badge: 'DIGITAL',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 9999,
    isDigital: true,
    tags: ['Interview Prep', 'STAR Method', 'GD Frameworks'],
    benefits: [
      '50 standard tricky behavioral questions with ideal response blueprints',
      '10 Group Discussion opening & summarizing tactical frameworks',
      'Interactive Story Bank spreadsheet to organize all your resume projects'
    ],
    whatsInside: ['1x Interview Story Bank Sheet', '1x GD Mastery Handout', '1x WAT Essay Formula Sheet'],
    howToUse: 'Fill your 6 cornerstone career stories before campus placement or MBA interview season.',
    reviews: []
  },

  // MOTIVATIONAL DECOR (3)
  {
    id: 'prod-decor-1',
    name: '“Train The Mind Behind The Marks” Framed Art (A3)',
    category: 'Decor',
    price: 599,
    originalPrice: 899,
    description: 'Museum-grade 300 GSM matte art print framed in sleek minimalist matte black polymer. The core SkillSutra manifesto to anchor your study zone.',
    shortBenefit: 'Minimalist typography art piece reminding you that skill outlasts syllabus.',
    skill: 'Productivity',
    exams: ['CAT / MBA', 'UPSC', 'SSC', 'Banking', 'NEET', 'JEE'],
    rating: 4.9,
    reviewsCount: 95,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 40,
    tags: ['Wall Art', 'Framed', 'Study Sanctuary'],
    benefits: [
      'Shatterproof acrylic glass front — safe for hostel rooms',
      'Pre-installed sawtooth hanger and dual-sided high-bond adhesive strip',
      'Anti-glare textured finish'
    ],
    whatsInside: ['1x A3 Framed Typography Art', '2x Damage-Free Wall Mounting Strips'],
    howToUse: 'Mount directly above eye level over your study table.',
    reviews: []
  },
  {
    id: 'prod-decor-2',
    name: '“Consistency > Motivation” Heavy Metal Desk Card',
    category: 'Decor',
    price: 349,
    originalPrice: 499,
    description: 'Laser-engraved brushed gunmetal desk card on natural walnut wood easel stand. Built to withstand moments when self-doubt creeps in.',
    shortBenefit: 'Weighted metallic reminder that everyday repetition beats sporadic bursts of motivation.',
    skill: 'Productivity',
    exams: ['UPSC', 'CAT / MBA', 'JEE'],
    rating: 4.8,
    reviewsCount: 67,
    badge: 'NEW DROP',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 55,
    tags: ['Desk Card', 'Metal Engraved', 'Easel Stand'],
    benefits: [
      'Substantial 250g weighted feel with chamfered edges',
      'Zero glare finish fits neatly next to your study lamp'
    ],
    whatsInside: ['1x Brushed Metal Engraved Card', '1x Solid Walnut Wood Base'],
    howToUse: 'Position next to your laptop or timer.',
    reviews: []
  },
  {
    id: 'prod-decor-3',
    name: 'SkillSutra 100-Day Countdown Wall Calendar',
    category: 'Decor',
    price: 399,
    originalPrice: 599,
    description: 'Dry-erase large-format perpetual countdown calendar. Fill in your D-Day exam date, strike off daily milestones, and monitor 100-day test series progress visually.',
    shortBenefit: 'High-contrast visual countdown transforming vague dates into daily accountability.',
    skill: 'Productivity',
    exams: ['CAT / MBA', 'UPSC', 'NEET', 'JEE', 'SSC'],
    rating: 4.7,
    reviewsCount: 42,
    badge: 'EXAM SEASON',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 38,
    tags: ['Calendar', 'Dry Erase', 'Milestone Tracker'],
    benefits: [
      'Laminated dry-erase surface wipeable with zero ghosting',
      'Pre-formatted sections for Weekly Target, Mock Target, and Days Remaining'
    ],
    whatsInside: ['1x Large Wall Calendar (60x90cm)', '2x Dry Erase Markers (Indigo & Amber)'],
    howToUse: 'Hang on your door or study wall. Cross off each day at 10 PM.',
    reviews: []
  },

  // HYDRATION & SLEEP ESSENTIALS (3)
  {
    id: 'prod-well-1',
    name: 'SkillSutra Matte Insulated Bottle (750ml)',
    category: 'Wellness',
    price: 599,
    originalPrice: 899,
    description: 'Double-wall vacuum insulated 18/8 food-grade stainless steel bottle. Keeps water chilled for 24 hours or coffee hot for 12 hours during overnight study marathons.',
    shortBenefit: '24-hour ice-cold hydration in sweat-free matte finish designed for quiet libraries.',
    skill: 'Productivity',
    exams: ['CAT / MBA', 'UPSC', 'SSC', 'Banking', 'NEET', 'JEE'],
    rating: 4.9,
    reviewsCount: 153,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    alternateImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 50,
    tags: ['Stainless Steel', 'Insulated', 'Library Silent'],
    benefits: [
      'Silent silicone base prevents loud metal clattering on library wooden desks',
      'Zero condensation — safe to place right next to notes and books without water rings',
      'Wide mouth fits ice cubes easily and simplifies cleaning',
      'Laser-etched hydration milestone markers on interior'
    ],
    whatsInside: ['1x 750ml Vacuum Bottle', '1x Paracord Carry Loop', '1x Cleaning Sponge'],
    howToUse: 'Fill once in the morning and once post-lunch to hit your cognitive optimal 2.5L daily hydration.',
    reviews: [
      {
        id: 'rev-8',
        author: 'Meera Nambiar',
        exam: 'CLAT',
        city: 'Kochi',
        rating: 5,
        title: 'The silicone bottom is a genius detail',
        comment: 'No more awkward loud dings in the quiet library whenever you put your bottle down. Stays freezing cold throughout Chennai summers.',
        date: '16 Sept 2026',
        verified: true
      }
    ]
  },
  {
    id: 'prod-well-2',
    name: 'Deep Sleep 3D Contoured Eye Mask',
    category: 'Wellness',
    price: 349,
    originalPrice: 599,
    description: 'Zero eye pressure 3D memory foam blackout eye mask. Crucial for afternoon power naps between intensive question-solving blocks and blocking hostel corridor lights.',
    shortBenefit: '100% total light blackout without any eye or eyelash pressure for 20-min power resets.',
    skill: 'Memory',
    exams: ['UPSC', 'NEET', 'JEE', 'CAT / MBA'],
    rating: 4.8,
    reviewsCount: 88,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 65,
    tags: ['Sleep Science', 'Memory Consolidation', 'Power Nap'],
    benefits: [
      'Deep eye cavities let your eyes blink freely without touching fabric',
      'Memory consolidation occurs during slow-wave sleep — 20m power nap boosts recall by 34%',
      'Adjustable elastic band never snags hair'
    ],
    whatsInside: ['1x 3D Contoured Blackout Mask', '1x Pair Noise-Isolation Foam Plugs', '1x Pouch'],
    howToUse: 'Slip on for 20-minute post-lunch power nap to clear adenosine and reset working memory.',
    reviews: []
  },
  {
    id: 'prod-well-3',
    name: 'Cognitive Hydration Tracker Bottle with Infuser (1L)',
    category: 'Wellness',
    price: 699,
    originalPrice: 999,
    description: 'BPA-Free Tritan 1-Litre bottle with hourly study milestone time markers and removable fruit/mint infuser cage for electrolyte infusion during hot afternoon test slots.',
    shortBenefit: 'Track hourly fluid intake matched to your morning and afternoon study blocks.',
    skill: 'Productivity',
    exams: ['NEET', 'JEE', 'UPSC', 'SSC'],
    rating: 4.7,
    reviewsCount: 61,
    badge: 'NEW DROP',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 29,
    tags: ['Tritan', '1 Litre', 'Time Markers'],
    benefits: [
      'Shatterproof Tritan material built to survive hostel drop accidents',
      'One-click flip top with safety lock for zero bag leaks'
    ],
    whatsInside: ['1x 1L Infuser Bottle', '1x Motivational Strap'],
    howToUse: 'Add lemon slices, mint, or pinch of Himalayan pink salt for natural hydration during tests.',
    reviews: []
  },

  // EXAM-DAY KITS (5)
  {
    id: 'prod-exam-1',
    name: 'CAT Exam-Day Tactical Kit',
    category: 'Exam-Day Kits',
    price: 799,
    originalPrice: 1199,
    description: 'Complete exam-hall compliant gear package designed strictly to TCS iON test center guidelines: transparent zipped pouch, authorized blue ballpoint pens with instant dry ink, glucose chewables, and Admit Card organizer.',
    shortBenefit: '100% TCS iON exam center compliant. Zero surprise hassles at the security frisking gate.',
    skill: 'Decision-Making',
    exams: ['CAT / MBA'],
    rating: 4.9,
    reviewsCount: 178,
    badge: 'EXAM SEASON',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    alternateImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 50,
    tags: ['TCS iON Compliant', 'Exam Day', 'Zero Stress'],
    benefits: [
      'Approved clear transparent waterproof pouch tested across 20+ test centers',
      '4x Ultra-smooth 0.7mm high-friction ballpoint pens tested for fast rough sheet calculations',
      '2x Fast-acting Dextrose chewable tabs for emergency 3 PM slot mental fatigue',
      'Pre-printed D-Day protocol checklist (ID proof, photos, scribble pad strategy)'
    ],
    whatsInside: [
      '1x Transparent Heavy-Gauge PVC Examination Pouch',
      '4x Ergonomic Low-Viscosity Exam Ballpoint Pens (Black & Blue)',
      '1x Compact Photo Adhesive Glue Stick',
      '1x Water-Resistant Admit Card Folder',
      '1x Strip of 4 Fast-Absorption Dextrose Energy Chews',
      '1x CAT 120-Minute Time Allocation Mental Blueprint'
    ],
    howToUse: 'Pack your admit card and photo IDs 48 hours prior. Carry this transparent pouch directly past the security gate.',
    reviews: [
      {
        id: 'rev-9',
        author: 'Tanvi Jain',
        exam: 'CAT / MBA',
        city: 'Ahmedabad',
        rating: 5,
        title: 'Saved me at the TCS gate in Gandhinagar',
        comment: 'Last year guards made me throw my opaque pencil case. This kit was totally transparent, pens worked immediately on rough paper without smudging, and the energy chew gave me a second wind in Quants.',
        date: '10 Sept 2026',
        verified: true
      }
    ]
  },
  {
    id: 'prod-exam-2',
    name: 'UPSC Mains & Prelims Exam-Day System',
    category: 'Exam-Day Kits',
    price: 799,
    originalPrice: 1199,
    description: 'Curated for the rigorous physical endurance of UPSC Prelims (2 papers) and Mains (9 papers). Contains high-flow 0.5mm pens that eliminate writer’s cramp, analogue watch desk clip, and clear water flask.',
    shortBenefit: 'High-flow fatigue-free writing instruments and dual-paper logistical gear for UPSC centers.',
    skill: 'Speed',
    exams: ['UPSC'],
    rating: 4.9,
    reviewsCount: 134,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 44,
    tags: ['UPSC Civil Services', 'Mains Writing', 'OMR Speed'],
    benefits: [
      'Specially weighted barrels minimize wrist fatigue during 3,500-word Mains answers',
      'Wide-nib black ballpoint for rapid Prelims OMR bubble darkening (saves ~7 mins per paper)',
      'UPSC compliant analog desk-mount countdown watch holder'
    ],
    whatsInside: [
      '3x Quick-Flow 0.5mm Smooth Writing Pens',
      '2x Rapid-Bubble OMR Marking Pens',
      '1x Heavy-Duty Clear Admit Card Pouch',
      '1x Finger Grip Cushion Set'
    ],
    howToUse: 'Practice writing your last 5 full-length mock tests with these exact pens to build muscle memory.',
    reviews: []
  },
  {
    id: 'prod-exam-3',
    name: 'SSC CGL / CHSL Exam-Day Tactical Kit',
    category: 'Exam-Day Kits',
    price: 699,
    originalPrice: 999,
    description: 'Engineered for the high-velocity 60-minute SSC sprint. Rapid rough-sheet scribbling pens, anti-smudge surface, and biometric thumbprint cleaning wipes.',
    shortBenefit: 'Optimized for high-speed scratch-pad arithmetic calculations under extreme time pressure.',
    skill: 'Speed',
    exams: ['SSC'],
    rating: 4.8,
    reviewsCount: 89,
    badge: 'NEW DROP',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 36,
    tags: ['SSC Sprint', 'Fast Scratchpad', 'Admit Card Ready'],
    benefits: [
      'Quick-drying ink leaves no grey smudges when working across scratchpad pages',
      'Clear passport photo pouches and glue applicator compliant with SSC rules'
    ],
    whatsInside: ['1x Clear PVC Kit', '3x High-Speed Ballpoint Pens', '1x Adhesive Stick', '2x Alcohol Biometric Wipes'],
    howToUse: 'Carry directly into the lab with your original Aadhaar and colored printout.',
    reviews: []
  },
  {
    id: 'prod-exam-4',
    name: 'Banking Exam-Day Kit (IBPS / SBI PO)',
    category: 'Exam-Day Kits',
    price: 699,
    originalPrice: 999,
    description: 'Tailored for Banking prelims and mains. Includes frictionless scratchpad pens for complex seating arrangement diagrams, clear admit sleeve, and thumb ink wipes.',
    shortBenefit: 'Fast frictionless sketching for complex circular seating arrangements and puzzles.',
    skill: 'Reasoning',
    exams: ['Banking'],
    rating: 4.7,
    reviewsCount: 71,
    badge: 'EXAM SEASON',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 40,
    tags: ['Banking PO', 'Speed Puzzles', 'IBPS Compliant'],
    benefits: [
      'Ultra fine 0.5mm tip allows fitting multiple puzzle case scenarios onto small rough sheets',
      'Compliant with IBPS strict transparent pouch guidelines'
    ],
    whatsInside: ['1x Clear Zip Sleeve', '4x Fine-Tip Drafting Pens', '1x Passport Photo Holder Case'],
    howToUse: 'Use during daily 20-minute puzzle practice sessions.',
    reviews: []
  },
  {
    id: 'prod-exam-5',
    name: 'Executive Interview-Day Kit (Placements & MBA PI)',
    category: 'Exam-Day Kits',
    price: 799,
    originalPrice: 1299,
    description: 'Luxury matte vegan-leather portfolio folder, Parker-style refillable brass pen, resume sheet protectors, breath mints, and body grooming wipes for your big placement day.',
    shortBenefit: 'Make a crisp, structured first impression before you speak your first word to the panel.',
    skill: 'Communication',
    exams: ['Placements', 'CAT / MBA'],
    rating: 4.9,
    reviewsCount: 104,
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
    ],
    stock: 26,
    tags: ['Interview Kit', 'Executive Padfolio', 'Placements'],
    benefits: [
      'Stores 15 crisp unfolded resume copies in archival non-stick crystal-clear sleeves',
      'Dual business card / ID slots and integrated writing legal pad holder',
      'Weighted brass pen creates authoritative signature feel'
    ],
    whatsInside: [
      '1x Premium Indigo Padfolio with Document Compartments',
      '1x Weighted Metal Executive Pen',
      '10x Heavyweight Archival Resume Protectors',
      '1x Pocket Peppermint Freshener'
    ],
    howToUse: 'Hand your resume to the interviewer directly out of the protective sleeve. Zero creases.',
    reviews: []
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-speed-math',
    name: 'Speed Math & Quant Aptitude',
    tagline: 'Multiply calculation velocity by 3x. Stop leaving solvable questions on the table.',
    duration: '60 Days',
    price: 3499,
    originalPrice: 5999,
    exams: ['SSC', 'Banking', 'CAT / MBA'],
    skill: 'Speed',
    level: 'Comprehensive',
    description: 'Transform mental arithmetic from a high-stress bottleneck into an automatic reflex. Master Vedic calculation shortcuts, rapid fraction-to-percentage conversions, visual approximations, and elimination heuristics.',
    curriculum: [
      'Day 1-15: Foundational Mental Math & Cross-Multiplication Velocity',
      'Day 16-30: Percentage-Fraction Duality, Base Methods & Rapid Ratios',
      'Day 31-45: Visual Arithmetic & Split-Second Option Elimination',
      'Day 46-60: High-Pressure Timed Mocks, DI Calculation Hackathon & Retention'
    ],
    recommendedProductIds: ['prod-desk-1', 'prod-desk-2', 'prod-exam-1'],
    bundleId: 'bundle-speed',
    bundleDiscountPercent: 25,
    rating: 4.9,
    enrolledCount: 14200,
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-verbal-reasoning',
    name: 'Verbal & Logical Reasoning',
    tagline: 'Deconstruct convoluted arguments, syllogisms, and RC passages in half the time.',
    duration: '45 Days',
    price: 2999,
    originalPrice: 4999,
    exams: ['SSC', 'Banking', 'CLAT', 'CAT / MBA'],
    skill: 'Reasoning',
    level: 'Advanced',
    description: 'Tired of second-guessing between the last two options in Critical Reasoning and Reading Comprehension? Learn formal argument mapping, implicit assumption spotting, and deductive puzzle systems.',
    curriculum: [
      'Day 1-10: Propositional Logic, Truth Tables & Syllogism Rules',
      'Day 11-25: Critical Reasoning Flaws, Assumptions, Strengthen/Weaken Trees',
      'Day 26-35: Speed Reading & Active Mental Mapping for Dense RC Passages',
      'Day 36-45: Complex Circular Seating & Multi-Dimensional Matrix Puzzles'
    ],
    recommendedProductIds: ['prod-apparel-3', 'prod-digital-3', 'prod-exam-4'],
    bundleId: 'bundle-reasoning',
    bundleDiscountPercent: 20,
    rating: 4.8,
    enrolledCount: 9800,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-memory-retention',
    name: 'Memory & Retention Mastery',
    tagline: 'Retain thousands of articles, botanical names, and dates using memory palaces.',
    duration: '30 Days',
    price: 2499,
    originalPrice: 3999,
    exams: ['UPSC', 'NEET', 'CLAT', 'SSC'],
    skill: 'Memory',
    level: 'All Levels',
    description: 'Forgetfulness is not an intelligence flaw; it is an encoding flaw. Master the Method of Loci (Memory Palaces), phonetic pegs for dates/numbers, and active recall drills backed by cognitive neuroscience.',
    curriculum: [
      'Day 1-7: The Science of Encoding & Forgetting Curves (Ebbinghaus Models)',
      'Day 8-15: Constructing High-Capacity Memory Palaces for GS Articles & Case Law',
      'Day 16-22: The Major System: Memorizing Complex Chronologies & Numerical Constants',
      'Day 23-30: Spaced Retrieval Automation & Flashcard System Architecture'
    ],
    recommendedProductIds: ['prod-digital-2', 'prod-well-2', 'prod-exam-2'],
    bundleId: 'bundle-upsc',
    bundleDiscountPercent: 25,
    rating: 4.9,
    enrolledCount: 16400,
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-focus-deepwork',
    name: 'Focus & Deep-Work',
    tagline: 'Conquer digital dopamine addiction. Build an unbreakable 8-hour daily study state.',
    duration: '21 Days',
    price: 1999,
    originalPrice: 3499,
    exams: ['UPSC', 'NEET', 'JEE', 'CAT / MBA', 'Placements'],
    skill: 'Focus',
    level: 'Foundational',
    description: 'Specifically engineered for exam repeaters and candidates feeling burned out or distracted by smartphone loops. Build disciplined physical and digital study habitats that generate effortless flow states.',
    curriculum: [
      'Day 1-5: Dopamine Detox & Environmental Architecture for Hostels and PGs',
      'Day 6-12: The 50:10 Ultradian Rhythm & Eliminating Micro-Distractions',
      'Day 13-17: High-Arousal Anxiety Calming Protocols & Evening Brain Downshifts',
      'Day 18-21: Sustaining Study Streaks Across Long 6-Month Test Series'
    ],
    recommendedProductIds: ['prod-focus-1', 'prod-well-1', 'prod-decor-1'],
    bundleId: 'bundle-focus',
    bundleDiscountPercent: 30,
    rating: 4.9,
    enrolledCount: 22100,
    image: 'https://images.unsplash.com/photo-1507842229451-79b1be886a20?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-communication-gdpi',
    name: 'Communication, GD & PI',
    tagline: 'Stand out in personal interviews and dominate group discussions with calm eloquence.',
    duration: '30 Days',
    price: 3999,
    originalPrice: 6999,
    exams: ['UPSC', 'CAT / MBA', 'Placements'],
    skill: 'Communication',
    level: 'Masterclass',
    description: 'Transform raw factual knowledge into compelling, persuasive spoken articulation. Master structured narrative frameworks (STAR, PREP), voice modulation, handling cross-questioning, and panel psychology.',
    curriculum: [
      'Day 1-7: Voice Projection, Body Language & Overcoming Nervous Disfluencies',
      'Day 8-15: The PREP & STAR Frameworks for Behavioral & Situational Questions',
      'Day 16-22: Group Discussion Tactics: Entry Strategies, Conflict Defusal & Synthesis',
      'Day 23-30: High-Stakes Mock Interviews with Live Video Feedback & Panel Reviews'
    ],
    recommendedProductIds: ['prod-digital-4', 'prod-exam-5', 'prod-apparel-4'],
    bundleId: 'bundle-placement',
    bundleDiscountPercent: 25,
    rating: 4.9,
    enrolledCount: 8900,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-decision-making',
    name: 'Decision-Making & Cases',
    tagline: 'Master complex multi-stakeholder ethics, XAT Decision-Making, and dilemma trade-offs.',
    duration: '30 Days',
    price: 3499,
    originalPrice: 5499,
    exams: ['CAT / MBA', 'UPSC'],
    skill: 'Decision-Making',
    level: 'Advanced',
    description: 'Competitive exam scenarios rarely have pure black-and-white choices. Learn structured mental models for risk assessment, managerial ethics, opportunity cost calculation, and eliminating cognitive bias.',
    curriculum: [
      'Day 1-8: Mental Models for Complex Decision Trees & Bias Inversion',
      'Day 9-16: XAT Decision-Making Masterclasses: Corporate vs Human Trade-offs',
      'Day 17-23: UPSC GS-4 Ethics Case Studies: Utilitarianism, Deontology & Virtue',
      'Day 24-30: Real-Time Speed Case Analysis & Multi-Option Dilemma Drills'
    ],
    recommendedProductIds: ['prod-focus-3', 'prod-desk-1', 'prod-digital-3'],
    bundleId: 'bundle-cat',
    bundleDiscountPercent: 20,
    rating: 4.8,
    enrolledCount: 7100,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'course-study-productivity',
    name: 'Study Productivity & Strategy',
    tagline: 'Stop studying haphazardly. Build an elite operating system for your exam journey.',
    duration: '21 Days',
    price: 1499,
    originalPrice: 2499,
    exams: ['All Aspirants', 'SSC', 'Banking', 'UPSC', 'CAT / MBA', 'NEET', 'JEE', 'CLAT', 'Placements'],
    skill: 'Productivity',
    level: 'Foundational',
    description: 'The definitive blueprint on how to plan your 6-12 month preparation calendar, build sustainable revision flywheels, analyze mock tests without emotional distress, and protect physical energy.',
    curriculum: [
      'Day 1-5: The Reverse-Planning Syllabus Matrix & Micro-Milestone Architecture',
      'Day 6-11: Spaced Mock Scheduling: When to Begin, How Often to Take Them',
      'Day 12-16: The Post-Mock 3-Hour Diagnostic Protocol That Top 100 Rankers Use',
      'Day 17-21: Energy Management: Sleep Cycles, Circadian Light & Tapering Strategies'
    ],
    recommendedProductIds: ['prod-digital-1', 'prod-decor-2', 'prod-well-1'],
    bundleId: 'bundle-focus',
    bundleDiscountPercent: 20,
    rating: 4.9,
    enrolledCount: 28500,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80'
  }
];

export const BUNDLES: Bundle[] = [
  {
    id: 'bundle-focus',
    name: 'The Complete Focus Bundle',
    tagline: 'Course + Focus Kit + Study Planner — The ultimate distraction-destroyer setup.',
    exam: 'All Aspirants',
    courseId: 'course-focus-deepwork',
    productIds: ['prod-focus-1', 'prod-digital-1'],
    bundlePrice: 2799,
    originalTotal: 3997,
    savings: 1198,
    badge: 'MOST POPULAR',
    description: 'Transform your scattered study days into structured 50-minute deep-work sprints. Combines the 21-day Focus course with physical distraction blockers and digital tracker.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bundle-cat',
    name: 'The CAT 99th-Percentile System',
    tagline: 'Speed Math Course + Decision Making + CAT Exam-Day Kit + Focus Kit',
    exam: 'CAT / MBA',
    courseId: 'course-speed-math',
    productIds: ['prod-exam-1', 'prod-desk-1', 'prod-focus-1'],
    bundlePrice: 4799,
    originalTotal: 6996,
    savings: 2197,
    badge: 'CAT 2026 SPECIAL',
    description: 'Multiply quant speed, eliminate calculation friction, and walk into the examination hall with full TCS iON compliant confidence.',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bundle-upsc',
    name: 'The UPSC Civil Services System',
    tagline: 'Memory & Retention Course + Focus Course + UPSC Exam-Day Kit + Revision Tracker',
    exam: 'UPSC',
    courseId: 'course-memory-retention',
    productIds: ['prod-exam-2', 'prod-digital-2', 'prod-well-2'],
    bundlePrice: 3899,
    originalTotal: 5846,
    savings: 1947,
    badge: 'UPSC ESSENTIAL',
    description: 'Master memory palaces for GS articles, protect your sleep cycle for memory consolidation, and prepare your hands for marathon Mains writing.',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bundle-placement',
    name: 'The Day-1 Placement Mastery Bundle',
    tagline: 'Communication GD & PI Course + Executive Interview Kit + STAR Template Deck',
    exam: 'Placements',
    courseId: 'course-communication-gdpi',
    productIds: ['prod-exam-5', 'prod-digital-4'],
    bundlePrice: 4499,
    originalTotal: 6047,
    savings: 1548,
    badge: 'PLACEMENT SPECIAL',
    description: 'Speak sharper, present with poise, structure your technical and personal anecdotes, and carry an authoritative portfolio to campus interviews.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: 'You know the core concept, but when you look at the timer during a mock...',
    scenario: 'Time management under pressure',
    skillTested: 'Speed',
    options: [
      {
        text: 'I panic and scramble. I always leave 5-10 easy questions unattempted at the end.',
        description: 'Severe calculation bottleneck and time-anxiety leak.',
        scoreWeight: { Speed: 40, Memory: 75, Focus: 55, Reasoning: 70, Communication: 70, 'Decision-Making': 50, Productivity: 60 }
      },
      {
        text: 'I rush and make silly calculation mistakes in questions I practiced 10 times.',
        description: 'Speed-accuracy tradeoff breakdown under stress.',
        scoreWeight: { Speed: 55, Memory: 80, Focus: 60, Reasoning: 65, Communication: 70, 'Decision-Making': 60, Productivity: 65 }
      },
      {
        text: 'I skip aggressively, but I often spend 3 minutes stuck on one ego question.',
        description: 'Selection heuristic & decision flaw.',
        scoreWeight: { Speed: 70, Memory: 80, Focus: 70, Reasoning: 75, Communication: 70, 'Decision-Making': 45, Productivity: 60 }
      },
      {
        text: 'I finish smoothly with 3-5 minutes left for a quick error check.',
        description: 'Optimal speed control.',
        scoreWeight: { Speed: 90, Memory: 85, Focus: 85, Reasoning: 85, Communication: 80, 'Decision-Making': 85, Productivity: 85 }
      }
    ]
  },
  {
    id: 2,
    text: 'When you study a dense chapter or syllabus topic, what happens after 3 weeks?',
    scenario: 'Information retention and retrieval',
    skillTested: 'Memory',
    options: [
      {
        text: 'It feels like I am reading it for the first time again. I retain barely 20%.',
        description: 'Absence of spaced encoding and active retrieval.',
        scoreWeight: { Speed: 65, Memory: 40, Focus: 60, Reasoning: 70, Communication: 70, 'Decision-Making': 65, Productivity: 50 }
      },
      {
        text: 'I remember the big picture, but exact formulas, dates, or constitutional articles blur.',
        description: 'Passive reading trap without phonetic or locus encoding.',
        scoreWeight: { Speed: 70, Memory: 60, Focus: 70, Reasoning: 75, Communication: 75, 'Decision-Making': 70, Productivity: 65 }
      },
      {
        text: 'I recall it well if I solve multiple questions, but I struggle with pure rote theory.',
        description: 'Application-based memory without formal flashcard review.',
        scoreWeight: { Speed: 75, Memory: 75, Focus: 75, Reasoning: 80, Communication: 75, 'Decision-Making': 75, Productivity: 75 }
      },
      {
        text: 'I have a systematic spaced-repetition loop; retrieval is instant and sharp.',
        description: 'Elite memory retention.',
        scoreWeight: { Speed: 85, Memory: 95, Focus: 85, Reasoning: 85, Communication: 85, 'Decision-Making': 80, Productivity: 90 }
      }
    ]
  },
  {
    id: 3,
    text: 'How does your focus behave during a scheduled 3-hour study block?',
    scenario: 'Deep work endurance and digital friction',
    skillTested: 'Focus',
    options: [
      {
        text: 'I reach for my phone every 12-15 minutes or switch browser tabs continuously.',
        description: 'Dopamine fragmentation and continuous partial attention.',
        scoreWeight: { Speed: 60, Memory: 65, Focus: 35, Reasoning: 65, Communication: 70, 'Decision-Making': 60, Productivity: 40 }
      },
      {
        text: 'The first 40 minutes are strong, but then heavy brain fog and drowsiness hits me.',
        description: 'Ultradian energy dip without systematic recovery protocols.',
        scoreWeight: { Speed: 65, Memory: 70, Focus: 55, Reasoning: 70, Communication: 70, 'Decision-Making': 65, Productivity: 60 }
      },
      {
        text: 'I can focus for 90 minutes if the subject is interesting, but struggle on dry subjects.',
        description: 'Motivation-dependent focus rather than ritual-driven discipline.',
        scoreWeight: { Speed: 70, Memory: 75, Focus: 70, Reasoning: 75, Communication: 75, 'Decision-Making': 70, Productivity: 70 }
      },
      {
        text: 'I routinely enter 2-hour uninterrupted flow states with my phone in another room.',
        description: 'Mastered environmental discipline.',
        scoreWeight: { Speed: 85, Memory: 85, Focus: 95, Reasoning: 85, Communication: 80, 'Decision-Making': 85, Productivity: 90 }
      }
    ]
  },
  {
    id: 4,
    text: 'When faced with a complex reasoning puzzle or multi-statement question under pressure...',
    scenario: 'Analytical reasoning under cognitive stress',
    skillTested: 'Reasoning',
    options: [
      {
        text: 'I get overwhelmed by the wall of text and end up guessing between 2 close choices.',
        description: 'Breakdown of deductive structuring.',
        scoreWeight: { Speed: 55, Memory: 65, Focus: 60, Reasoning: 45, Communication: 65, 'Decision-Making': 50, Productivity: 60 }
      },
      {
        text: 'I spend too long drawing diagrams and run out of time for the simpler sets.',
        description: 'Inefficient puzzle-casing heuristics.',
        scoreWeight: { Speed: 50, Memory: 70, Focus: 65, Reasoning: 60, Communication: 70, 'Decision-Making': 55, Productivity: 65 }
      },
      {
        text: 'I can crack it if given 4 minutes, but in a 2-minute exam slot, accuracy drops to 50%.',
        description: 'Speed-reasoning decoupling.',
        scoreWeight: { Speed: 65, Memory: 75, Focus: 75, Reasoning: 75, Communication: 75, 'Decision-Making': 65, Productivity: 70 }
      },
      {
        text: 'I systematically isolate variables, map branches, and spot trap traps instantly.',
        description: 'Sharp deductive mastery.',
        scoreWeight: { Speed: 85, Memory: 85, Focus: 85, Reasoning: 95, Communication: 85, 'Decision-Making': 85, Productivity: 85 }
      }
    ]
  },
  {
    id: 5,
    text: 'How do you feel about expressing your arguments in GDs, interviews, or written answers?',
    scenario: 'Spoken articulation and executive poise',
    skillTested: 'Communication',
    options: [
      {
        text: 'I have the ideas in my head, but I fumble, speak too fast, or freeze when asked to explain.',
        description: 'Articulation anxiety and unstructured thought delivery.',
        scoreWeight: { Speed: 65, Memory: 70, Focus: 65, Reasoning: 70, Communication: 35, 'Decision-Making': 55, Productivity: 65 }
      },
      {
        text: 'I talk in circles without reaching the punchline. My answers feel too long and disorganized.',
        description: 'Lack of STAR / PREP structural discipline.',
        scoreWeight: { Speed: 70, Memory: 75, Focus: 70, Reasoning: 75, Communication: 55, 'Decision-Making': 65, Productivity: 70 }
      },
      {
        text: 'I am decent one-on-one, but in a chaotic group discussion, other loud candidates cut me off.',
        description: 'Needs entry strategies and vocal presence training.',
        scoreWeight: { Speed: 75, Memory: 80, Focus: 75, Reasoning: 80, Communication: 70, 'Decision-Making': 75, Productivity: 75 }
      },
      {
        text: 'I can frame concise, persuasive 3-point arguments on the spot with poise.',
        description: 'Command of executive communication.',
        scoreWeight: { Speed: 85, Memory: 85, Focus: 85, Reasoning: 85, Communication: 95, 'Decision-Making': 85, Productivity: 85 }
      }
    ]
  },
  {
    id: 6,
    text: 'How do you decide which questions to attempt and which to abandon in a mock?',
    scenario: 'Real-time decision making and risk management',
    skillTested: 'Decision-Making',
    options: [
      {
        text: 'I take every question personally. If I read the chapter, I refuse to leave it unsolved.',
        description: 'Sunk cost fallacy destroying sectional scores.',
        scoreWeight: { Speed: 45, Memory: 75, Focus: 60, Reasoning: 65, Communication: 70, 'Decision-Making': 35, Productivity: 55 }
      },
      {
        text: 'I leave questions too easily when nervous, missing scoring opportunities.',
        description: 'Risk aversion undermining maximum potential.',
        scoreWeight: { Speed: 60, Memory: 70, Focus: 65, Reasoning: 70, Communication: 70, 'Decision-Making': 55, Productivity: 60 }
      },
      {
        text: 'I use a rough round-1 and round-2 strategy, but I don’t execute it consistently.',
        description: 'Strategy exists in theory but slips under pressure.',
        scoreWeight: { Speed: 70, Memory: 75, Focus: 75, Reasoning: 75, Communication: 75, 'Decision-Making': 70, Productivity: 70 }
      },
      {
        text: 'I ruthlessly triage in 10 seconds: Solve Now, Mark for Review, or Trash Forever.',
        description: 'Elite triage decision-making protocol.',
        scoreWeight: { Speed: 85, Memory: 85, Focus: 85, Reasoning: 85, Communication: 85, 'Decision-Making': 95, Productivity: 85 }
      }
    ]
  }
];

export const STUDENT_TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Akash Chaurasia',
    role: 'IIM Sambalpur Convert',
    exam: 'CAT / MBA',
    city: 'Varanasi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Finally found merch that actually feels like my study life. The Desk Mat with quant formulas shaved crucial seconds off my DI sets. It is not just gear; it is an aspirant identity.',
    merchUsed: 'Speed Math Desk Mat + Focus Kit',
    badge: '99.4%ile'
  },
  {
    id: 'test-2',
    name: 'Priyanshu Roy',
    role: 'UPSC CSE Aspirant (Mains 2026)',
    exam: 'UPSC',
    city: 'New Delhi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'The Deep Work Focus Kit has become part of my daily morning study routine in Old Rajinder Nagar. The physical timer and distraction pad eliminated my compulsive phone checks.',
    merchUsed: 'Deep Work Focus Kit + Memory Course',
    badge: 'AIR 142 (Mock)'
  },
  {
    id: 'test-3',
    name: 'Ananya Sengupta',
    role: 'SBI PO Selected',
    exam: 'Banking',
    city: 'Kolkata',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    quote: 'Bought the “One More Mock” hoodie as a joke. Now everyone in our library knows SkillSutra. The courses taught me mental math speed that coaching institutes never showed us.',
    merchUsed: '“One More Mock” Oversized Tee + Speed Course',
    badge: 'SBI PO 2026'
  },
  {
    id: 'test-4',
    name: 'Karthik Venkatesh',
    role: 'SSC CGL Inspector (Central Excise)',
    exam: 'SSC',
    city: 'Chennai',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'SSC is 100% about calculation speed and emotional nerve. SkillSutra’s 60-day Quant Velocity course cut my rough-work clutter by 60%. Highly recommend the kits.',
    merchUsed: 'SSC Exam-Day Tactical Kit',
    badge: 'Rank 84 (Tier 2)'
  }
];

export const COMMUNITY_LEADERBOARD = [
  { rank: 1, name: 'Aditya Sharma', exam: 'CAT / MBA', streak: 34, xp: 4820, badge: 'Quant Ninja', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80' },
  { rank: 2, name: 'Sneha Kulkarni', exam: 'UPSC', streak: 29, xp: 4410, badge: 'Memory Maven', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80' },
  { rank: 3, name: 'Harsh Vardhan', exam: 'Banking', streak: 26, xp: 3990, badge: 'Speed Demon', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80' },
  { rank: 4, name: 'Ritu Agarwal', exam: 'NEET', streak: 21, xp: 3650, badge: 'Focus Beast', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80' },
  { rank: 5, name: 'Akash (You)', exam: 'CAT / MBA', streak: 12, xp: 2840, badge: 'Early Bird', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80' }
];

export const TODAY_CHALLENGE = {
  id: 'chal-day-17',
  title: '30 Days to a Faster Brain',
  day: 17,
  totalDays: 30,
  todayDrill: 'Complete 10 reasoning puzzles in under 7 minutes',
  rewardXp: 150,
  completedCount: 3840,
  sampleQuestions: [
    {
      q: 'If 8 cats catch 8 mice in 8 minutes, how many minutes will 100 cats take to catch 100 mice?',
      options: ['100 minutes', '8 minutes', '80 minutes', '1 minute'],
      correct: 1,
      explanation: '1 cat catches 1 mouse in 8 minutes. Therefore 100 cats catching 100 mice simultaneously still take 8 minutes.'
    },
    {
      q: 'A shopkeeper sells an article at 16.66% profit on selling price. What is his actual profit on cost price?',
      options: ['14.28%', '20%', '16.66%', '25%'],
      correct: 1,
      explanation: '16.66% = 1/6. If SP = 6, Profit = 1, then CP = 5. Actual profit on CP = 1/5 = 20%.'
    },
    {
      q: 'Point A is 10m North of B. C is 10m East of B. D is 10m South of C. What is the shortest distance between A and D?',
      options: ['10m', '14.14m', '20m', '22.36m'],
      correct: 3,
      explanation: 'Horizontal gap = 10m (East). Vertical gap from A to D = 10m + 10m = 20m. Distance = √(10² + 20²) = √500 ≈ 22.36m.'
    }
  ]
};
