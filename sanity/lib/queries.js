// GROQ queries — all sections are gated by `enabled == true`.
// Nothing here falls back to invented data. Missing docs return null.

export const HOME_QUERY = /* groq */ `{
  "siteSettings":  *[_type == "siteSettings"][0]{
    name, tagline, bookingUrl, whatsappUrl,
    socials{instagramPrimary, instagramSecondary, facebook, linkedin, youtube},
    defaultSeo
  },
  "navigation":    *[_type == "navigation"][0]{
    items[visible == true] | order(orderRank asc){label, href, orderRank},
    primaryCta{label, href}
  },
  "hero":          *[_type == "hero" && enabled == true][0]{
    badge, headingLine1, headingLine2, subtitle,
    primaryCta{label, href}, secondaryCta{label, href},
    poster, videoDesktopUrl, videoMobileUrl,
    overlayOpacity, heroHeight, textAlign
  },
  "about":         *[_type == "about" && enabled == true][0]{
    eyebrow, headingLine1, headingLine2, lead, body,
    stats[]{value, label}
  },
  "experience":    *[_type == "experience" && enabled == true][0]{
    eyebrow, headingLine1, headingLine2, intro,
    pillars[]{no, title, body}
  },
  "suitesMeta":    *[_type == "suitesMeta" && enabled == true][0]{
    eyebrow, headingLine1, headingLine2, intro,
    executiveLabel, executiveCount, premiumLabel, premiumCount
  },
  "suites":        *[_type == "suite" && enabled == true] | order(orderRank asc){
    _id, name, "slug": slug.current, collectionLabel, tagline, area, beds,
    priceFrom, heroImage, "heroImageAlt": heroImage.alt
  },
  "amenitiesMeta": *[_type == "amenitiesMeta" && enabled == true][0]{
    eyebrow, headingLine1, headingLine2, intro
  },
  "amenities":     *[_type == "amenity" && enabled == true] | order(orderRank asc){
    _id, name, description, icon, category, inclusion
  },
  "galleryMeta":   *[_type == "galleryMeta" && enabled == true][0]{
    eyebrow, headingLine1, headingLine2
  },
  "gallery":       *[_type == "galleryImage" && enabled == true] | order(orderRank asc){
    _id, title, caption, image, "imageAlt": image.alt,
    "category": category->name
  },
  "galleryCategories": *[_type == "galleryCategory" && enabled == true] | order(orderRank asc){
    _id, name
  },
  "givingBack":    *[_type == "givingBack" && enabled == true][0]{
    eyebrow, headingLine1, headingLine2, intro, quote, attribution, cta{label, href}
  },
  "givingBackPartners": *[_type == "givingBackPartner" && enabled == true] | order(orderRank asc){
    _id, name, cause, description, image, website
  },
  "location":      *[_type == "location" && enabled == true][0]{
    eyebrow, headingLine1, headingLine2, intro, address,
    latitude, longitude, googleMapsUrl, directionsUrl
  },
  "nearby":        *[_type == "nearbyPlace" && enabled == true] | order(orderRank asc){
    _id, name, description, address, distance, travelTime, mapUrl, website, phone,
    image, "categoryName": category->name, "categorySlug": category->slug.current
  },
  "reviewsMeta":   *[_type == "reviewsMeta" && enabled == true][0]{
    eyebrow, headingLine1, headingLine2
  },
  "reviews":       *[_type == "review" && enabled == true] | order(orderRank asc){
    _id, name, source, rating, body, date
  },
  "faqMeta":       *[_type == "faqMeta" && enabled == true][0]{
    eyebrow, headingLine1, headingLine2
  },
  "faqs":          *[_type == "faq" && enabled == true] | order(orderRank asc){
    _id, question, answer, category
  },
  "contact":       *[_type == "contact" && enabled == true][0]{
    eyebrow, headingLine1, headingLine2, intro,
    phonePrimary, phoneSecondary, phoneTertiary, phoneQuaternary,
    whatsapp, bookingPhone, emailPrimary, emailSecondary,
    hours, address
  },
  "footer":        *[_type == "footer"][0]{
    description, copyright,
    columns[]{title, links[visible != false] | order(orderRank asc){label, href}},
    legal[visible != false] | order(orderRank asc){label, href}
  },
  "idealFor":      *[_type == "idealFor" && enabled == true] | order(orderRank asc){
    _id, name, icon, description, image
  }
}`

export const HOME_TAGS = [
  'siteSettings','navigation','hero','about','experience','suitesMeta','suite',
  'amenitiesMeta','amenity','galleryMeta','galleryImage','galleryCategory',
  'givingBack','givingBackPartner','location','nearbyPlace','reviewsMeta','review',
  'faqMeta','faq','contact','footer','idealFor','home',
]
