import React from 'react';
import { Menu, X, Globe2, BookOpen, Palette, TreePine } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AncientCivilizations from './components/AncientCivilizations';
import CulturalHeritage from './components/CulturalHeritage';
import Globalization from './components/Globalization';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <AncientCivilizations />
        <CulturalHeritage />
        <Globalization />
      </main>
      <Footer />
    </div>
  );
}

export default App;