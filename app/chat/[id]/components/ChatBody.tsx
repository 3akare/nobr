"use client";
import React, { useEffect } from "react";
import { InputBar, MessageBubble } from ".";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "@/firebase";

const ChatBody = () => {
  async function confirmUser() {
    const userChatID = localStorage.getItem("userChatID");
    const userDocRef = doc(database, "users", `${userChatID}`);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      await updateDoc(userDocRef, {
        exists: true,
      });
      return userDocRef;
    }
  }
  useEffect(() => {
    async function setup() {
      confirmUser();
    }
    setup();
  }, []);

  const messages = [true, false];
  return (
    <main className="container mx-auto flex items-center flex-col justify-end p-4">
      <section className="flex text-ellipsis self-start justify-self-start w-full h-full gap-3 flex-col">
        {messages.map((item, index) => (
          <MessageBubble isRight={item} key={index} />
        ))}
        <div className="h-24 w-full"></div>
      </section>
      <InputBar />
    </main>
  );
};

export default ChatBody;
