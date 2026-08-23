'use client';

import {useState} from 'react';

// Booking-focused section. Confident CTA + factual contact rail.
// No poetic storytelling around the form.
export default function Contact({data}) {
  const [sent, setSent] = useState(false);
  if (!data) return null;

  const phones = [data.phonePrimary, data.phoneSecondary, data.phoneTertiary, data.phoneQuaternary].filter(Boolean);
  const emails = [data.emailPrimary, data.emailSecondary].filter(Boolean);

  return (
    <section id="contact" className="py-24 md:py-40 bg-ink text-ivory">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-end mb-16 md:mb-20">
          <div className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.28em] text-ivory/50 mb-6">Reservations</div>
            <h2 className="h-display text-4xl md:text-6xl leading-[1.05]">Book your stay.</h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            {data.intro && <p className="text-ivory/70 text-base leading-relaxed max-w-sm font-light">{data.intro}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          {/* Left: contact rail */}
          <div className="md:col-span-5 space-y-10">
            {phones.length > 0 && (
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-ivory/50 mb-3">Direct</div>
                <div className="space-y-1">
                  {phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block text-ivory text-lg md:text-xl font-light hover:text-champagne">{p}</a>
                  ))}
                </div>
              </div>
            )}
            {emails.length > 0 && (
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-ivory/50 mb-3">Email</div>
                <div className="space-y-1">
                  {emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block text-ivory text-base md:text-lg font-light hover:text-champagne">{e}</a>
                  ))}
                </div>
              </div>
            )}
            {data.address && (
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-ivory/50 mb-3">Address</div>
                <p className="text-ivory/80 whitespace-pre-line text-base leading-relaxed font-light">{data.address}</p>
              </div>
            )}
          </div>

          {/* Right: enquiry form */}
          <div className="md:col-span-7">
            <form id="book" onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="border border-ivory/15 p-8 md:p-12">
              {sent ? (
                <div className="py-16 text-center">
                  <div className="h-display text-3xl text-ivory mb-4">Thank you.</div>
                  <p className="text-ivory/60 max-w-sm mx-auto text-sm">Your enquiry has been received.</p>
                </div>
              ) : (
                <div className="grid gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <input required name="name" placeholder="Full name" className="bg-transparent border-b border-ivory/20 py-3 focus:border-champagne outline-none placeholder:text-ivory/40 text-ivory" />
                    <input required type="email" name="email" placeholder="Email" className="bg-transparent border-b border-ivory/20 py-3 focus:border-champagne outline-none placeholder:text-ivory/40 text-ivory" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <input name="phone" placeholder="Phone" className="bg-transparent border-b border-ivory/20 py-3 focus:border-champagne outline-none placeholder:text-ivory/40 text-ivory" />
                    <input name="dates" placeholder="Preferred dates" className="bg-transparent border-b border-ivory/20 py-3 focus:border-champagne outline-none placeholder:text-ivory/40 text-ivory" />
                  </div>
                  <textarea name="message" rows={3} placeholder="Anything the concierge should know" className="bg-transparent border-b border-ivory/20 py-3 focus:border-champagne outline-none placeholder:text-ivory/40 text-ivory resize-none" />
                  <button type="submit" className="mt-6 self-start inline-flex items-center px-8 py-3.5 text-[11px] uppercase tracking-[0.28em] font-medium bg-ivory text-ink hover:bg-champagne transition-colors duration-500">Send Enquiry</button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
