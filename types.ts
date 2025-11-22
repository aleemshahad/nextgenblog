import React from 'react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

export enum ToolType {
  TEXT_GENERATOR = 'text-gen',
  IMAGE_GENERATOR = 'image-gen',
  SEO_KEYWORD = 'seo-keyword',
  VOICE_TO_TEXT = 'voice-text'
}

export interface NavLink {
  name: string;
  href: string;
}