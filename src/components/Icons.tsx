/**
 * SahajPath Icons — SVG components
 */
import React from 'react';

type P = { color?: string; size?: number; filled?: boolean };

export const IconSun = ({ color = 'currentColor', size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" fill={color} stroke="none" />
  </svg>
);

export const IconGrid = ({ color = 'currentColor', size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
    <rect x="4" y="4" width="16" height="16" rx="2.5" />
    <line x1="4" y1="10" x2="20" y2="10" /><line x1="12" y1="10" x2="12" y2="20" />
  </svg>
);

export const IconBookmark = ({ color = 'currentColor', size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round">
    <path d="M5 4h14v16l-7-3.5L5 20V4z" />
  </svg>
);

export const IconSearch = ({ color = 'currentColor', size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
    <circle cx="11" cy="11" r="7" /><line x1="16" y1="16" x2="20" y2="20" />
  </svg>
);

export const IconChevronRight = ({ color = 'currentColor', size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4l6 6-6 6" />
  </svg>
);

export const IconChevronLeft = ({ color = 'currentColor', size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 4l-6 6 6 6" />
  </svg>
);

export const IconChevronDown = ({ color = 'currentColor', size = 12 }: P) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l5 5 5-5" />
  </svg>
);

export const IconStar = ({ color = 'currentColor', size = 18, filled = false }: P) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill={filled ? color : 'none'} stroke={color} strokeWidth="1.5" strokeLinejoin="round">
    <path d="M10 2l2.4 5.9H18l-4.5 3.5 1.7 5.8L10 13.7l-5.2 3.5 1.7-5.8L2 7.9h5.6z" />
  </svg>
);

export const IconWhatsApp = ({ size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <circle cx="12" cy="12" r="9.5" fill="none" stroke="white" strokeWidth="1.5"/>
  </svg>
);

export const IconSettings = ({ color = 'currentColor', size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);
