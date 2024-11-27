"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import {  Card, CardBody } from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "100",
    description: "Learning Courses",
  },
  {
    title: "500+",
    description: "Expert Instructors",
  },
  {
    title: "24/7",
    description: "Support",
  },
  {
    title: "5/5",
    description: "Review Stars",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={256}
          height={256}
          src="/image/callus.jpg"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="elewade customer service"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <div color="blue-gray" className="mb-4 font-bold  ">
            Why us 
          </div>
          <div
            
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
          >
            Free delivery 24/7 .
          </div>

          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MobileConvenience;
