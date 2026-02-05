import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { useNavigate, useSearchParams } from "react-router-dom";

const Modal = ({ imgSrc, alt, index } : { imgSrc: string, alt: string, index: number }) => {
    const [show, setShow] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const body = document.body;

    //  Capture the ID from the URL
    const activePicId = searchParams.get("pic");

    // Sync 'show' state with URL param
    useEffect(() => {
        // If the URL param matches this specific modal's index, show it
        if (activePicId === index.toString()) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [activePicId, index]);

    useEffect(() => {
        const shouldHideScroll = show;
        body.style.overflowY = shouldHideScroll ? 'hidden' : 'auto';

        return () => {
            body.style.overflowY = 'auto';
        };
    }, [show]);

    // Keyboard Listener
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && show) {
                navigate("/");
            }
        };

        // Only attach the listener if the modal is actually open
        if (show) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [show, navigate]);
    
    const handleNav = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent event bubbling
        if (!show) {
            navigate(`/?pic=${index}`);
        } else {
            navigate(`/`);
        }
    };

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={show ? "fixed top-0 left-0 flex w-screen h-screen justify-center items-center z-50 cursor-pointer" : "relative group h-64 overflow-clip flex flex-col justify-center items-center rounded-md z-20 break-words"}
            onClick={handleNav}
            role="button"
            aria-label="Open image modal"
            tabIndex={index}
        >
            <motion.div
                className={show ? "absolute top-0 left-0 h-full w-full bg-[#f9fafb]/80 dark:bg-[#2a3b52]/80 backdrop-blur-sm z-10" : "absolute opacity-0 group-hover:opacity-100 h-full w-full bg-[#f9fafb]/50 dark:bg-[#2a3b52]/50 flex justify-center items-center top-0 left-0 z-50"}>
                <i className={`bi bi-eye ${show && "hidden"} size-5 p-4 hover:p-6 animate-bounce bg-[#f9fafb] dark:bg-[#2a3b52] rounded-full text-center flex justify-center items-center cursor-pointer transition-all duration-150`}></i>
            </motion.div>

            {show && (
                <div 
                    aria-label="Close modal" 
                    onClick={handleNav} 
                    className="absolute top-5 right-5 px-3 py-1 text-xs dark:bg-[#f9fafb] bg-[#2a3b52] text-[#f9fafb] dark:text-[#2a3b52] rounded-full flex items-center gap-1 font-semibold cursor-pointer z-50"
                >
                    <i className="bi bi-x-lg text-red-600"></i> Close
                </div>
            )}

            <motion.img
                src={imgSrc} 
                alt={alt}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={show ? "lg:h-[100vh] z-40" : `w-fit group-hover:cursor-pointer scale-50 transition-all duration-300 z-20`}
            />
        </motion.div>
    )
}

export default Modal;