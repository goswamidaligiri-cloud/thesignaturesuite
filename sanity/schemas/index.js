// ============================================================
//  SANITY SCHEMA REGISTRY
//  Groups: content, location, socialImpact, website, policies, seo
//  Every document has an `enabled` boolean. Frontend GROQ
//  filters by enabled == true. Empty/unpublished sections are
//  hidden from the public site.
// ============================================================

import {defineType, defineField, defineArrayMember} from 'sanity'

// ------------------------- helpers ---------------------------
const str = (name, title, opts = {}) => defineField({name, title, type: 'string', ...opts})
const txt = (name, title, opts = {}) => defineField({name, title, type: 'text', rows: 3, ...opts})
const num = (name, title, opts = {}) => defineField({name, title, type: 'number', ...opts})
const bool = (name, title, initialValue = false) => defineField({name, title, type: 'boolean', initialValue})
const img = (name = 'image', title = 'Image') => defineField({
  name, title, type: 'image',
  options: {hotspot: true},
  fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
})
const url = (name, title, opts = {}) => defineField({name, title, type: 'url', validation: (Rule) => Rule.uri({allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel']}), ...opts})
const slug = (name = 'slug', source = 'name') => defineField({name, type: 'slug', options: {source, maxLength: 96}})
const ordered = () => num('orderRank', 'Display order', {initialValue: 0})
const enabled = () => bool('enabled', 'Visible on site', false)

// ------------------------- objects ---------------------------
const cta = defineType({
  name: 'cta', title: 'Call to action', type: 'object',
  fields: [str('label', 'Label'), str('href', 'Link (URL or #anchor)')],
})

const seo = defineType({
  name: 'seo', title: 'SEO', type: 'object', options: {collapsible: true, collapsed: true},
  fields: [
    str('metaTitle', 'Meta title'),
    txt('metaDescription', 'Meta description', {rows: 2}),
    str('canonical', 'Canonical URL'),
    str('ogTitle', 'OG title'),
    txt('ogDescription', 'OG description', {rows: 2}),
    img('ogImage', 'OG image'),
    str('robots', 'Robots directive'),
  ],
})

const navItem = defineType({
  name: 'navItem', title: 'Menu item', type: 'object',
  fields: [str('label', 'Label'), str('href', 'Link'), num('orderRank', 'Order'), bool('visible', 'Visible', true)],
})

const statItem = defineType({
  name: 'statItem', title: 'Statistic', type: 'object',
  fields: [str('value', 'Value'), str('label', 'Label')],
})

const experiencePillar = defineType({
  name: 'experiencePillar', title: 'Pillar', type: 'object',
  fields: [str('no', 'Number (e.g. 01)'), str('title', 'Title'), txt('body', 'Body')],
})

const footerColumn = defineType({
  name: 'footerColumn', title: 'Footer column', type: 'object',
  fields: [
    str('title', 'Column title'),
    defineField({name: 'links', title: 'Links', type: 'array', of: [defineArrayMember({type: 'navItem'})]}),
  ],
})

// ------------------------- singletons ------------------------
const siteSettings = defineType({
  name: 'siteSettings', title: 'Site settings', type: 'document',
  groups: [{name: 'general', title: 'General'}, {name: 'seo', title: 'SEO'}],
  fields: [
    str('name', 'Site name', {group: 'general'}),
    str('tagline', 'Tagline', {group: 'general'}),
    str('bookingUrl', 'Book Now URL', {group: 'general'}),
    str('whatsappUrl', 'WhatsApp URL', {group: 'general'}),
    defineField({name: 'socials', title: 'Social handles', type: 'object', group: 'general', fields: [
      str('instagramPrimary', 'Instagram (primary handle URL)'),
      str('instagramSecondary', 'Instagram (secondary handle URL)'),
      str('facebook', 'Facebook'),
      str('linkedin', 'LinkedIn'),
      str('youtube', 'YouTube'),
    ]}),
    defineField({name: 'defaultSeo', title: 'Default SEO', type: 'seo', group: 'seo'}),
  ],
})

const theme = defineType({
  name: 'theme', title: 'Theme', type: 'document',
  fields: [
    enabled(),
    str('accent', 'Accent colour hex', {initialValue: '#C6A66A'}),
    str('background', 'Background hex', {initialValue: '#FAF8F5'}),
    str('ink', 'Ink hex', {initialValue: '#171717'}),
  ],
})

const navigation = defineType({
  name: 'navigation', title: 'Navigation', type: 'document',
  fields: [
    defineField({name: 'items', title: 'Menu items', type: 'array', of: [defineArrayMember({type: 'navItem'})]}),
    defineField({name: 'primaryCta', title: 'Primary CTA', type: 'cta'}),
  ],
})

const hero = defineType({
  name: 'hero', title: 'Hero', type: 'document',
  groups: [{name: 'copy', title: 'Copy'}, {name: 'media', title: 'Media'}, {name: 'appearance', title: 'Appearance'}],
  fields: [
    enabled(),
    str('badge', 'Badge / eyebrow', {group: 'copy'}),
    str('headingLine1', 'Heading line 1', {group: 'copy'}),
    str('headingLine2', 'Heading line 2 (italic accent)', {group: 'copy'}),
    txt('subtitle', 'Subtitle', {group: 'copy'}),
    defineField({name: 'primaryCta', title: 'Primary CTA', type: 'cta', group: 'copy'}),
    defineField({name: 'secondaryCta', title: 'Secondary CTA', type: 'cta', group: 'copy'}),
    defineField({
      name: 'poster', title: 'Poster image (fallback)', type: 'image', options: {hotspot: true}, group: 'media',
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
    }),
    str('videoDesktopUrl', 'Desktop video URL (MP4)', {group: 'media'}),
    str('videoMobileUrl', 'Mobile video URL (MP4)', {group: 'media'}),
    num('overlayOpacity', 'Overlay opacity (0–1)', {initialValue: 0.35, group: 'appearance'}),
    num('heroHeight', 'Hero height (svh)', {initialValue: 100, group: 'appearance'}),
    str('textAlign', 'Text alignment (left | center)', {initialValue: 'left', group: 'appearance'}),
  ],
})

const about = defineType({
  name: 'about', title: 'About', type: 'document',
  fields: [
    enabled(),
    str('eyebrow', 'Eyebrow'),
    str('headingLine1', 'Heading line 1'),
    str('headingLine2', 'Heading line 2 (italic accent)'),
    txt('lead', 'Lead paragraph', {rows: 4}),
    txt('body', 'Body paragraph', {rows: 3}),
    defineField({name: 'stats', title: 'Statistics', type: 'array', of: [defineArrayMember({type: 'statItem'})]}),
  ],
})

const experience = defineType({
  name: 'experience', title: 'The Signature Experience', type: 'document',
  fields: [
    enabled(),
    str('eyebrow', 'Eyebrow'),
    str('headingLine1', 'Heading line 1'),
    str('headingLine2', 'Heading line 2'),
    txt('intro', 'Intro'),
    defineField({name: 'pillars', title: 'Pillars', type: 'array', of: [defineArrayMember({type: 'experiencePillar'})]}),
  ],
})

const suitesMeta = defineType({
  name: 'suitesMeta', title: 'Suites section — heading & meta', type: 'document',
  fields: [
    enabled(),
    str('eyebrow', 'Eyebrow'),
    str('headingLine1', 'Heading line 1'),
    str('headingLine2', 'Heading line 2'),
    txt('intro', 'Intro'),
    str('executiveLabel', 'Executive Collection label', {initialValue: 'I. Executive Collection'}),
    str('executiveCount', 'Executive count text', {initialValue: '04 Suites'}),
    str('premiumLabel', 'Premium Collection label', {initialValue: 'II. Livoraa × The Signature Suite'}),
    str('premiumCount', 'Premium count text', {initialValue: '03 Residences'}),
  ],
})

const amenitiesMeta = defineType({
  name: 'amenitiesMeta', title: 'Amenities section — heading', type: 'document',
  fields: [enabled(), str('eyebrow', 'Eyebrow'), str('headingLine1', 'Heading line 1'), str('headingLine2', 'Heading line 2'), txt('intro', 'Intro')],
})

const galleryMeta = defineType({
  name: 'galleryMeta', title: 'Gallery section — heading', type: 'document',
  fields: [enabled(), str('eyebrow', 'Eyebrow'), str('headingLine1', 'Heading line 1'), str('headingLine2', 'Heading line 2')],
})

const reviewsMeta = defineType({
  name: 'reviewsMeta', title: 'Reviews section — heading', type: 'document',
  fields: [enabled(), str('eyebrow', 'Eyebrow'), str('headingLine1', 'Heading line 1'), str('headingLine2', 'Heading line 2')],
})

const faqMeta = defineType({
  name: 'faqMeta', title: 'FAQ section — heading', type: 'document',
  fields: [enabled(), str('eyebrow', 'Eyebrow'), str('headingLine1', 'Heading line 1'), str('headingLine2', 'Heading line 2')],
})

const givingBack = defineType({
  name: 'givingBack', title: 'Giving Back — section', type: 'document',
  fields: [
    enabled(),
    str('eyebrow', 'Eyebrow'),
    str('headingLine1', 'Heading line 1'),
    str('headingLine2', 'Heading line 2'),
    txt('intro', 'Intro'),
    txt('quote', 'Quotation', {rows: 3}),
    str('attribution', 'Quote attribution'),
    defineField({name: 'cta', title: 'CTA', type: 'cta'}),
  ],
})

const location = defineType({
  name: 'location', title: 'Location — section', type: 'document',
  fields: [
    enabled(),
    str('eyebrow', 'Eyebrow'),
    str('headingLine1', 'Heading line 1'),
    str('headingLine2', 'Heading line 2'),
    txt('intro', 'Intro'),
    txt('address', 'Full address', {rows: 3}),
    num('latitude', 'Latitude'),
    num('longitude', 'Longitude'),
    str('googleMapsUrl', 'Google Maps URL'),
    str('directionsUrl', 'Directions URL'),
  ],
})

const contact = defineType({
  name: 'contact', title: 'Contact — section', type: 'document',
  fields: [
    enabled(),
    str('eyebrow', 'Eyebrow'),
    str('headingLine1', 'Heading line 1'),
    str('headingLine2', 'Heading line 2'),
    txt('intro', 'Intro'),
    str('phonePrimary', 'Primary phone'),
    str('phoneSecondary', 'Secondary phone'),
    str('phoneTertiary', 'Additional phone 1'),
    str('phoneQuaternary', 'Additional phone 2'),
    str('whatsapp', 'WhatsApp number'),
    str('bookingPhone', 'Booking phone'),
    str('emailPrimary', 'Primary email'),
    str('emailSecondary', 'Secondary email'),
    str('hours', 'Business hours'),
    txt('address', 'Address', {rows: 3}),
  ],
})

const footer = defineType({
  name: 'footer', title: 'Footer', type: 'document',
  fields: [
    txt('description', 'Description'),
    defineField({name: 'columns', title: 'Columns', type: 'array', of: [defineArrayMember({type: 'footerColumn'})]}),
    defineField({name: 'legal', title: 'Legal links', type: 'array', of: [defineArrayMember({type: 'navItem'})]}),
    str('copyright', 'Copyright line (leave blank for auto © YEAR SITE NAME)'),
  ],
})

// ------------------------ collections ------------------------
const suiteCategory = defineType({
  name: 'suiteCategory', title: 'Suite category', type: 'document',
  fields: [enabled(), str('name', 'Name'), slug('slug', 'name'), txt('description', 'Description'), ordered()],
})

const suite = defineType({
  name: 'suite', title: 'Suite / Residence', type: 'document',
  groups: [
    {name: 'basics', title: 'Basics'},
    {name: 'details', title: 'Specifications'},
    {name: 'media', title: 'Media'},
    {name: 'pricing', title: 'Pricing'},
    {name: 'policies', title: 'Policies'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    enabled(),
    bool('featured', 'Featured', false),
    str('name', 'Name', {group: 'basics'}),
    slug('slug', 'name'),
    str('collectionLabel', 'Collection (label as shown on card)', {group: 'basics'}),
    defineField({name: 'category', title: 'Suite category', type: 'reference', to: [{type: 'suiteCategory'}], group: 'basics'}),
    str('tagline', 'Short tagline / one-liner', {group: 'basics'}),
    txt('shortDescription', 'Short description', {rows: 3, group: 'basics'}),
    txt('fullDescription', 'Full description', {rows: 6, group: 'basics'}),
    ordered(),

    str('occupancy', 'Occupancy', {group: 'details'}),
    str('beds', 'Bed configuration', {group: 'details'}),
    str('bathrooms', 'Bathroom information', {group: 'details'}),
    str('area', 'Area', {group: 'details'}),
    str('floor', 'Floor', {group: 'details'}),
    defineField({name: 'amenities', title: 'Amenities', type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'amenity'}]})], group: 'details'}),

    defineField({name: 'heroImage', title: 'Hero image', type: 'image', options: {hotspot: true}, fields: [{name: 'alt', type: 'string', title: 'Alt text'}], group: 'media'}),
    defineField({name: 'gallery', title: 'Gallery', type: 'array', of: [defineArrayMember({type: 'image', options: {hotspot: true}, fields: [{name: 'alt', type: 'string', title: 'Alt text'}]})], group: 'media'}),
    str('videoUrl', 'Video URL', {group: 'media'}),

    num('priceFrom', 'Nightly price (INR)', {group: 'pricing'}),
    num('priceWeekend', 'Weekend price (INR)', {group: 'pricing'}),
    num('priceMonthly', 'Monthly price (INR)', {group: 'pricing'}),
    str('bookingUrl', 'Booking URL', {group: 'pricing'}),
    str('whatsappUrl', 'WhatsApp URL', {group: 'pricing'}),

    str('checkIn', 'Check-in', {group: 'policies'}),
    str('checkOut', 'Check-out', {group: 'policies'}),
    txt('cancellationPolicy', 'Cancellation policy', {rows: 3, group: 'policies'}),
    txt('houseRules', 'House rules', {rows: 3, group: 'policies'}),

    defineField({name: 'seo', title: 'SEO', type: 'seo', group: 'seo'}),
  ],
})

