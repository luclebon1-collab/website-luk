/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Artwork, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Schilderijen', href: '#schilderijen' },
  { label: 'Beeldhouwwerken', href: '#beeldhouwwerken' },
  { label: 'Over ons', href: '#over-ons' },
];

export const ARTWORKS: Artwork[] = [
  {
    id: '1',
    title: 'The Proposal 2',
    medium: 'oil on canvas',
    dimensions: '100x80',
    imageUrl: 'https://picsum.photos/seed/luk1/800/1000',
    category: 'Schilderijen',
  },
  {
    id: '2',
    title: 'The Proposal',
    medium: 'mixed media',
    dimensions: '115x75',
    imageUrl: 'https://picsum.photos/seed/luk2/800/1200',
    category: 'Schilderijen',
  },
  {
    id: '3',
    title: 'couple in 4 rectangles',
    medium: 'oil on canvas',
    dimensions: '60x90',
    imageUrl: 'https://picsum.photos/seed/luk3/900/1200',
    category: 'Schilderijen',
  },
  {
    id: '4',
    title: 'Blue Serenity',
    medium: 'sculpture, bronze',
    dimensions: '40x20x20',
    imageUrl: 'https://picsum.photos/seed/luk4/800/800',
    category: 'Beeldhouwwerken',
  },
  {
    id: '5',
    title: 'Fragmented Dream',
    medium: 'oil on canvas',
    dimensions: '100x100',
    imageUrl: 'https://picsum.photos/seed/luk5/1000/1000',
    category: 'Schilderijen',
  },
  {
    id: '6',
    title: 'Vertical Flow',
    medium: 'acrylic on canvas',
    dimensions: '150x50',
    imageUrl: 'https://picsum.photos/seed/luk6/600/1200',
    category: 'Schilderijen',
  },
  {
    id: '7',
    title: 'The Thinker',
    medium: 'stone sculpture',
    dimensions: '60x40x40',
    imageUrl: 'https://picsum.photos/seed/luk7/800/1000',
    category: 'Beeldhouwwerken',
  },
  {
    id: '8',
    title: 'Geometric Harmony',
    medium: 'oil on canvas',
    dimensions: '120x100',
    imageUrl: 'https://picsum.photos/seed/luk8/1200/1000',
    category: 'Schilderijen',
  },
];
