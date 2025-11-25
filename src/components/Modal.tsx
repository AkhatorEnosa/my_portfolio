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
    <div className={` ${show ? 'fixed top-0 left-0 flex w-screen h-screen text-white justify-center items-center z-50 cursor-pointer' : 'flex text-white justify-center items-center z-50 cursor-pointer'}`} onClick={() => setShow(!show)}>
            <div className={show ? "absolute top-0 left-0 h-full w-full bg-[#f9fafb]/80 dark:bg-[#2a3b52]/80 backdrop-blur-sm" : ""}></div>
            {/* <img src={imgSrc} alt={alt} className="w-3/12 scale-150" /> */}
            
        <motion.img
            src={imgSrc} 
            alt={alt}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ amount: 0.2 }}
            className={`${show && "w-3/12 z-50"}`}
        />
    </div>
    )
}

export default Modal