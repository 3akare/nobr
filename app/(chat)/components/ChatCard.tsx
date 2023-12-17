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
    <Card className="w-[350px] shadow-sm min-h-[16rem]">
      <CardHeader>
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent>{/* an image will go here */}</CardContent>
      <CardFooter>
        {title !== "Group Chat" ? (
          <Link href={""}>
            <Button
              className="bg-pOrange text-md hover:bg-background hover:text-pOrange hover:outline"
              disabled={true}
            >
              Coming Soon!
              {/* {buttonText} */}
            </Button>
          </Link>
        ) : (
          <div className="flex gap-4">
            <Dialog>
              <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 ring-primary hover:ring-primary/90">
                {`Create ${buttonText}`}
              </DialogTrigger>
              <DialogContent className="w-[90%] rounded-lg">
                <DialogHeader className="items-center gap-4">
                  <DialogTitle className="text-2xl">{`Create ${buttonText}`}</DialogTitle>
                  <DialogDescription className="text-md">
                    Click on the button below to create a anonymous group
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button className="text-md w-full">Create</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-pOrange hover:bg-background hover:text-pOrange hover:outline">
                {`Join ${buttonText}`}
              </DialogTrigger>
              <DialogContent className="w-[90%] rounded-lg">
                <DialogHeader className="items-center">
                  <DialogTitle className="text-2xl">{`Join ${buttonText}`}</DialogTitle>
                  <DialogDescription className="text-md">
                    Enter the generated room id
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-row gap-2">
                  <Label htmlFor="roomID" className="sr-only"></Label>
                  <Input
                    type="text"
                    id="roomID"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                    autoComplete="on"
                  ></Input>
                  <Button className="text-md">Join</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

// Export the ChatCard component as default
export default ChatCard;
