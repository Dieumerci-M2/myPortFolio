"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, durantion: 0.4, ease: "easeIn" }

      }}

    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, durantion: 0.4, ease: "easeOut" }

        }}

      >
        <div className="flex justify-center items-center w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
          <Image
            src="/assets/md.png"
            priority
            quality={100}
            width={600}
            height={600}
            alt="Dieme"
            className="objectif-contain"
          />
        </div>
      </motion.div>

      <motion.svg
        className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle 
          cx="243" 
          cy="243" 
          r="240" 
          stroke="#00ff99" 
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{strokeDasharray : "24 10 0 0"}}
          animate={{
            strokeDasharray : ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate : [120, 360],   
          }}
          transition={{
            duration : 20,
            repeat : Infinity,
            repeatType : 'reverse'
          }}
        />
      </motion.svg>
    </motion.div>
  )
}

export default Photo