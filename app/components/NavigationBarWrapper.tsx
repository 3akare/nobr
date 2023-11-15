"use client";
import { NavigationBar } from ".";
import { useParams } from "next/navigation";

const NavigationBarWrapper = () => {
  const params = useParams();
  return <NavigationBar visibleMenu={params.id !== undefined ? false : true} />;
};

export default NavigationBarWrapper;
