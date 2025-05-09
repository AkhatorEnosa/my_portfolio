import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const TabButton = ({ title } : { title: string}) => {
    const { groupBy, setGroupBy } = useContext(AppContext)
  return (
    <button className={`w-fit flex justify-center items-center capitalize text-xs gap-3 ${groupBy === title ? "bg-[#1f2937] text-[#f9fafb] hover:text-[#f9fafb] dark:bg-[#f9fafb] dark:text-[#1f2937] dark:hover:text-[#1f2937]" : " bg-[#1f2937]/5 dark:bg-[#f9fafb]/5 hover:text-[#008080] dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb]"} hover:font-semibold py-2 px-4 rounded-full transition-all duration-300`}
        onClick={() => setGroupBy(title)}
    >{title}</button>
  )
}

export default TabButton