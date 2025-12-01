import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InfoSection } from './components/InfoSection';
import { FeatureCards } from './components/FeatureCards';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#123c52' }}>
      <Header />
      <main>
        <HeroSection />
        <InfoSection />
        <FeatureCards />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}