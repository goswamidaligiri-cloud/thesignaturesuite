import {Instagram, Facebook, Linkedin, Youtube} from 'lucide-react';

// Restrained footer. No serif blocks. No repeated eyebrows.
export default function Footer({data, siteName = 'The Signature Suite', socials = {}}) {
  const year = new Date().getFullYear();
  const columns = Array.isArray(data?.columns) ? data.columns.filter(c => c && (c.title || (c.links && c.links.length))) : [];
  const legal = Array.isArray(data?.legal) ? data.legal.filter(l => l && l.label) : [];
  const copyright = data?.copyright?.trim() || `© ${year} ${siteName}`;

  return (
    <footer className="bg-ivory text-ink border-t border-line pt-16 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10 pb-14">
          <div className="md:col-span-5">
            <div className="text-[13px] uppercase tracking-[0.22em]">{siteName}</div>
            {data?.description && (
              <p className="text-ink/60 mt-4 text-sm leading-relaxed max-w-sm font-light">{data.description}</p>
            )}
            <div className="mt-8 flex items-center gap-2">
              {socials.instagramPrimary && (
                <a href={socials.instagramPrimary} target="_blank" rel="noopener" aria-label="Instagram" className="w-9 h-9 border border-line flex items-center justify-center hover:border-ink transition-colors"><Instagram className="w-3.5 h-3.5" strokeWidth={1.5} /></a>
              )}
              {socials.instagramSecondary && (
                <a href={socials.instagramSecondary} target="_blank" rel="noopener" aria-label="Instagram (secondary)" className="w-9 h-9 border border-line flex items-center justify-center hover:border-ink transition-colors"><Instagram className="w-3.5 h-3.5" strokeWidth={1.5} /></a>
              )}
              {socials.facebook && <a href={socials.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="w-9 h-9 border border-line flex items-center justify-center hover:border-ink transition-colors"><Facebook className="w-3.5 h-3.5" strokeWidth={1.5} /></a>}
              {socials.linkedin && <a href={socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="w-9 h-9 border border-line flex items-center justify-center hover:border-ink transition-colors"><Linkedin className="w-3.5 h-3.5" strokeWidth={1.5} /></a>}
              {socials.youtube && <a href={socials.youtube} target="_blank" rel="noopener" aria-label="YouTube" className="w-9 h-9 border border-line flex items-center justify-center hover:border-ink transition-colors"><Youtube className="w-3.5 h-3.5" strokeWidth={1.5} /></a>}
            </div>
          </div>

          {columns.map((col, idx) => (
            <div key={col.title || idx} className="md:col-span-2">
              {col.title && <div className="text-[10px] uppercase tracking-[0.28em] text-muted2 mb-4">{col.title}</div>}
              {Array.isArray(col.links) && col.links.length > 0 && (
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label + l.href}><a href={l.href} className="text-ink/80 hover:text-ink transition-colors text-sm font-light">{l.label}</a></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] uppercase tracking-[0.24em] text-muted2">
          <span>{copyright}</span>
          {legal.length > 0 && (
            <div className="flex items-center gap-6">
              {legal.map((l) => <a key={l.label} href={l.href || '#'} className="hover:text-ink">{l.label}</a>)}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
