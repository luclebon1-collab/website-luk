/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from './components/Sidebar';
import Gallery from './components/Gallery';
import { ARTWORKS } from './constants';
import { cn } from './lib/utils';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Schilderijen');

  const filteredArtworks = ARTWORKS.filter(artwork => 
    activeCategory === 'Over ons' ? false : artwork.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-brand-offwhite">
      {/* Mobile Header / Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#E5E2DA] bg-[#FAF9F6]/95 py-4 backdrop-blur-md lg:hidden">
        <div className="flex items-center px-6">
          {/* Logo on Left */}
          <div className="flex-shrink-0 border-2 border-brand-black p-1 px-3">
            <span className="font-serif text-lg font-bold tracking-widest text-brand-black">LUK</span>
          </div>
          
          {/* Navigation Centered */}
          <nav className="flex flex-1 items-center justify-center gap-4 overflow-x-auto no-scrollbar px-2 sm:gap-8">
            {['Schilderijen', 'Beeldhouwwerken', 'Over ons'].map((label) => (
              <button
                key={label}
                onClick={() => setActiveCategory(label)}
                className={cn(
                  "whitespace-nowrap pb-1 text-[9px] font-semibold uppercase tracking-[0.2em] transition-all",
                  activeCategory === label 
                    ? "text-[#1A1A1A] border-b border-[#1A1A1A]" 
                    : "text-gray-400"
                )}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Invisible spacer to balance the centering of the nav */}
          <div className="w-[60px] flex-shrink-0" aria-hidden="true" />
        </div>
      </header>

      <div className="flex">
        <Sidebar 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
        
        <main className="w-full lg:pl-64">
          <Gallery artworks={filteredArtworks} category={activeCategory} />

          {activeCategory === 'Over ons' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-4xl px-8 py-24 lg:px-16"
            >
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                <div className="space-y-8">
                  <h2 className="text-4xl font-serif italic text-[#1A1A1A]">Over LUK</h2>
                  <div className="space-y-6 text-sm leading-relaxed text-gray-600">
                    <p>
                      LUK is een gepassioneerd kunstenaar, gevestigd in Antwerpen, wiens werk de balans tast tussen abstracte expressie en figuratieve diepgang. Met een focus op olieverf op canvas en sculpturale vormen in brons en steen, zoekt LUK naar de essentie van menselijke emotie en de verstilling van het moment.
                    </p>
                    <p>
                      Mijn werk wordt gekenmerkt door een levendig kleurgebruik en een dynamische compositie, geïnspireerd door zowel de klassieke meesters als de moderne abstractie. Elk stuk is een verkenning van licht, textuur en de dialoog tussen de kunstenaar en het medium.
                    </p>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="border border-[#E5E2DA] bg-white p-8">
                    <h3 className="mb-6 font-serif italic text-xl">Contact & Exposities</h3>
                    <p className="mb-8 text-sm text-gray-500">Neem contact op voor meer informatie over beschikbare werken of toekomstige tentoonstellingen.</p>
                    <div className="space-y-4">
                      <a href="mailto:info@lukart.be" className="block border-b border-brand-black pb-1 text-lg font-light hover:text-brand-gray hover:border-brand-gray transition-colors font-serif italic">
                        info@lukart.be
                      </a>
                      <p className="text-[10px] font-bold text-[#1A1A1A] tracking-[0.2em] uppercase">Antwerpen, België</p>
                    </div>
                  </div>

                  <div className="space-y-4 opacity-50">
                     <div className="h-[1px] w-12 bg-gray-300"></div>
                     <p className="text-[10px] uppercase tracking-widest text-gray-400">Atelier Bezoeken op Afspraak</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>

      {/* Visual Flourish: Corner Tag */}
      <div className="absolute right-12 top-12 hidden lg:block">
        <div className="h-[1px] w-12 bg-gray-300"></div>
        <p className="mt-2 text-[10px] uppercase tracking-widest text-gray-400">Scroll Exploration</p>
      </div>
    </div>
  );
}

