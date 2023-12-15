"use client";
import { ChatBody } from "@/app/(chat)/components";
import { RoomsCollectionRef } from "@/firebase";
import { onSnapshot } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

function Room() {
  const { id } = useParams();
  useEffect(() => {
    const unsubcribe = onSnapshot(RoomsCollectionRef, (snapshot: any) => {
      let newData: any = [];
      snapshot.forEach((doc: any) => {
        if (doc.id === `${id}`) {
          newData.push(doc.data().Messages.Message);
        }
      });
      newData.forEach((element: any) => {
        console.log(element);
      });
    });
    return () => {
      unsubcribe();
    };
  }, []);
  return (
    <>
      <div>
        <ChatBody />
      </div>
    </>
  );
}

export default Room;
