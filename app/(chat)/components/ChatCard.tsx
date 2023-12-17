// Import necessary modules
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
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
        {title !== "Group Chat" ? (
          <Link href={link}>
            <Button className="bg-pOrange hover:bg-background hover:text-pOrange hover:outline">
              {buttonText}
            </Button>
          </Link>
        ) : (
          <Dialog>
            <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-pOrange hover:bg-background hover:text-pOrange hover:outline">
              {buttonText}
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </CardFooter>
    </Card>
  );
};

// Export the ChatCard component as default
export default ChatCard;
