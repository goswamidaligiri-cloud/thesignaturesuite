'use client';

import {useState} from 'react';
import {Phone, Mail, MessageCircle, MapPin, Clock} from 'lucide-react';

export default function Contact({data}) {
  const [sent, setSent] = useState(false);
  if (!data) return null;

  const phones = [data.phonePrimary, data.phoneSecondary, data.phoneTertiary, data.phoneQuaternary].filter(Boolean);
  const hasAny = phones.length > 0 || data.whatsapp || data.emailPrimary || data.emailSecondary || data.hours || data.address;

  return (
    <section id="contact" className="py-28 md:py-40 bg-stone2">
      <div className="container grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-6">
          {data.eyebrow && (
            <div className="flex items-center gap-4 mb-6">
              <div className="hairline" />
              <span className="eyebrow">{data.eyebrow}</span>
            </div>
          )}
          {(data.headingLine1 || data.headingLine2) && (
            <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
              {data.headingLine1}
              {data.headingLine2 && (<><br /><span className="italic text-champagne">{data.headingLine2}</span></>)}
            </h2>
          )}
          {data.intro && (
            <p className="mt-8 text-muted2 text-base md:text-lg leading-relaxed max-w-md">{data.intro}</p>
          )}

          {hasAny && (
            <ul className="mt-12 space-y-6">
              {phones.length > 0 && (
                <li className="flex items-start gap-4">
                  <Phone className="w-4 h-4 mt-1.5 text-champagne" strokeWidth={1.5} />
                  <div>
                    <div className="eyebrow">Reservations</div>
                    {phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block h-display text-xl md:text-2xl text-ink hover:text-champagne">{p}</a>
                    ))}
                  </div>
                </li>
              )}
              {data.whatsapp && (
                <li className="flex items-start gap-4">
                  <MessageCircle className="w-4 h-4 mt-1.5 text-champagne" strokeWidth={1.5} />
                  <div>
                    <div className="eyebrow">WhatsApp</div>
                    <a href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener" className="h-display text-2xl text-ink hover:text-champagne">{data.whatsapp}</a>
                  </div>
                </li>
              )}
              {(data.emailPrimary || data.emailSecondary) && (
                <li className="flex items-start gap-4">
                  <Mail className="w-4 h-4 mt-1.5 text-champagne" strokeWidth={1.5} />
                  <div>
                    <div className="eyebrow">Email</div>
                    {data.emailPrimary && <a href={`mailto:${data.emailPrimary}`} className="block h-display text-lg md:text-xl text-ink hover:text-champagne">{data.emailPrimary}</a>}
                    {data.emailSecondary && <a href={`mailto:${data.emailSecondary}`} className="block h-display text-lg md:text-xl text-ink hover:text-champagne">{data.emailSecondary}</a>}
                  </div>
                </li>
              )}
              {data.hours && (
                <li className="flex items-start gap-4">
                  <Clock className="w-4 h-4 mt-1.5 text-champagne" strokeWidth={1.5} />
                  <div><div className="eyebrow">Hours</div><p className="text-ink">{data.hours}</p></div>
                </li>
              )}
              {data.address && (
                <li className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 mt-1.5 text-champagne" strokeWidth={1.5} />
                  <div><div className="eyebrow">Address</div><p className="text-ink whitespace-pre-line">{data.address}</p></div>
                </li>
              )}
            </ul>
          )}
        </div>

        <div className="md:col-span-6">
          <form id="book" onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-ivory p-8 md:p-12 border border-line">
            <div className="eyebrow mb-2">Enquiry Form</div>
            <h3 className="h-display text-3xl md:text-4xl text-ink mb-8">Reserve or enquire</h3>
            {sent ? (
              <div className="py-12 text-center">
                <div className="h-display italic text-champagne text-3xl mb-4">Thank you.</div>
                <p className="text-muted2 max-w-sm mx-auto">Your enquiry has been received.</p>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input required name="name" placeholder="Full name" className="bg-transparent border-b border-line py-3 focus:border-champagne outline-none placeholder:text-muted2" />
                  <input required type="email" name="email" placeholder="Email" className="bg-transparent border-b border-line py-3 focus:border-champagne outline-none placeholder:text-muted2" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <input name="phone" placeholder="Phone (optional)" className="bg-transparent border-b border-line py-3 focus:border-champagne outline-none placeholder:text-muted2" />
                  <input name="dates" placeholder="Preferred dates" className="bg-transparent border-b border-line py-3 focus:border-champagne outline-none placeholder:text-muted2" />
                </div>
                <textarea name="message" rows={4} placeholder="Anything the concierge should know" className="bg-transparent border-b border-line py-3 focus:border-champagne outline-none placeholder:text-muted2 resize-none" />
                <button type="submit" className="btn-gold mt-6 self-start">Send Enquiry</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
