import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="order-2 xl:order-none text-center xl:text-left">
            <span className="text-xl"> Software Developer</span>
            <h1 className="H1 mb-6">
              Hello I'm <br />
              <span className="text-accent">MUHINDO Dieumerci</span>
            </h1>
            <p className="max-w-[500PX] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat ut illo, repellendus dolores aspernatur optio ipsum odio magni. Commodi corrupti culpa laudantium saepe quisquam! Repudiandae ab dignissimos delectus unde!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase">
                <span className="flex gap-2">
                  Download CV
                  <FontAwesomeIcon icon={faDownload} className="w-[16px]" />
                </span>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                containerStyles="flex gap-4" 
                iconStyles = "flex justify-center items-center w-9 h-9 border border-accent rounded-full  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </main>
  );
}
