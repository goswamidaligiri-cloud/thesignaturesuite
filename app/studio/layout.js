// Studio route — minimal layout so the Studio UI can occupy the viewport
// without inheriting the site's editorial typography wrapper.
export default function StudioLayout({children}) {
  return <div style={{minHeight: '100dvh', background: '#101112'}}>{children}</div>;
}
