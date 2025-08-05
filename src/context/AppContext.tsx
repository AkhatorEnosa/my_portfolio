import React, { createContext, ReactNode, useEffect, useState } from 'react'

export const AppContext = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
  groupBy: string;
  setGroupBy: React.Dispatch<React.SetStateAction<string>>;
  themeHandler: () => void
}>({
  theme: 'light',
  setTheme: () => {},
  selectedSection: '',
  setSelectedSection: () => {},
  tabIndex: 0,
  setTabIndex: () => {},
  groupBy: 'all',
  setGroupBy: () => {},
  themeHandler: () => {},
});


// get url last part 
// const originUrl = location.href;
// const splitUrl = originUrl.split("/");
// const lastPartOfUrl = splitUrl[splitUrl.length - 1]
// const result = lastPartOfUrl.slice(1)
//   localStorage.setItem("section", result)
// location.href = originUrl + "/#" + selectedSection
// console.log(result)



export function AppProvider({ children } : { children: ReactNode }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const [selectedSection, setSelectedSection] = useState(localStorage.getItem('section') || '')
    const [groupBy, setGroupBy] = useState("all")
    const [tabIndex, setTabIndex] = useState(0)

    const themeHandler = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.setItem('section', selectedSection)
      
      const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
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
        themeHandler,
    }}>
      {children}
    </AppContext.Provider>
  )
}