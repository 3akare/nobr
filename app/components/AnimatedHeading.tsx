"use client";
import { TypeAnimation } from "react-type-animation";

export const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Anonymous Chat for Me",
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        "Anonymous Chat for You",
        3000,
        "Anonymous Chat for that guy over there",
        3000,
        "Anonymous Chat for Everyone",
        3000,
      ]}
      wrapper="span"
      speed={20}
      className="font-bold text-5xl md:text-6xl lg:text-7xl min-h-[100px]"
    />
  );
};
