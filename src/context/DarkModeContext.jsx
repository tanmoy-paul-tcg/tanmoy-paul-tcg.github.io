'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    // Load saved preference from localStorage
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      setMode(saved);
      document.documentElement.setAttribute('data-bs-theme', saved);
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.documentElement.setAttribute('data-bs-theme', newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <DarkModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const ctx = useContext(DarkModeContext);
  if (!ctx) throw new Error('useDarkMode must be used within DarkModeProvider');
  return ctx;
}
