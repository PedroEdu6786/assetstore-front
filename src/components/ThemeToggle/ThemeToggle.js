import React, { useEffect, useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import './ThemeToggle.css';

const DARK_CLASS = "dark";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('isDark') === 'true'
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }

    localStorage.setItem('isDark', isDark);
  }, [isDark]);

  const handleChange = toggleEvent => {
    const isChecked = toggleEvent.target.checked;
    setIsDark(isChecked);
  }

  return (
    <Toggle
      className="DarkToggle"
      checked={isDark}
      onChange={handleChange}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode"
    />
  );
}

export default ThemeToggle;
