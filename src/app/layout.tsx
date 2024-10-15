"use client"; 

import { ReactNode } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { LocalStorageService } from './infrastructure/cache/localStorageService';
import "./globals.css"

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<'blue' | 'red' | 'white' | null>(null); 

  useEffect(() => {
    const savedTheme = LocalStorageService.getItem<'blue' | 'red' | 'white'>('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('blue'); 
    }
  }, []);


  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove('blue', 'red', 'white');
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

 
  if (!theme) {
    return null; 
  }

  return (
    <html lang="en">
    <body className="flex flex-col !overflow-y-scroll antialiased min-h-screen"> 
      <Header />
      <main className="flex-grow mb-36 mt-8">{children}</main> 
      <Footer />
    </body>
  </html>
  );
}