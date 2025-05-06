import { createContext, ReactNode, useEffect, useState } from 'react'

export const AppContext = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  revealAll: boolean;
  setRevealAll: React.Dispatch<React.SetStateAction<boolean>>;
  groupBy: string;
  setGroupBy: React.Dispatch<React.SetStateAction<string>>;
  themeHandler: () => void
}>({
  theme: 'light',
  setTheme: () => {},
  revealAll: false,
  setRevealAll: () => {},
  groupBy: 'all',
  setGroupBy: () => {},
  themeHandler: () => {},
});



export function AppProvider({ children } : { children: ReactNode }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const [revealAll, setRevealAll] = useState(false)
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
      
      const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
      setTheme(initialTheme);
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }
    , [theme])
    
  return (
    <AppContext.Provider value={{
        theme, setTheme,
        revealAll, setRevealAll,
        groupBy, setGroupBy,
        themeHandler,
    }}>
      {children}
    </AppContext.Provider>
  )
}