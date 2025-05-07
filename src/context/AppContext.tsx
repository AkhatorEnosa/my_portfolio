import { createContext, ReactNode, useEffect, useState } from 'react'

export const AppContext = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
  groupBy: string;
  setGroupBy: React.Dispatch<React.SetStateAction<string>>;
  themeHandler: () => void
}>({
  theme: 'light',
  setTheme: () => {},
  selectedSection: 'about',
  setSelectedSection: () => {},
  groupBy: 'all',
  setGroupBy: () => {},
  themeHandler: () => {},
});



export function AppProvider({ children } : { children: ReactNode }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const [selectedSection, setSelectedSection] = useState("about")
    const [groupBy, setGroupBy] = useState("all")

    const themeHandler = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // localStorage.setItem('section', selectedSection)
      
      const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      setTheme(initialTheme);
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');

      // const originUrl = location.origin;
      // location.href = originUrl + "/#" + selectedSection
      // console.log(newLocation)
    }
    , [theme, selectedSection])
    
  return (
    <AppContext.Provider value={{
        theme, setTheme,
        selectedSection, setSelectedSection,
        groupBy, setGroupBy,
        themeHandler,
    }}>
      {children}
    </AppContext.Provider>
  )
}