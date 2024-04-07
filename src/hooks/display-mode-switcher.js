// display-mode-switcher.js
import { useEffect, useState } from 'react';

export default function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const colorTheme = theme === 'dark' ? 'dark' : 'light';
    const root = window.document.documentElement;
    root.classList.remove(colorTheme === 'dark' ? 'light' : 'dark');
    root.classList.add(colorTheme);

    // Toggle class on body for dark mode
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    // Save theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}
