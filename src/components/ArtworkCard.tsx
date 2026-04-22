import { motion } from 'motion/react';
import { Artwork } from '../types';

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="masonry-item group cursor-pointer"
    >
      <div className="relative overflow-hidden border border-[#EEECE6] bg-[#EAE8E2]">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#D1CEC7]/20 to-[#EAE8E2]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full grayscale-[0.2] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-[#1A1A1A] transition-colors group-hover:text-brand-gray">
          {artwork.title}
        </h3>
        <p className="mt-1 text-[11px] font-light italic text-gray-500">
          {artwork.dimensions} {artwork.medium}
        </p>
      </div>
    </motion.div>
  );
}
