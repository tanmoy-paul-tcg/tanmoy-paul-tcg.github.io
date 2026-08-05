'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    // Check if user manually toggled this session
    const manualOverride = sessionStorage.getItem('darkModeManual');
    if (manualOverride) {
      setMode(manualOverride);
      document.documentElement.setAttribute('data-bs-theme', manualOverride);
    } else {
      // Auto mode based on time: dark 6pm–6am, light 6am–6pm
      const hour = new Date().getHours();
      const autoMode = (hour >= 6 && hour < 18) ? 'light' : 'dark';
      setMode(autoMode);
      document.documentElement.setAttribute('data-bs-theme', autoMode);
    }
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.documentElement.setAttribute('data-bs-theme', newMode);
    sessionStorage.setItem('darkModeManual', newMode);
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
