/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Artwork {
  id: string;
  title: string;
  medium: string;
  dimensions: string;
  imageUrl: string;
  category: 'Schilderijen' | 'Beeldhouwwerken';
}

export interface NavLink {
  label: string;
  href: string;
}
