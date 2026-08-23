// On-demand revalidation webhook for Sanity content changes.
// Configure at sanity.io/manage → API → Webhooks with the same
// SANITY_REVALIDATE_SECRET set in server env.
import {revalidateTag} from 'next/cache';
import {parseBody} from 'next-sanity/webhook';

export async function POST(request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return new Response('Missing SANITY_REVALIDATE_SECRET on server', {status: 500});
  }

  let parsed;
  try {
    parsed = await parseBody(request, secret, true);
  } catch (err) {
    return new Response('Signature validation failed', {status: 401});
  }

  const {isValidSignature, body} = parsed || {};
  if (!isValidSignature) return new Response('Invalid signature', {status: 401});
  if (!body?._type) return new Response('Missing _type in payload', {status: 400});

  revalidateTag(body._type);
  revalidateTag('home');

  return Response.json({revalidated: true, type: body._type, at: Date.now()});
}
