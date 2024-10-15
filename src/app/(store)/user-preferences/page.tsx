"use client"; 

import { useEffect, useState } from 'react';
import { LocalStorageService } from '../../infrastructure/cache/localStorageService';

export default function UserPreferences() {
  const [theme, setTheme] = useState<'blue' | 'red' | 'white'>('blue');


  useEffect(() => {
    const savedTheme = LocalStorageService.getItem<'blue' | 'red' | 'white'>('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);


  const handleThemeChange = (newTheme: 'blue' | 'red' | 'white') => {
    setTheme(newTheme);
    LocalStorageService.setItem('theme', newTheme);
    document.documentElement.classList.remove('blue', 'red', 'white');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div className='flex-1 items-center container mx-auto text-center'>
      <h1 className="text-2xl font-bold mb-4">Preferências de Tema</h1>
      <div className="mb-6 flex-1 space-x-4 items-center container mx-auto text-center">
        <button
          onClick={() => handleThemeChange('blue')}
          className={`p-2 rounded ${theme === 'blue' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
        >
          Tema Azul
        </button>
        <button
          onClick={() => handleThemeChange('red')}
          className={`p-2 rounded ${theme === 'red' ? 'bg-red-600 text-white' : 'bg-gray-300 text-black'}`}
        >
          Tema Vermelho
        </button>
        <button
          onClick={() => handleThemeChange('white')}
          className={`p-2 rounded ${theme === 'white' ? 'bg-white text-black border border-gray-300' : 'bg-gray-300 text-black'}`}
        >
          Tema Branco
        </button>
      </div>
    </div>
  );
}
