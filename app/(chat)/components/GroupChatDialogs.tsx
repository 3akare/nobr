"use client";
import { Button } from "@/app/components/ui/button";
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
import { database } from "@/firebase";
import { Label } from "@radix-ui/react-label";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Loading from "@images/loading.svg";
import Image from "next/image";

export const CreateGroupChatDialog = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");

  // State to track the status of room creation
  const [status, setStatus] = useState("idle");

  // Function to create a query string
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  // Function to create a room
  const createRoomFunction = async () => {
    setStatus("loading"); // Set status to loading when the function starts
    const roomRef = await addDoc(collection(database, "rooms"), {
      dateCreated: Date.now(),
    });
    router.push(`${pathname}?${createQueryString("roomId", roomRef.id)}`);
    setStatus("done"); // Set status to done when the function ends
  };

  // Render different components based on the status
  const renderButtonContent = () => {
    switch (status) {
      case "idle":
        return (
          <Button onClick={createRoomFunction} className="text-md w-full">
            Create
          </Button>
        );
      case "loading":
        return (
          <div className="inline-flex items-center justify-center w-full">
            <Image src={Loading} alt="Loading" className="w-10 h-10" />
          </div>
        );
      case "done":
        return roomId && roomId.length > 0 ? (
          <Link
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-md w-full"
            href={`/room/${roomId}`}
          >
            Proceed to Room.
          </Link>
        ) : null;
      default:
        return null;
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 ring-primary hover:ring-primary/90">
        Create Group
      </DialogTrigger>
      <DialogContent className="w-[90%] rounded-lg">
        <DialogHeader className="items-center gap-4">
          <DialogTitle className="text-2xl">Create Group</DialogTitle>
          <DialogDescription className="text-md">
            Click on the button below to create a anonymous group
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>{renderButtonContent()}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const JoinGroupChatDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-pOrange hover:bg-background hover:text-pOrange hover:outline">
        Join Group
      </DialogTrigger>
      <DialogContent className="w-[90%] rounded-lg">
        <DialogHeader className="items-center">
          <DialogTitle className="text-2xl">Join Group</DialogTitle>
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
  );
};
