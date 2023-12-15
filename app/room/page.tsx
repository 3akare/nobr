"use client";

import { database } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

const CreateRoom = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const createRoomFunction = async () => {
    await addDoc(collection(database, "rooms"), {
      dateCreated: Date.now(),
    }).then((value) => {
      router.push(pathname + "?" + createQueryString("roomId", value.id));
    });
  };
  
  return (
    <div className="container">
      <button onClick={() => createRoomFunction()}>Create Room</button>
      {roomId && roomId.length > 0 ? (
        <Link href={`/room/${roomId}`}>Room Created!. Proceed to Room.</Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CreateRoom;
