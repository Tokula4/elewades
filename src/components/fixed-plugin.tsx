"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FixedPlugin() {
  return (
    <a href="https://www.material-tailwind.com" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Whatsapp Line"
          src="https://www.material-tailwind.com/favicon.png"
        />{" "}
        Message us on Whatsapp
      </Button>
    </a>
  );
}
