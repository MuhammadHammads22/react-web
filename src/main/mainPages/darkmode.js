// darkmode.js
import React from 'react';
import useDarkSide from '../../hooks/display-mode-switcher';

export default function Switcher() {
  const [theme, setTheme] = useDarkSide();

  const toggleDarkMode = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button onClick={toggleDarkMode} >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
