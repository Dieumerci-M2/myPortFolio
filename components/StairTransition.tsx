"use client";

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairTransition = () => {

    const pathName1 = usePathname()

    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathName1}></div>
                <div className="h-sceen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                    <Stairs />
                </div>
                <motion.div 
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none "
                    initial={{opacity : 1}}
                    animate ={{
                        opacity : 0,
                        transition : { delay : 1, duration : 0.4, ease : "easeInOut"}
                    }}
                />
            </AnimatePresence>
        </>
    )
}

export default StairTransition