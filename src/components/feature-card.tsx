import {
    
    Card,
    
  } from "@/components/ui/card";
  
  
  interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
  }
  
  export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
    return (
      <div color="transparent" >
        <div className="grid justify-start">
          <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-gray-900 p-2.5 text-left text-white">
            <Icon className="h-6 w-6" />
          </div>
          <div  color="blue-gray" className="mb-2">
            {title}
          </div>
          <div className=" font-normal !text-gray-500">
            {children}
          </div>
        </div>
      </div>
    );
  }

  export default FeatureCard;
  