import { AnimatePresence, motion } from 'motion/react';
import { Artwork } from '../types';
import ArtworkCard from './ArtworkCard';

interface GalleryProps {
  artworks: Artwork[];
}

export default function Gallery({ artworks, category }: { artworks: Artwork[], category: string }) {
  return (
    <div className="mx-auto max-w-7xl px-8 pb-24 pt-12 md:px-12 lg:px-16">
      <header className="mb-12 flex items-end justify-between">
        <div>
          <p className="mb-1 text-[10px] uppercase tracking-widest text-gray-400">Current Collection</p>
          <h2 className="text-3xl font-serif italic text-[#1A1A1A]">Recent {category}</h2>
        </div>
        <div className="flex space-x-2 pb-1">
          <span className="h-2 w-2 rounded-full bg-[#1A1A1A]"></span>
          <span className="h-2 w-2 rounded-full border border-gray-300"></span>
          <span className="h-2 w-2 rounded-full border border-gray-300"></span>
        </div>
      </header>

      <AnimatePresence mode="popLayout">
        <motion.div
          key="gallery-grid"
          className="masonry-grid"
        >
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </motion.div>
      </AnimatePresence>

      {artworks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-[50vh] items-center justify-center"
        >
          <p className="font-serif text-xl italic text-gray-400">Geen kunstwerken gevonden.</p>
        </motion.div>
      )}
    </div>
  );
}
