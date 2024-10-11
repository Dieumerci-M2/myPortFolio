"use client";

import { animate, motion } from "framer-motion"

const StairsAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    }

}

const reverseIndex = (index : number) => {

    const TotalSteps = 6

    return TotalSteps - index - 1
}

const Stairs = () => {

    return (
        <>
            {
                [...Array(6)].map((a, index) => {
                   
                    return (
                        <motion.div
                            key={index}
                            variants={StairsAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: reverseIndex(index) * 0.1
                            }}
                            className="h-full w-full bg-white relative"
                        
                        />
                        
                    )

                })
            }
        </>
    )
}

export default Stairs