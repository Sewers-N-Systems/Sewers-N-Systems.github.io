import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Full Width Hero Image with Gradient Overlay */}
      <div className="relative min-h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://github.com/Sewers-N-Systems/sewers-n-systems.github.io/blob/main/assets/Banner.png?raw=true"
            alt="Sewers N' Systems Banner"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, #123c52 100%)' }}></div>

        {/* Content Overlaid on Image */}
        <div className="container mx-auto px-4 relative pt-12 pb-24">
          <div className="max-w-md">
            {/* Hero Image Circle */}
            <div className="relative mb-8">
              <div className="w-44 h-44 rounded-full p-1 shadow-2xl bg-white">
                <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden p-4" style={{ background: 'linear-gradient(135deg, #6bc4e8 0%, #4a9fc7 100%)' }}>
                  <ImageWithFallback 
                    src="https://github.com/Sewers-N-Systems/sewers-n-systems.github.io/blob/main/assets/logo.png?raw=true"
                    alt="Sewers N' Systems Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-2.5 rounded-full tracking-wider transition-colors shadow-lg uppercase text-sm">
                Watch Trailer
              </button>
              <button className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-2.5 rounded-full tracking-wider transition-colors shadow-lg uppercase text-sm">
                Get Now
              </button>
            </div>

            {/* Platform Badges */}
            <div className="flex items-center gap-6">
              <a href="https://www.curseforge.com/minecraft/mc-mods/sewers-n-systems" target="_blank" rel="noopener noreferrer">
                <ImageWithFallback 
                  src="https://raw.githubusercontent.com/Sewers-N-Systems/sewers-n-systems.github.io/main/assets/curseforge.png"
                  alt="CurseForge"
                  className="h-8 object-contain"
                />
              </a>
              <a href="https://modrinth.com/mod/sewers-n-systems" target="_blank" rel="noopener noreferrer">
                <ImageWithFallback 
                  src="https://github.com/Sewers-N-Systems/sewers-n-systems.github.io/blob/main/assets/modrinth.png?raw=true"
                  alt="Modrinth"
                  className="h-8 object-contain"
                />
              </a>
            </div>
            <p className="text-sm mt-3" style={{ color: '#61e38b' }}>Available Now</p>
          </div>
        </div>
      </div>
    </section>
  );
}