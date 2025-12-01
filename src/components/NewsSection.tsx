import { ImageWithFallback } from './figma/ImageWithFallback';

export function NewsSection() {
  return (
    <section id="news" className="container mx-auto px-4 py-16">
      <div className="border-t-2 border-b-2 py-8" style={{ borderColor: '#61e38b' }}>
        <h2 className="text-center text-4xl mb-10 tracking-wider uppercase" style={{ fontFamily: 'monospace', color: '#61e38b' }}>
          Latest News
        </h2>
        
        <div className="rounded-xl overflow-hidden max-w-4xl mx-auto shadow-lg" style={{ backgroundColor: '#0a2a3a' }}>
          <div className="grid md:grid-cols-5 gap-0">
            {/* News Image */}
            <div className="md:col-span-2 aspect-video md:aspect-auto min-h-[250px] overflow-hidden">
              <ImageWithFallback 
                src="https://github.com/Sewers-N-Systems/sewers-n-systems.github.io/blob/main/assets/update%203.png?raw=true"
                alt="Update 1.0.2"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* News Content */}
            <div className="md:col-span-3 p-6">
              <h3 className="text-lg tracking-wide mb-1 uppercase" style={{ fontFamily: 'monospace', color: '#61e38b' }}>
                Update 1.0.2 Highlights - More to Come...
              </h3>
              <p className="text-xs mb-4" style={{ color: '#61e38b', opacity: 0.6 }}>12/1/2025</p>
              <p className="text-sm leading-relaxed" style={{ color: '#eee6d2' }}>
                This update brings classic construction blocks to Sewers N' Systems: stairs, slabs, walls, and fences for every core material. Now craft more realistic tunnel ledges, stepped accessways, half-height walkways and debris retaining barriers. Enjoy expanded design language and block mechanics as builds look consistent and snap cleanly into place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}