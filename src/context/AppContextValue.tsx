import { createContext } from "react";

export const AppContext = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  selectedSection: string | null;
  setSelectedSection: React.Dispatch<React.SetStateAction<string | null>>;
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