// Server-only Sanity read client.
// The token, if present, is used only server-side. Never exposed to
// the browser bundle. The dataset can also be read publicly if it
// permits so; token simply enables higher rate limits & drafts.
import 'server-only'
import {createClient} from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'h0vssa9p'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
  token: process.env.SANITY_API_READ_TOKEN, // optional; server-only
})

export async function sanityFetch({query, params = {}, tags = []}) {
  return client.fetch(query, params, {next: {revalidate: 60, tags}})
}
