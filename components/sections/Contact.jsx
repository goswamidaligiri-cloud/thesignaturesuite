'use client';

import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { contact } from '@/lib/content';

export default function Contact() {
  if (!contact.enabled) return null;
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Phase 2B: wire to Sanity-defined form endpoint or a form service.
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-stone2">
      <div className="container grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="hairline" />
            <span className="eyebrow">{contact.eyebrow}</span>
          </div>
          <h2 className="h-display text-5xl md:text-6xl lg:text-7xl text-ink">
            {contact.headingLine1} <br />
            <span className="italic text-champagne">{contact.headingLine2}</span>
          </h2>
          <p className="mt-8 text-muted2 text-base md:text-lg leading-relaxed max-w-md">{contact.intro}</p>

          <ul className="mt-12 space-y-6">
            <li className="flex items-start gap-4">
              <Phone className="w-4 h-4 mt-1.5 text-champagne" strokeWidth={1.5} />
              <div>
                <div className="eyebrow">Reservations</div>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="h-display text-2xl text-ink hover:text-champagne">{contact.phone}</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MessageCircle className="w-4 h-4 mt-1.5 text-champagne" strokeWidth={1.5} />
              <div>
                <div className="eyebrow">WhatsApp Concierge</div>
                <a href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener" className="h-display text-2xl text-ink hover:text-champagne">{contact.whatsapp}</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="w-4 h-4 mt-1.5 text-champagne" strokeWidth={1.5} />
              <div>
                <div className="eyebrow">Email</div>
                <a href={`mailto:${contact.email}`} className="h-display text-2xl text-ink hover:text-champagne">{contact.email}</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="w-4 h-4 mt-1.5 text-champagne" strokeWidth={1.5} />
              <div>
                <div className="eyebrow">Hours</div>
                <p className="text-ink">{contact.hours}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="w-4 h-4 mt-1.5 text-champagne" strokeWidth={1.5} />
              <div>
                <div className="eyebrow">Address</div>
                <p className="text-ink">{contact.address}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="md:col-span-6">
          <form id="book" onSubmit={onSubmit} className="bg-ivory p-8 md:p-12 border border-line">
            <div className="eyebrow mb-2">Enquiry Form</div>
            <h3 className="h-display text-3xl md:text-4xl text-ink mb-8">Reserve or enquire</h3>

            {sent ? (
              <div className="py-12 text-center">
                <div className="h-display italic text-champagne text-3xl mb-4">Thank you.</div>
                <p className="text-muted2 max-w-sm mx-auto">Our concierge will be in touch within the hour. In the meantime, a warm welcome.</p>
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
