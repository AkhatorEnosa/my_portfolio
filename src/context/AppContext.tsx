import { ReactNode, useEffect, useState } from 'react'
import { AppContext } from './AppContextValue';


// get url last part 
const originUrl = location.href;
const splitUrl = originUrl.split("/");
const lastPartOfUrl = splitUrl[splitUrl.length - 1]

const result = lastPartOfUrl.slice(1)
  localStorage.setItem("section", result)
// console.log(result)



export function AppProvider({ children } : { children: ReactNode }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const [selectedSection, setSelectedSection] = useState(localStorage.getItem('section') ? localStorage.getItem('section') : 'home')
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