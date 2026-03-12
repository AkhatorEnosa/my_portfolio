import React, { createContext, ReactNode, useEffect, useState } from 'react'

export const AppContext = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  selectedSection: string | null;
  setSelectedSection: React.Dispatch<React.SetStateAction<string | null>>;
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
  groupBy: string;
  setGroupBy: React.Dispatch<React.SetStateAction<string>>;
  isScrolled: boolean;
  setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>;
  themeHandler: () => void;
  toggleScroll: () => void;
}>({
  theme: 'dark',
  setTheme: () => {},
  selectedSection: '',
  setSelectedSection: () => {},
  tabIndex: 0,
  setTabIndex: () => {},
  groupBy: 'all',
  setGroupBy: () => {},
  isScrolled: false,
  setIsScrolled: () => {},
  themeHandler: () => { },
  toggleScroll: () => { },
});

// get url last part 
const originUrl = location.href;
const splitUrl = originUrl.split("/");
const lastPartOfUrl = splitUrl[splitUrl.length - 1]

const result = lastPartOfUrl.slice(1)
  localStorage.setItem("section", result)
// console.log("result", result)



export function AppProvider({ children } : { children: ReactNode }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
    const [selectedSection, setSelectedSection] = useState(localStorage.getItem('section') ? localStorage.getItem('section') : result)
    const [groupBy, setGroupBy] = useState("all")
    const [tabIndex, setTabIndex] = useState(0)
    const [isScrolled, setIsScrolled] = useState(false)

    const themeHandler = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }

    const trackScroll = () => {
      // Calculate the scroll threshold as 90% of the viewport height
      const scrollThreshold = window.innerHeight * 0.9;

      if (window.scrollY >= scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false)
      }
      console.log(scrollThreshold)
      // console.log(window.innerHeight)
    }
  
    // toggel scroll to top when isScrolled is true and scroll to about section when isScrolled is false
    const toggleScroll = () => {
      if (isScrolled) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    // Add scroll event listener to track scroll position
    useEffect(() => {
      window.addEventListener('scroll', trackScroll);

      return () => {
        window.removeEventListener('scroll', trackScroll);
      };
    }, []);
  
    useEffect(() => {
      localStorage.setItem('theme', theme); // Save theme to localStorage

      const savedTheme = localStorage.getItem('theme'); // Retrieve saved theme from localStorage
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // Check system preference for dark mode
      
      const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light'); // Default to light if no saved theme and system preference is not dark
      setTheme(initialTheme);
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    }
    , [theme, selectedSection])
    
  return (
    <AppContext.Provider value={{
        theme, setTheme,
        selectedSection, setSelectedSection,
        tabIndex, setTabIndex,
        groupBy, setGroupBy,
        isScrolled, setIsScrolled,
        themeHandler,
        toggleScroll
    }}>
      {children}
    </AppContext.Provider>
  )
}