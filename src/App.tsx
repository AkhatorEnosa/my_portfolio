import Left from "./sections/Left"
import Right from "./sections/Right"

function App() {

  return (
    <div className="w-screen h-screen bg-[#FFF9F0] dark:bg-[#1F2937] text-[#1F2937] dark:text-[#FFF9F0]">
      <div className="max-w-[1260px] grid grid-cols-6 items-center justify-center mx-auto h-full py-20 px-10">
        <Left />
        <Right />
      </div>
    </div>
  )
}

export default App
