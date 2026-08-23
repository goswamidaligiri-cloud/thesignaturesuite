# THE SIGNATURE SUITE — SANITY CMS

This site is powered by **Next.js 15 + Sanity CMS + Vercel + GitHub**. The public website reads from Sanity via server-side GROQ queries with ISR + on-demand revalidation. Sanity Studio is embedded at **`/studio`** for editors.

---

## 1. Local development

```bash
yarn install
cp .env.example .env.local   # fill in values (see below)
yarn dev
```

- Public site: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

### Environment variables (`.env.local`)

| Variable | Where | Server-only? |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | sanity.io/manage → Project overview | Public ✓ |
| `NEXT_PUBLIC_SANITY_DATASET` | Project → Datasets (usually `production`) | Public ✓ |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Any date, e.g. `2025-01-01` | Public ✓ |
| `SANITY_API_READ_TOKEN` | Project → API → Tokens → **Viewer** | **Server-only** |
| `SANITY_REVALIDATE_SECRET` | Any 32+ char random string | **Server-only** |
| `SANITY_API_WRITE_TOKEN` | Only if you need programmatic seeding | **Server-only** |
| `NEXT_PUBLIC_SITE_URL` | Deployed URL used by absolute links & OG | Public ✓ |

**Never** prefix any read/write token with `NEXT_PUBLIC_`. Never commit `.env.local`.

---

## 2. Deploy to Vercel + GitHub

1. Push the repo to GitHub.
2. On [vercel.com/new](https://vercel.com/new), import the repo.
3. Add the same env variables as above under **Settings → Environment Variables** (leave `NEXT_PUBLIC_*` unchecked "Sensitive"; check it for secrets).
4. Deploy. The Studio will live at `https://<your-domain>/studio`.

### Optional: enable on-demand revalidation

Once deployed, in **sanity.io/manage → API → Webhooks → Create webhook**:

- URL: `https://<your-domain>/api/revalidate`
- Trigger on: **Create / Update / Delete**
- Filter (GROQ): `_type in ["siteSettings","navigation","hero","about","experience","suitesMeta","suite","amenity","amenitiesMeta","galleryImage","galleryMeta","galleryCategory","givingBack","givingBackPartner","location","nearbyPlace","nearbyCategory","review","reviewsMeta","faq","faqMeta","contact","footer","idealFor","policy","theme"]`
- Projection: `{_type}`
- Secret: same value you set for `SANITY_REVALIDATE_SECRET`

Content edits will propagate to the live site typically within seconds.

---

## 3. Seeding the confirmed owner content

The dataset ships empty. `seed/seed.ndjson` contains the **currently confirmed factual content** (brand name, 7 residences, giving-back intent, location, contact particulars, in-building & nearby anchors, ideal-for categories). No invented content of any kind.

To import it once (from your local machine):

```bash
npx sanity login           # opens your browser; log in as an editor on project h0vssa9p
npx sanity dataset import seed/seed.ndjson production
```

(You need write access on the project for this. The read-only Viewer token used by the website cannot import.)

Afterwards, the site will show:
- Full hero (brand-voice placeholder — owner replaces via `/studio`)
- About with **07 Residences · 02 Collections** confirmed stats
- Suites section listing all 7 residences (**Meadows / Ivy / Cove / Executive Suite 04 / Atelier / Noir / Sienna**)
- Giving Back concept card (partners hidden until owner adds them)
- Location card with the official Avinash One address
- Contact with the four owner-provided phone numbers, two emails and two Instagram handles
- Footer

All other sections (amenities, gallery, reviews, FAQ, experience pillars, giving-back partners, nearby distances…) remain **hidden until the owner publishes content in Studio**. That is enforced by GROQ (`enabled == true`) and by empty-guard checks in every component.

---

## 4. What is CMS-editable (i.e. everything visible)

Inside Studio you'll see six top-level groups:

- **Content** — Hero, About, Experience, Suites (heading + individual residences), Amenities, Gallery, Ideal For, Reviews, FAQ
- **Location** — Location singleton, Nearby places, Nearby categories
- **Social impact** — Giving Back section, Partners (NGO / Gaushala)
- **Website** — Navigation, Footer, Contact, Site settings, Theme
- **Policies** — All policy documents (check-in, cancellation, house rules, refund, etc.)
- **SEO** — Global SEO via Site settings

Each schema has an `enabled` toggle and (where applicable) an `orderRank`. **If a document is unpublished or `enabled` is `false`, the site does not render that section at all.**

---

## 5. Content rules (owner-authored)

- Do **not** import Livoraa Stays content. The only Livoraa-related wording exposed to guests is the Premium Collection name **"Livoraa × Signature"**.
- Do **not** invent pricing, policies, distances, amenities, hours, or reviews.
- Fill fields only when you have real information. Leave everything else blank; the site will simply omit those sections.

---

## 6. Architecture summary

```
Editor  →  /studio (embedded Next.js route)
            ↓ writes to
         Sanity Content Lake  →  webhook  →  /api/revalidate  →  Next.js ISR cache invalidated
            ↑ reads from
         Server components (GROQ over HTTPS, useCdn: true, revalidate: 60)
            ↓ renders
         Public site (Vercel free tier)
```

No custom backend. No MongoDB. No Express/FastAPI. No Cloudinary. Media lives in Sanity's asset pipeline. Running cost target: **₹0/month** within free tiers.
