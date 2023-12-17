// Import necessary modules
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

// Define the props for the ChatCard component
interface ChatCardProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

// Define the ChatCard component
const ChatCard: React.FC<ChatCardProps> = ({
  title,
  description,
  buttonText,
  link,
}) => {
  // Render a Card component with a header, content, and footer
  return (
    <Card className="w-[350px] shadow-sm h-[16rem]">
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardDescription className="text-md">{description}</CardDescription>
      </CardHeader>
      <CardContent>{/* an image will go here */}</CardContent>
      <CardFooter>
        <Link href={link}>
          <Button className="bg-pOrange hover:bg-background hover:text-pOrange hover:outline">
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

// Export the ChatCard component as default
export default ChatCard;
