"use client";
import { useEffect, useState } from "react";
import { UsersCollectionRef } from "@/firebase";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

function useUserSetup() {
  const [displayMsg, setDisplayMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function setupID() {
      const userChatID = localStorage.getItem("userChatID");
      if (!userChatID) {
        setDisplayMsg("Setting Up Anon Profile...");
        const newUserDocRef = await addDoc(UsersCollectionRef, {
          online: true,
          active: true,
          timestamp: serverTimestamp(),
        });

        if (newUserDocRef) {
          localStorage.setItem("userChatID", newUserDocRef.id);

          // Once setup is completed, redirect to the "/chat/${chatID}" route
          router.replace(`/chat/${newUserDocRef.id}`);

          return {
            id: newUserDocRef.id,
            online: true,
            active: true,
            timestamp: serverTimestamp(),
          };
        }
      } else {
        // If userChatID exists, you can perform additional actions or updates here
        // For simplicity, let's assume no additional updates needed
        setDisplayMsg("Logging you in...");
        router.replace(`/chat/${userChatID}`);
      }
    }

    // Trigger the setup process
    setupID();
  }, [router]);

  return displayMsg;
}

export default useUserSetup;