const amenity = defineType({
  name: 'amenity', title: 'Amenity', type: 'document',
  fields: [
    enabled(),
    bool('featured', 'Featured', false),
    str('name', 'Name'),
    str('description', 'Description'),
    str('icon', 'Lucide icon name (e.g. Wifi, ChefHat, BellRing)'),
    img('image', 'Image (optional)'),
    str('category', 'Category'),
    str('inclusion', 'Included / Paid ("included" or "paid")'),
    ordered(),
  ],
})

const galleryCategory = defineType({
  name: 'galleryCategory', title: 'Gallery category', type: 'document',
  fields: [enabled(), str('name', 'Name'), slug('slug', 'name'), ordered()],
})

const galleryImage = defineType({
  name: 'galleryImage', title: 'Gallery item', type: 'document',
  fields: [
    enabled(),
    bool('featured', 'Featured', false),
    str('title', 'Title'),
    txt('caption', 'Caption', {rows: 2}),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}, fields: [{name: 'alt', type: 'string', title: 'Alt text'}]}),
    str('videoUrl', 'Video URL (optional)'),
    defineField({name: 'category', title: 'Category', type: 'reference', to: [{type: 'galleryCategory'}]}),
    ordered(),
  ],
})

const idealFor = defineType({
  name: 'idealFor', title: 'Ideal For — audience', type: 'document',
  fields: [enabled(), str('name', 'Name'), str('icon', 'Icon (Lucide)'), txt('description', 'Description'), img('image', 'Image'), ordered()],
})

