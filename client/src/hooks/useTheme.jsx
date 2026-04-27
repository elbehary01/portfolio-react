import { useState, useEffect, useCallback } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Initialize on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    console.log('Initializing theme from storage:', storedTheme);
    setTheme(storedTheme);
    setMounted(true);
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    if (!mounted) return;

    console.log('Applying theme to DOM:', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      console.log('Added dark class');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Removed dark class');
    }
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('Toggle theme: from', prevTheme, 'to', newTheme);
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
