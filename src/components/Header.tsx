
import React, { useState } from 'react';
import { useScroll } from '@/contexts/ScrollContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { scrollY, scrollProgress } = useScroll();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const headerOpacity = Math.max(0.95, 1 - scrollProgress * 0.1);
  const borderOpacity = Math.min(1, scrollY / 100);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 w-full"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${headerOpacity})`,
        borderBottomColor: `rgba(156, 163, 175, ${borderOpacity})`
      }}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 max-w-7xl mx-auto">
        <img 
          src="/lovable-uploads/cd760326-6692-49e4-adc8-9d587d70cf76.png" 
          alt="BOOST - Potencializa tus ideas" 
          className="h-16 sm:h-20 lg:h-28 w-auto transition-all duration-300 hover:scale-105"
        />
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <a 
            href="#services" 
            className="hover:text-blue-400 transition-all duration-300 hover:scale-110 inline-block"
          >
            {t('nav.services')}
          </a>
          <a 
            href="#how-we-work" 
            className="hover:text-purple-400 transition-all duration-300 hover:scale-110 inline-block"
          >
            {t('nav.howWeWork')}
          </a>
          <a 
            href="#about" 
            className="hover:text-cyan-400 transition-all duration-300 hover:scale-110 inline-block"
          >
            {t('nav.about')}
          </a>
          <a 
            href="#contact" 
            className="hover:text-pink-400 transition-all duration-300 hover:scale-110 inline-block"
          >
            {t('nav.contact')}
          </a>
          <LanguageToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-2">
          <LanguageToggle />
          <button
            onClick={toggleMenu}
            className="p-2 text-white hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 lg:hidden">
            <nav className="flex flex-col space-y-4 px-6 py-4">
              <a 
                href="#services" 
                onClick={closeMenu}
                className="hover:text-blue-400 transition-all duration-300 text-sm font-medium"
              >
                {t('nav.services')}
              </a>
              <a 
                href="#how-we-work" 
                onClick={closeMenu}
                className="hover:text-purple-400 transition-all duration-300 text-sm font-medium"
              >
                {t('nav.howWeWork')}
              </a>
              <a 
                href="#about" 
                onClick={closeMenu}
                className="hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
              >
                {t('nav.about')}
              </a>
              <a 
                href="#contact" 
                onClick={closeMenu}
                className="hover:text-pink-400 transition-all duration-300 text-sm font-medium"
              >
                {t('nav.contact')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
