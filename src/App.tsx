import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Left from "./sections/Left";
import Right from "./sections/Right";
import { AppContext } from "./context/AppContext";
import CursorTracker from "./components/CursorTracker";

const App = () => {
  const { theme } = useContext(AppContext);

  return (
    <Router>
      <div className="mx-auto min-h-screen max-w-[1800px] bg-[#f9fafb] dark:bg-[#1F2937] text-[#000000] dark:text-[#f9fafb]">
        {/* Background & Cursor Layer */}
        <div className={`${theme === 'dark' ? "bg-[#000000]" : "bg-[#f5f5f5]"} fixed w-screen h-screen left-0 top-0 z-10`}>
          <CursorTracker />
        </div>

        <main className="relative z-30">
          <Routes>
            {/* Main Portfolio Route */}
            <Route 
              path="/" 
              element={
                <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-10">
                  <Left />
                  <Right />
                </div>
              } 
            />

            {/* Project routing for later */}
            {/* <Route path="/project/:id" element={<ProjectDetail />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;