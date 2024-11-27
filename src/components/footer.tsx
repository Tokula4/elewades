"use client";
import Image from "next/image";
import {   Button } from "@/components/ui/button";
import { IconButton } from "@material-tailwind/react";


const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <div
              
              // href=""
             
              
              color="white"
              className="mb-4"
            >
              Elewade Nigeria Limited
            </div>
            <div color="white" className="mb-12 font-normal">
              The reward for getting on the stage is fame.
            </div>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <div
                 
                    // href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <div  color="white" className="mb-3">
              Start Business with Us
            </div>
            <div className="flex flex-col gap-2">
              <Button
                color="white"
                className="flex items-center justify-center"
              >
                <Image
                src=""
                  width={256}
                  height={256}
                  // src="/logos/logo-apple.png"
                  className="-mt-0.5 text-white mr-2 h-6 w-6"
                  alt="ios"
                />
                Our Service
              </Button>
              <Button
                color="white"
                className="flex items-center text-white justify-center"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 text-white h-6 w-6"
                  alt="ios"
                />
               Join
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <div
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} brought to{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              you by Elewade Nigeria Limited
            </a>{" "}
            by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Elewades Team
            </a>
            .
          </div>

          <div className="flex gap-2">

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
