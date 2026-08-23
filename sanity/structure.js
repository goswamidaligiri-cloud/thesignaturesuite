// ============================================================
//  STUDIO STRUCTURE
//  Organises the desk into the groups requested by the owner.
//  Singletons are represented as single documents (fixed IDs).
// ============================================================

import {
  Home, Sparkles, Bed, LayoutGrid, ImageIcon, Users, HelpCircle, Star, MapPin,
  Building2, HeartHandshake, Menu, Layers, Settings, Palette, FileText, Search,
} from 'lucide-react'

const singleton = (S, id, title, icon) =>
  S.listItem().title(title).icon(icon).child(
    S.editor().id(id).schemaType(id).documentId(id)
  )

const list = (S, type, title, icon) =>
  S.listItem().title(title).icon(icon).child(S.documentTypeList(type).title(title))

export const studioStructure = (S) =>
  S.list()
    .title('The Signature Suite')
    .items([
      S.listItem().title('Content').icon(Layers).child(
        S.list().title('Content').items([
          singleton(S, 'hero', 'Hero', Home),
          singleton(S, 'about', 'About', FileText),
          singleton(S, 'experience', 'Experience', Sparkles),
          singleton(S, 'suitesMeta', 'Suites — section heading', LayoutGrid),
          list(S, 'suite', 'Suites (residences)', Bed),
          list(S, 'suiteCategory', 'Suite categories', LayoutGrid),
          singleton(S, 'amenitiesMeta', 'Amenities — section heading', LayoutGrid),
          list(S, 'amenity', 'Amenities', Sparkles),
          singleton(S, 'galleryMeta', 'Gallery — section heading', ImageIcon),
          list(S, 'galleryImage', 'Gallery items', ImageIcon),
          list(S, 'galleryCategory', 'Gallery categories', LayoutGrid),
          list(S, 'idealFor', 'Ideal For', Users),
          singleton(S, 'reviewsMeta', 'Reviews — section heading', Star),
          list(S, 'review', 'Reviews', Star),
          singleton(S, 'faqMeta', 'FAQ — section heading', HelpCircle),
          list(S, 'faq', 'FAQs', HelpCircle),
        ])
      ),
      S.divider(),
      S.listItem().title('Location').icon(MapPin).child(
        S.list().title('Location').items([
          singleton(S, 'location', 'Location', MapPin),
          list(S, 'nearbyPlace', 'Nearby places', Building2),
          list(S, 'nearbyCategory', 'Nearby categories', LayoutGrid),
        ])
      ),
      S.listItem().title('Social impact').icon(HeartHandshake).child(
        S.list().title('Social impact').items([
          singleton(S, 'givingBack', 'Giving Back — section', HeartHandshake),
          list(S, 'givingBackPartner', 'Partners (NGO / Gaushala)', HeartHandshake),
        ])
      ),
      S.divider(),
      S.listItem().title('Website').icon(Menu).child(
        S.list().title('Website').items([
          singleton(S, 'navigation', 'Navigation', Menu),
          singleton(S, 'footer', 'Footer', Menu),
          singleton(S, 'contact', 'Contact', Menu),
          singleton(S, 'siteSettings', 'Site settings', Settings),
          singleton(S, 'theme', 'Theme', Palette),
        ])
      ),
      S.listItem().title('Policies').icon(FileText).child(
        S.list().title('Policies').items([
          list(S, 'policy', 'All policies', FileText),
        ])
      ),
      S.divider(),
      S.listItem().title('SEO').icon(Search).child(
        S.list().title('SEO').items([
          singleton(S, 'siteSettings', 'Global SEO (via Site settings)', Search),
        ])
      ),
    ])
