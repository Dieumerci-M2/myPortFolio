"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const Allservices = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ut illo, repellendus dolores aspernatur optio ipsum odio magni.",
    href : "/"
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ut illo, repellendus dolores aspernatur optio ipsum odio magni.",
    href : "/"
  },
 
]

const services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
           initial={{opacity : 0}}
           animate ={{
               opacity : 1,
               transition : { delay : 1, duration : 0.4, ease : "easeInOut"}
           }} 
           className="flex flex-wrap justify-between"
        >
        {Allservices.map((service, index) => {
          return (
            <div key={index} className="flex flex-col gap-6 w-full md:w-[40%]">
              <div className="flex flex-row justify-between">
                <div className="text-5xl font-extrabold Text-outline text-transparent hover:Text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href} className=" w-[70px] h-[70px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leanding-none text-white hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">
                {service.description}
              </p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          )
        })}
        </motion.div>
      </div>
    </section>
  )
}

export default services