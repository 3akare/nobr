"use client";
// Import necessary modules
import { NavigationBar } from ".";
import { useParams } from "next/navigation";

// Define the NavigationBarWrapper component
const NavigationBarWrapper = () => {
  // Use the useParams hook to get the router's query
  const { id } = useParams();
  // Render the NavigationBar component
  // If id is defined, set visibleMenu to false, otherwise set it to true
  return <NavigationBar visibleMenu={!id} />;
};

export default NavigationBarWrapper;
