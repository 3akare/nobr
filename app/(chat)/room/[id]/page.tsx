"use client";
import { ChatBody } from "@/app/(chat)/components";
import { database } from "@/firebase";
import {
  onSnapshot,
  query,
  orderBy,
  collection,
  addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const Room = () => {
  // Get the id from the router object
  const { id } = useParams();
  const messagesRef = collection(database, `rooms/${id}/messages`);
  // Initialize messages state with a specific type
  const [messages, setMessages] = useState<any[]>([]);
  useEffect(() => {
    const q = query(messagesRef, orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let messages: any = [];
      snapshot.forEach((doc) => {
        // Ensure the data is an object before setting it to state
        if (typeof doc.data() === "object" && doc.data() !== null) {
          messages.push(doc.data());
        }
      });
      setMessages(messages);
    });
    // Clean up the onSnapshot listener
    return () => unsubscribe();
  }, [id]);

  const handleSendMessage = (value: string) => {
    addDoc(messagesRef, {
      timestamp: Date.now(),
      messages: value,
    });
  };
  return (
    <div>
      <ChatBody messages={messages} onMessageSubmit={handleSendMessage} />
    </div>
  );
};

export default Room;
