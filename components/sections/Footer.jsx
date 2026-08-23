import {Instagram, Facebook, Linkedin, Youtube} from 'lucide-react';

export default function Footer({data, siteName = 'The Signature Suite', socials = {}}) {
  const year = new Date().getFullYear();
  const columns = Array.isArray(data?.columns) ? data.columns.filter(c => c && (c.title || (c.links && c.links.length))) : [];
  const legal = Array.isArray(data?.legal) ? data.legal.filter(l => l && l.label) : [];
  const copyright = data?.copyright?.trim() || `© ${year} ${siteName}. All rights reserved.`;

  return (
    <footer className="bg-ink text-ivory pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-ivory/15">
          <div className="md:col-span-5">
            <h3 className="h-display text-4xl md:text-5xl">{siteName}</h3>
            {data?.description && (
              <p className="text-ivory/60 mt-4 text-sm md:text-base leading-relaxed max-w-sm">{data.description}</p>
            )}
            <div className="mt-8 flex items-center gap-3">
              {socials.instagramPrimary && (
                <a href={socials.instagramPrimary} target="_blank" rel="noopener" aria-label="Instagram" className="w-10 h-10 border border-ivory/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors">
                  <Instagram className="w-4 h-4" strokeWidth={1.5} />
                </a>
              )}
              {socials.instagramSecondary && (
                <a href={socials.instagramSecondary} target="_blank" rel="noopener" aria-label="Instagram (secondary)" className="w-10 h-10 border border-ivory/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors">
                  <Instagram className="w-4 h-4" strokeWidth={1.5} />
                </a>
              )}
              {socials.facebook && (
                <a href={socials.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="w-10 h-10 border border-ivory/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors"><Facebook className="w-4 h-4" strokeWidth={1.5} /></a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="w-10 h-10 border border-ivory/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors"><Linkedin className="w-4 h-4" strokeWidth={1.5} /></a>
              )}
              {socials.youtube && (
                <a href={socials.youtube} target="_blank" rel="noopener" aria-label="YouTube" className="w-10 h-10 border border-ivory/20 flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors"><Youtube className="w-4 h-4" strokeWidth={1.5} /></a>
              )}
            </div>
          </div>

          {columns.map((col, idx) => (
            <div key={col.title || idx} className="md:col-span-2">
              {col.title && <div className="eyebrow text-ivory/70 mb-5">{col.title}</div>}
              {Array.isArray(col.links) && col.links.length > 0 && (
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label + l.href}><a href={l.href} className="text-ivory/80 hover:text-champagne transition-colors text-sm">{l.label}</a></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-widest-2 text-ivory/50">
          <span>{copyright}</span>
          {legal.length > 0 && (
            <div className="flex items-center gap-6">
              {legal.map((l) => <a key={l.label} href={l.href || '#'} className="hover:text-champagne">{l.label}</a>)}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
