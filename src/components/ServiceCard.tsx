import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string,
  desc: string,
  tech: string[],
  icon: string,
  index: number
}

const ServiceCard = ({ title, desc, tech, icon, index }: ServiceCardProps) => {
  return (
    <motion.div
        key={title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group flex flex-col gap-2 items-center lg:items-start max-w-md break-inside-avoid relative h-fit text-xs sm:text-sm dark:text-[#f9fafb] dark:bg-[#f9fafb]/5 md:bg-transparent md:darK:bg-transparent lg:hover:bg-[#1f2937]/5 lg:dark:hover:bg-[#f9fafb]/5 dark:text-[#f9fafb] border-[1px] lg:border-none mx-auto border-[#1f2937]/20 dark:border-[#f9fafb]/20 lg:shadow rounded-lg p-4 transition-all duration-300"
    >
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl text-[#008080] dark:text-blue-400 bg-blue-50 bg-[#008080]/5 dark:bg-blue-900/20 group-hover:scale-110 transition-transform duration-300">
            <i className={`bi ${icon} text-2xl`}></i>
        </div>
        
        <h3 className="leading-5 md:text-lg font-bold">{title}</h3>
        <p className="sm:text-sm line-clamp-2 sm:line-clamp-3 md:line-clamp-none text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">{desc}</p>

        <div className="w-full flex gap-2 text-[8px] md:text-[10px] justify-center lg:justify-normal font-semibold uppercase tracking-wider flex-wrap">
            {/* {tech.map((x: string) => (x + " • "))} */}
            {tech.map((x: string, index: number) => (
                <p key={index} className="px-2 py-1 bg-[#008080]/10 dark:bg-[#2a3b52]/80 rounded-2xl">{x}</p>
            ))}
        </div>
    </motion.div>
  )
}

export default ServiceCard