"use client";

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import {motion} from "framer-motion"

const Allservices = [
  {
    num : "01",
    title : "Web Development",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ut illo, repellendus dolores aspernatur optio ipsum odio magni."
  },
  {
    num : "02",
    title : "UI/UX Design",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ut illo, repellendus dolores aspernatur optio ipsum odio magni."
  },
  {
    num : "03",
    title : "Web Development",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ut illo, repellendus dolores aspernatur optio ipsum odio magni."
  },
  {
    num : "04",
    title : "Web Development",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ut illo, repellendus dolores aspernatur optio ipsum odio magni."
  },
]

const services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8"> 
      <div className="container mx-auto">
        
        {Allservices.map((service, index)=>{
          return(
            <div className="" key={index}>
                {service.title} 
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default services