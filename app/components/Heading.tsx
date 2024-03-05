import React, { ReactNode } from "react";

interface HeadingProps {
  title: string;
  subtitle?: ReactNode;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  const isRedSubtitle =
    typeof subtitle === "string" &&
    subtitle.includes("Please wait for your image to load after selecting!!!!");
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className={`font-light mt-2 ${isRedSubtitle ? "text-red-500" : ""}`}>
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
