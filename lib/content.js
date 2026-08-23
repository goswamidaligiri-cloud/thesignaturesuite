// ============================================================
//  THE SIGNATURE SUITE — CONTENT SOURCE OF TRUTH
// ------------------------------------------------------------
//  Single boundary between code and content. Its shape mirrors
//  the Sanity schemas that will replace it in Phase 2B.
//
//  STRICT RULE (from owner):
//  Do NOT invent factual claims. If a value has not been
//  explicitly provided by the owner, one of the following:
//    (a) leave it empty and let the component skip rendering,
//    (b) use clearly-marked placeholder copy ("editable via
//        CMS"), or
//    (c) set section.enabled = false to hide it entirely
//        until the administrator populates real content in
//        Sanity.
// ============================================================

export const site = {
  name: 'The Signature Suite',
  tagline: 'Serviced Residences',
  bookingUrl: '#book',
  whatsappUrl: '', // Owner has not provided — editable via CMS
  socials: {
    instagram: '', // Owner has not provided — editable via CMS
    facebook: '',
    linkedin: '',
  },
  navigation: [
    { label: 'Suites', href: '#suites' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Giving Back', href: '#giving-back' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const hero = {
  enabled: true,
  // Brand-voice tagline (not a factual claim). Editable via CMS.
  badge: 'A Quiet Luxury Collection',
  headingLine1: 'Where stillness',
  headingLine2: 'meets substance.',
  subtitle:
    'A boutique collection of serviced residences. Full description editable via CMS.',
  primaryCta: { label: 'Reserve a Suite', href: '#book' },
  secondaryCta: { label: 'Explore Residences', href: '#suites' },
  poster: 'https://images.pexels.com/photos/33599113/pexels-photo-33599113.jpeg',
  videoDesktop:
    'https://videos.pexels.com/video-files/6853348/6853348-hd_1920_1080_30fps.mp4',
  videoMobile:
    'https://videos.pexels.com/video-files/6853338/6853338-hd_1280_720_30fps.mp4',
  overlayOpacity: 0.35,
};

export const about = {
  enabled: true,
  eyebrow: 'The Philosophy',
  headingLine1: 'A residence,',
  headingLine2: 'not a room.',
  // Brand-voice placeholder — editable via CMS.
  lead:
    'The Signature Suite is a boutique collection of serviced residences. Full editorial description editable via CMS.',
  body:
    'Seven residences. Two collections. Further description editable via CMS.',
  stats: [
    // Only counts explicitly provided by the owner.
    { value: '07', label: 'Residences' },
    { value: '02', label: 'Collections' },
  ],
};

// Signature Experience pillars — owner has not confirmed which
// programs/services are actually offered. Hidden until the CMS
// administrator populates real content.
export const experience = {
  enabled: false,
  eyebrow: 'The Signature Experience',
  headingLine1: '',
  headingLine2: '',
  intro: '',
  pillars: [],
};

export const suitesMeta = {
  eyebrow: 'The Residences',
  headingLine1: 'Two collections.',
  headingLine2: 'Seven residences.',
  // Brand-voice placeholder — editable via CMS.
  intro:
    'Individual descriptions, imagery, pricing and specifications for each residence are editable via CMS.',
  collections: {
    executive: { label: 'I. Executive Collection', count: '04 Suites' },
    premium: { label: 'II. Livoraa \u00d7 The Signature Suite', count: '03 Residences' },
  },
};

// Only the counts (4 + 3) and collection naming are owner-confirmed.
// Suite names, pricing, area, bed configs and taglines are placeholders
// pending owner input via CMS.
export const suites = [
  { slug: 'executive-suite-01', collection: 'Executive Collection', name: 'Executive Suite 01', tagline: '', area: '', beds: '', priceFrom: null, image: 'https://images.unsplash.com/photo-1653564906654-9f2484215e94' },
  { slug: 'executive-suite-02', collection: 'Executive Collection', name: 'Executive Suite 02', tagline: '', area: '', beds: '', priceFrom: null, image: 'https://images.unsplash.com/photo-1570427224050-b080ad19e3c4' },
  { slug: 'executive-suite-03', collection: 'Executive Collection', name: 'Executive Suite 03', tagline: '', area: '', beds: '', priceFrom: null, image: 'https://images.pexels.com/photos/7749046/pexels-photo-7749046.jpeg' },
  { slug: 'executive-suite-04', collection: 'Executive Collection', name: 'Executive Suite 04', tagline: '', area: '', beds: '', priceFrom: null, image: 'https://images.pexels.com/photos/33599113/pexels-photo-33599113.jpeg' },
  { slug: 'livoraa-signature-residence-01', collection: 'Livoraa \u00d7 The Signature Suite', name: 'Livoraa \u00d7 Signature Residence 01', tagline: '', area: '', beds: '', priceFrom: null, image: 'https://images.pexels.com/photos/14547138/pexels-photo-14547138.jpeg' },
  { slug: 'livoraa-signature-residence-02', collection: 'Livoraa \u00d7 The Signature Suite', name: 'Livoraa \u00d7 Signature Residence 02', tagline: '', area: '', beds: '', priceFrom: null, image: 'https://images.pexels.com/photos/6903157/pexels-photo-6903157.jpeg' },
  { slug: 'livoraa-signature-residence-03', collection: 'Livoraa \u00d7 The Signature Suite', name: 'Livoraa \u00d7 Signature Residence 03', tagline: '', area: '', beds: '', priceFrom: null, image: 'https://images.pexels.com/photos/36916378/pexels-photo-36916378.jpeg' },
];

// Owner has not provided an amenities list. Hidden until CMS-populated.
export const amenities = {
  enabled: false,
  eyebrow: 'In Residence',
  headingLine1: '',
  headingLine2: '',
  intro: '',
  items: [],
};

export const gallery = {
  enabled: true,
  eyebrow: 'The Portfolio',
  headingLine1: 'A closer',
  headingLine2: 'look inside.',
  // Neutral image-content categories. Actual on-property categories
  // (and the images themselves) are editable via CMS.
  categories: ['All', 'Interiors', 'Architecture', 'Details'],
  images: [
    { category: 'Details', src: 'https://images.unsplash.com/photo-1594873672629-61079318a5fd', alt: 'Placeholder image \u2014 editable via CMS', h: 5 },
    { category: 'Interiors', src: 'https://images.unsplash.com/photo-1653564906654-9f2484215e94', alt: 'Placeholder image \u2014 editable via CMS', h: 6 },
    { category: 'Architecture', src: 'https://images.pexels.com/photos/8092431/pexels-photo-8092431.jpeg', alt: 'Placeholder image \u2014 editable via CMS', h: 7 },
    { category: 'Interiors', src: 'https://images.pexels.com/photos/7749046/pexels-photo-7749046.jpeg', alt: 'Placeholder image \u2014 editable via CMS', h: 4 },
    { category: 'Details', src: 'https://images.unsplash.com/photo-1656214286228-08fdbf520d1e', alt: 'Placeholder image \u2014 editable via CMS', h: 5 },
    { category: 'Interiors', src: 'https://images.pexels.com/photos/18471540/pexels-photo-18471540.jpeg', alt: 'Placeholder image \u2014 editable via CMS', h: 5 },
    { category: 'Architecture', src: 'https://images.pexels.com/photos/33685861/pexels-photo-33685861.jpeg', alt: 'Placeholder image \u2014 editable via CMS', h: 6 },
    { category: 'Interiors', src: 'https://images.unsplash.com/photo-1570427224050-b080ad19e3c4', alt: 'Placeholder image \u2014 editable via CMS', h: 5 },
    { category: 'Details', src: 'https://images.pexels.com/photos/8910757/pexels-photo-8910757.jpeg', alt: 'Placeholder image \u2014 editable via CMS', h: 7 },
    { category: 'Architecture', src: 'https://images.pexels.com/photos/33685863/pexels-photo-33685863.jpeg', alt: 'Placeholder image \u2014 editable via CMS', h: 5 },
    { category: 'Interiors', src: 'https://images.pexels.com/photos/14547138/pexels-photo-14547138.jpeg', alt: 'Placeholder image \u2014 editable via CMS', h: 6 },
    { category: 'Interiors', src: 'https://images.pexels.com/photos/6903157/pexels-photo-6903157.jpeg', alt: 'Placeholder image \u2014 editable via CMS', h: 4 },
  ],
};

// Owner confirmed the site should communicate that a share of profits
// supports Gaushalas / NGOs (brief §19). Partner organisations, causes,
// impact statistics and the quotation itself are pending owner input.
export const givingBack = {
  enabled: true,
  eyebrow: 'Stay With Purpose',
  headingLine1: 'Every stay,',
  headingLine2: 'a small kindness.',
  intro:
    'A portion of profits is shared with Gaushalas, NGOs and charitable initiatives. Partner details editable via CMS.',
  quote: '', // Owner has not provided a quotation.
  attribution: '',
  partners: [
    { name: 'Partner Organisation 01', cause: '', description: 'Partner description editable via CMS.', image: 'https://images.pexels.com/photos/38422340/pexels-photo-38422340.jpeg', website: '' },
    { name: 'Partner Organisation 02', cause: '', description: 'Partner description editable via CMS.', image: 'https://images.pexels.com/photos/25020306/pexels-photo-25020306.jpeg', website: '' },
  ],
  cta: null, // No impact report has been provided by the owner.
};

// Owner has not provided an address, coordinates or nearby distances.
export const location = {
  enabled: false,
  eyebrow: 'The Setting',
  headingLine1: '',
  headingLine2: '',
  address: '',
  coordinates: null,
  intro: '',
  nearby: [],
  cta: null,
};

// Owner has not provided verified guest reviews. Hidden until CMS-populated.
export const reviews = {
  enabled: false,
  eyebrow: 'In Their Words',
  headingLine1: '',
  headingLine2: '',
  items: [],
};

// FAQ structure kept visible (per brief §22). All Q&A are clearly-marked
// editable placeholders until the owner supplies actual answers.
export const faqs = {
  enabled: true,
  eyebrow: 'Practical Notes',
  headingLine1: 'Answers,',
  headingLine2: 'before the questions.',
  items: [
    { question: 'Sample question 01 \u2014 editable via CMS', answer: 'Answer to be provided by the administrator through Sanity CMS.' },
    { question: 'Sample question 02 \u2014 editable via CMS', answer: 'Answer to be provided by the administrator through Sanity CMS.' },
    { question: 'Sample question 03 \u2014 editable via CMS', answer: 'Answer to be provided by the administrator through Sanity CMS.' },
    { question: 'Sample question 04 \u2014 editable via CMS', answer: 'Answer to be provided by the administrator through Sanity CMS.' },
  ],
};

// Owner has not provided contact particulars. Section shell remains for
// visual continuity; each field renders only when populated via CMS.
export const contact = {
  enabled: true,
  eyebrow: 'Reservations',
  headingLine1: 'Speak with',
  headingLine2: 'our concierge.',
  intro:
    'Contact particulars and response-time policy are editable via CMS.',
  phone: '',
  whatsapp: '',
  email: '',
  hours: '',
  address: '',
};

export const footer = {
  description:
    'A boutique collection of serviced residences. Full description editable via CMS.',
  columns: [
    {
      title: 'The Residences',
      links: [
        { label: 'Executive Collection', href: '#suites' },
        { label: 'Livoraa \u00d7 The Signature Suite', href: '#suites' },
      ],
    },
    {
      title: 'The House',
      links: [
        { label: 'The Philosophy', href: '#about' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Giving Back', href: '#giving-back' },
      ],
    },
    {
      title: 'Practical',
      links: [
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};
