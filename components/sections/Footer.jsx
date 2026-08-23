import { Instagram } from 'lucide-react';
import { site, footer } from '@/lib/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-ivory pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-ivory/15">
          <div className="md:col-span-5">
            <h3 className="h-display text-4xl md:text-5xl">{site.name}</h3>
            <p className="text-ivory/60 mt-4 text-sm md:text-base leading-relaxed max-w-sm">{footer.description}</p>
            <div className="mt-8 flex items-center gap-3">
              {site.socials.instagram && (
                <a href={site.socials.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="w-10 h-10 border border-ivory/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors">
                  <Instagram className="w-4 h-4" strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="eyebrow text-ivory/70 mb-5">{col.title}</div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-ivory/80 hover:text-champagne transition-colors text-sm">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-widest-2 text-ivory/50">
          <span>© {year} {site.name}. All rights reserved.</span>
          <div className="flex items-center gap-6">
            {footer.legal.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-champagne">{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