const review = defineType({
  name: 'review', title: 'Guest review', type: 'document',
  fields: [
    enabled(),
    bool('featured', 'Featured', false),
    str('name', 'Guest name'),
    str('source', 'Source (e.g. Airbnb, Google, Private guest)'),
    num('rating', 'Rating (1–5)', {initialValue: 5, validation: (R) => R.min(1).max(5)}),
    txt('body', 'Review body', {rows: 5}),
    defineField({name: 'date', title: 'Date', type: 'date'}),
    img('photo', 'Guest photo (optional)'),
    ordered(),
  ],
})

const faq = defineType({
  name: 'faq', title: 'FAQ', type: 'document',
  fields: [enabled(), str('question', 'Question'), txt('answer', 'Answer', {rows: 4}), str('category', 'Category'), ordered()],
})

const nearbyCategory = defineType({
  name: 'nearbyCategory', title: 'Nearby / place category', type: 'document',
  fields: [enabled(), str('name', 'Name'), slug('slug', 'name'), ordered()],
})

const nearbyPlace = defineType({
  name: 'nearbyPlace', title: 'Nearby place', type: 'document',
  fields: [
    enabled(),
    bool('featured', 'Featured', false),
    str('name', 'Name'),
    defineField({name: 'category', title: 'Category', type: 'reference', to: [{type: 'nearbyCategory'}]}),
    txt('description', 'Description'),
    str('address', 'Address'),
    str('distance', 'Distance (e.g. 200 m, 2.4 km)'),
    str('travelTime', 'Travel time (e.g. 3 min walk)'),
    str('mapUrl', 'Google Maps URL'),
    str('website', 'Website'),
    str('phone', 'Phone'),
    img('image', 'Image'),
    ordered(),
  ],
})

const givingBackPartner = defineType({
  name: 'givingBackPartner', title: 'Giving Back — Partner', type: 'document',
  fields: [
    enabled(),
    str('name', 'Partner name'),
    str('cause', 'Cause'),
    txt('description', 'Description', {rows: 4}),
    img('image', 'Image'),
    img('logo', 'Logo'),
    str('website', 'Website'),
    ordered(),
  ],
})

const policy = defineType({
  name: 'policy', title: 'Policy', type: 'document',
  fields: [
    enabled(),
    str('title', 'Title'),
    str('kind', 'Kind (check-in, check-out, cancellation, refund, payment, house-rules, other)'),
    txt('body', 'Body', {rows: 6}),
    ordered(),
  ],
})

// -------------------- registry -------------------------------
export const schemaTypes = [
  // objects
  cta, seo, navItem, statItem, experiencePillar, footerColumn,
  // singletons
  siteSettings, theme, navigation, hero, about, experience, suitesMeta,
  amenitiesMeta, galleryMeta, reviewsMeta, faqMeta, givingBack, location, contact, footer,
  // collections
  suiteCategory, suite, amenity, galleryCategory, galleryImage, idealFor,
  review, faq, nearbyCategory, nearbyPlace, givingBackPartner, policy,
]
