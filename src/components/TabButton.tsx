import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const TabButton = ({ title, index } : { title: string, index: number }) => {
    const { groupBy, setGroupBy, tabIndex, setTabIndex } = useContext(AppContext)

    // Check if current index is greater than previous index
    const getActiveIndex = () => {

      if (index > tabIndex) {
        setTabIndex(index);
        return true
      } else {
        setTabIndex(0);
        return false
      }
    }
  return (
    <button
      className={`relative w-fit flex justify-center items-center capitalize text-nowrap text-xs gap-3 ${groupBy === title ? "font-semibold text-[#f9fafb] hover:text-[#f9fafb] dark:text-[#1f2937] dark:hover:text-[#1f2937]" : " bg-[#1f2937]/5 dark:bg-[#1f2937]/80 hover:text-[#008080] dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] hover:shadow-sm"} py-2 px-4 overflow-clip rounded-full transition-all duration-300`}
      aria-label={`Group by ${title}`}
      role="button"
      onClick={() => {
        setGroupBy(title);
        getActiveIndex(); 
      }}
    >
      {/* <span className={`absolute ${groupBy === title ? "opacity-100 left-0" : "opacity-0 -left-20"} h-full w-full top-0 bg-[#1f2937] dark:bg-[#f9fafb] rounded-full transition-all duration-300 z-0`}></span> */}

      <span className={groupBy === title ? `absolute opacity-100 left-0 h-full w-full top-0 bg-[#1f2937] dark:bg-[#f9fafb] rounded-full transition-all duration-300 z-0` : `absolute opacity-0 ${index > tabIndex ? "-left-20" : "left-20" } h-full w-full top-0 bg-[#1f2937] dark:bg-[#f9fafb] rounded-full transition-all duration-300 z-0`}></span>
      <i className='relative not-italic z-10'>{title}</i>
    </button>
  )
}

export default TabButton