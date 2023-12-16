"use client";

import { Button } from "@/app/components/ui/button";
import { database } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

const CreateRoom = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Get the roomId from the searchParams object
  const roomId = searchParams.get("roomId");

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
    const roomRef = await addDoc(collection(database, "rooms"), {
      dateCreated: Date.now(),
    });
    // Push the new route to the router
    router.push(`${pathname}?${createQueryString("roomId", roomRef.id)}`);
  };

  return (
    <main className="h-[calc(100vh-228px)] flex items-center justify-center flex-col gap-2">
      <Button onClick={() => createRoomFunction()}>Create Room</Button>

      {roomId && roomId.length > 0 ? (
        <Link href={`/room/${roomId}`}>Room Created!. Proceed to Room.</Link>
      ) : (
        <></>
      )}
    </main>
  );
};

export default CreateRoom;
