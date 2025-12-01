import { ImageWithFallback } from './figma/ImageWithFallback';
import { Youtube, Twitter, Github, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/95 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <ImageWithFallback 
            src="https://github.com/Sewers-N-Systems/sewers-n-systems.github.io/blob/main/assets/logo.png?raw=true"
            alt="Sewers N' Systems Logo"
            className="w-10 h-10 object-contain"
          />
          <ImageWithFallback 
            src="https://github.com/Sewers-N-Systems/sewers-n-systems.github.io/blob/main/assets/Create%20Sewers%20N%E2%80%99%20Systems.png?raw=true"
            alt="Create: Sewers N' Systems"
            className="h-8 object-contain"
          />
        </div>
        
        {/* Social Icons */}
        <div className="flex items-center gap-2">
          <a href="#" className="w-9 h-9 hover:opacity-80 transition-opacity rounded-sm flex items-center justify-center" style={{ backgroundColor: '#123c52' }}>
            <Youtube className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="w-9 h-9 hover:opacity-80 transition-opacity rounded-sm flex items-center justify-center" style={{ backgroundColor: '#123c52' }}>
            <Twitter className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="w-9 h-9 hover:opacity-80 transition-opacity rounded-sm flex items-center justify-center" style={{ backgroundColor: '#123c52' }}>
            <Github className="w-5 h-5 text-white" />
          </a>
          <a href="#" className="w-9 h-9 hover:opacity-80 transition-opacity rounded-sm flex items-center justify-center" style={{ backgroundColor: '#123c52' }}>
            <Mail className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </header>
  );
}