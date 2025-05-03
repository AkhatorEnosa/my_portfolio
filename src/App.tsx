import { useContext } from "react";
import Left from "./sections/Left"
import Right from "./sections/Right"
import { AppContext } from "./context/AppContext";

function App() {
  const {theme} = useContext(AppContext);
  return (
    <div className="mx-auto min-h-screen max-w-screen px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 bg-[#f9fafb] dark:bg-[#1F2937] text-[#1F2937] dark:text-[#f9fafb]">
      <div className={`${theme === 'dark' ? "bg-[#1F2937]" : "bg-[#f9fafb]"} fixed w-screen h-screen left-0 top-0 z-10`}></div>
      <div className="relative lg:flex lg:justify-between lg:gap-10 z-30">
        <Left />
        <Right />
      </div>
    </div>
  )
}

export default App
