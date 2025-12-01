import { ImageWithFallback } from './figma/ImageWithFallback';

export function Footer() {
  return (
    <footer className="bg-black/60 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          {/* Logo/Branding */}
          <div className="flex items-center gap-4">
            <ImageWithFallback 
              src="https://github.com/Sewers-N-Systems/sewers-n-systems.github.io/blob/main/assets/backflow_dynamics.png?raw=true"
              alt="Backflow Dynamics Logo"
              className="w-16 h-16 object-contain"
            />
            <div className="text-sm" style={{ color: '#eee6d2' }}>Backflow Dynamics</div>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm uppercase tracking-wide">
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#eee6d2' }}>Mods</a>
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#eee6d2' }}>About Us</a>
            <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: '#eee6d2' }}>Contact</a>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-6 border-t" style={{ borderColor: 'rgba(238, 230, 210, 0.2)' }}>
          <p className="text-xs mb-2 uppercase tracking-wide" style={{ color: '#eee6d2' }}>Privacy Policy | Terms and Conditions</p>
          <p className="text-xs leading-relaxed" style={{ color: '#eee6d2', opacity: 0.7 }}>
            © 2025-2026 CreateModFan154. Sewers N' Systems and the Backflow Dynamics / Sewers N' Systems logos are copyrighted by CreateModFan154. All rights reserved. All other trademarks and copyrights are the property of their respective owners. Portions of the site's design were inspired by{' '}
            <a href="https://jurassicworldevolution.com/3" className="hover:underline" style={{ color: '#61e38b' }}>
              https://jurassicworldevolution.com/3
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}