import React from "react";
import { Card, CardBody, Avatar } from "@material-tailwind/react";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <div  className="items-center text-center">
      <div>
        <Avatar src={img} className="mb-3" alt={client} size="lg" />
        <div color="blue-gray">
          {client}
        </div>
        <div  className="mb-3 font-medium !text-gray-700">
          {title}
        </div>
        <div
          
          className="mb-5 font-normal !text-gray-500"
        >
          &quot;{feedback}&quot;
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;