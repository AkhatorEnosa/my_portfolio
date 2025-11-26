import { useContext } from "react";
import Left from "./sections/Left"
import Right from "./sections/Right"
import { AppContext } from "./context/AppContext";
import CursorTracker from "./components/CursorTracker";
// import Navbar from "./sections/Navbar";

function App() {
  const {theme} = useContext(AppContext);
  return (
    <div className="mx-auto min-h-screen max-w-[1800px] px-0 md:px-36 lg:px-12 bg-[#f9fafb] dark:bg-[#1F2937] text-[#000000] dark:text-[#f9fafb]">
      <div className={`${theme === 'dark' ? "bg-[#000000]" : "bg-[#f5f5f5]"} fixed w-screen h-screen left-0 top-0 z-10`}>
        <CursorTracker/>
      </div>
      {/* <Navbar /> */}
      <div className="relative flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-10 z-30">
        <Left />
        <Right />
      </div>
    </div>
  )
}

export default App
