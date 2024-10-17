"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return (
    <motion.div>
        <div>
            <Image src="/a.jpg" width={100} height={100} alt="Dieme" />
        </div>
    </motion.div>
  )
}

export default Photo