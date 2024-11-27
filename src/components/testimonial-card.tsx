import React from "react";
import {Avatar, AvatarImage , AvatarFallback} from "@/components/ui/avatar"
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
      <Avatar >
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
        <div>
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