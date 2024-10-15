import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl"> Software Developer</span>
            <h1 className="H1 mb-6">
              Hello I'm <br /> 
              <span className="text-accent">MUHINDO Dieumerci</span> 
            </h1>
            <p className="max-w-[500PX] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ut illo, repellendus dolores aspernatur optio ipsum odio magni. Commodi corrupti culpa laudantium saepe quisquam! Repudiandae ab dignissimos delectus unde!
            </p>
            <Button variant="outline" size="lg" className="uppercase">
              <span className="flex gap-2">
                Download CV 
                <FontAwesomeIcon icon={ faDownload} className="w-[16px]"/>
              </span>
            </Button>
          </div>
          <div>Photo</div>
        </div>
      </div>
    </main>
  );
}
