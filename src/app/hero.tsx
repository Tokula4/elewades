"use client";

import Image from "next/image";
import { Button,  } from "@/components/ui/button"


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-[#d77dd4] px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <div  color="white" className="mb-4 scroll-m-20 text-white pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Elewade  <br /> Nigeria Limited
            </div>
            <div
              
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Our app is here to empower you on your quest for knowledge,
              anytime and anywhere.
            </div>
            <div className="mb-4" color="white" >
              Get the app
            </div>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
               
                className="flex bg-white text-black justify-center items-center gap-3"
              >
        
                Our Service
              </Button>
              <Button
                size="lg"
               
                className="flex  bg-white text-black justify-center items-center gap-3"
              >
        
                Join Us
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphone1.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <div  color="blue-gray" className="mb-3">
            History of Elewade
          </div>
          <div
            
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Download our app to dive into a vast library of courses, tutorials,
            and study materials on a wide range of subjects - from programming
            and language learning to personal development and beyond
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
