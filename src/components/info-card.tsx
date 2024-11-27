import React from "react";

import {  Card, CardBody } from "@material-tailwind/react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid px-0">
        <div variant="h2" color="blue-gray" className="mb-2">
          {title}
        </div>
        <div className=" font-normal">{children}</div>
      </CardBody>
    </Card>
  );
}

export default InfoCard;