import Left from "./sections/Left"
import Right from "./sections/Right"

function App() {

  return (
    <div className="w-screen h-screen bg-[#f9fafb] dark:bg-[#1F2937] text-[#1A1A1A] dark:text-[#f9fafb]">
      <div className="max-w-[1260px] grid grid-cols-7 gap-12 items-center justify-center mx-auto h-full py-20 px-10">
        <Left />
        <Right />
      </div>
    </div>
  )
}

export default App
