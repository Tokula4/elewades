import React from "react";
interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div color="transparent" >
      <div className="grid px-0">
        <div  color="blue-gray" className="mb-2">
          {title}
        </div>
        <div className="font-normal">{children}</div>
      </div>
    </div>
  );
}

export default InfoCard;