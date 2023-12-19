"use client";
// Import necessary modules
import { useEffect, useRef } from "react";

// Define a type for the messages
type Message = {
  timestamp: number;
  message: string;
};

const ScrollDiv = ({ messages }: { messages: Message[] }) => {
  // Create a ref for the div
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Effect to scroll the div into view whenever messages change
  useEffect(() => {
    // Check if the ref is currently referencing a div
    if (scrollRef.current) {
      // If so, scroll the div into view smoothly
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Run the effect when messages change

  // Render a div with the ref attached
  return <div className="h-24 w-full" ref={scrollRef}></div>;
};

export default ScrollDiv;
