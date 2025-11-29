import { useEffect, useState } from "react";
import { motion } from "framer-motion"

const Modal = ({ imgSrc, alt, index } : { imgSrc: string, alt: string, index: number }) => {
    const [show, setShow] = useState(false);
    const body = document.body
    
    useEffect(() => {
        const shouldHideScroll = show
      
        body.style.height = '100vh'
        body.style.overflowY = shouldHideScroll ? 'hidden' : 'scroll'

        return () => {
            body.style.height = ''
            body.style.overflowY = ''
        }
  }, [show])

    return (

        <motion.div
            key={index}
            className={show ? "fixed top-0 left-0 flex w-screen h-screen justify-center items-center z-50 cursor-pointer" : "relative group h-52 overflow-clip rounded-md z-20 break-words"}
            onClick={() => setShow(!show)}
        >
            <div className={show ? "absolute top-0 left-0 h-full w-full bg-[#f9fafb]/80 dark:bg-[#2a3b52]/80 backdrop-blur-sm z-10" : "absolute opacity-0 group-hover:opacity-100 h-full w-full bg-[#f9fafb]/50 dark:bg-[#2a3b52]/50 flex justify-center items-center top-0 left-0 z-50"}>
                <i className={`bi bi-eye ${show && "hidden"} size-5 p-4 hover:p-6 animate-bounce bg-[#f9fafb] dark:bg-[#2a3b52] rounded-full text-center flex justify-center items-center cursor-pointer transition-all duration-150`}></i>
            </div>
            <div aria-label="Close modal" onClick={() => setShow(false)} className={`${!show && "hidden"} absolute top-5 right-5 px-2 py-1 text-xs dark:bg-[#f9fafb] bg-[#2a3b52] text-[#f9fafb] dark:text-[#2a3b52] rounded-full text-center flex justify-center items-center gap-1 font-semibold cursor-pointer transition-all duration-150 z-50`}>
                <i className={`bi bi-x-lg text-red-600`}></i> Close
            </div>
            <motion.img
                src={imgSrc} 
                alt={alt}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ amount: 0.2 }}
                className={show ? "lg:h-[100vh] z-40" : `w-fit group-hover:cursor-pointer scale-50 transition-all duration-300 z-20`}
            />
        </motion.div>
    )
}

export default Modal