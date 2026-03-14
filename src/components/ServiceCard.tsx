import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string,
  desc: string,
  tech: string[],
  icon: string,
  index: number
}

const ServiceCard = ({ title, desc, tech, icon }: ServiceCardProps) => {
  return (
    <motion.div
        key={title}
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="group flex flex-col gap-2 text-lg items-center lg:items-start max-w-md break-inside-avoid relative h-fit dark:text-[#f9fafb] dark:bg-[#1c1c1c] bg-[#f9fafb] border-[1px] lg:border-none mx-auto border-[#1f2937]/20 dark:border-[#f9fafb]/20 lg:shadow rounded-lg p-4 transition-all duration-300"
    >
      <div className="flex flex-col justify-center items-center lg:flex-row gap-2">
        <div className="flex w-fit items-center justify-center min-w-14 min-h-14 rounded-2xl text-indigo-500 dark:text-green-400 bg-indigo-500/5 dark:bg-green-400/20 group-hover:scale-110 transition-transform duration-300">
            <i className={`bi ${icon} text-2xl`}></i>
        </div>
        
        <h3 className="heading text-lg font-semibold tracking-tight leading-tight text-gray-900 dark:text-gray-50">{title}</h3>
      </div>
      <p className="text-sm line-clamp-2 sm:line-clamp-3 md:line-clamp-none text-black/70 hover:text-inherit dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] mb-2 leading-relaxed">{desc}</p>

      <ul className="opacity-80 group-hover:opacity-100 w-full flex gap-2 md:mt-5 text-[10px] justify-center lg:justify-normal p-2 md:p-0 font-semibold uppercase tracking-wider flex-wrap"
        aria-label={`Technologies used in ${title}`}
      >
        {tech.map((x: string, index: number) => (
            <li key={index} className="px-2 border border-indigo-500/50 dark:border-green-400/50 text-indigo-500 dark:text-green-400 bg-transparent rounded-full">{x}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ServiceCard