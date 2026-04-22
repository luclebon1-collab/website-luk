import { motion } from 'motion/react';
import { NAV_LINKS } from '../constants';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Sidebar({ activeCategory, onCategoryChange }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-[#E5E2DA] bg-[#FAF9F6] py-12 px-10 lg:flex">
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block border-2 border-brand-black p-2 px-4 shadow-sm"
        >
          <span className="font-serif text-2xl font-bold tracking-widest text-[#1A1A1A]">LUK</span>
        </motion.div>

        <nav className="flex flex-col space-y-6">
          {NAV_LINKS.map((link, index) => (
            <motion.button
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onCategoryChange(link.label)}
              className={cn(
                "group relative w-max pb-1 text-xs font-medium uppercase tracking-[0.2em] transition-all",
                activeCategory === link.label 
                  ? "text-[#1A1A1A] border-b border-[#1A1A1A]" 
                  : "text-gray-400 hover:text-[#1A1A1A]"
              )}
            >
              <span className="relative z-10">{link.label}</span>
            </motion.button>
          ))}
        </nav>
      </div>

      <div className="mt-auto space-y-4">
        <p className="text-[10px] leading-relaxed text-gray-400 uppercase tracking-widest">
          Antwerpen &bull; Paris<br />Portfolio 2024
        </p>
      </div>
    </aside>
  );
}
