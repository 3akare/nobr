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
import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";

const Room = () => {
  // Get the id from the router object
  const { id } = useParams();
  // Initialize messages state with a specific type
  const [messages, setMessages] = useState<any[]>([]);

  // Define a function to handle sending messages
  const handleSendMessage = useCallback((value: string) => {
    const messagesRef = collection(database, `rooms/${id}/messages`);
    addDoc(messagesRef, {
      timestamp: Date.now(),
      messages: value,
    });
  }, [id]);

  useEffect(() => {
    // Create a reference to the messages collection in Firestore
    const messagesRef = collection(database, `rooms/${id}/messages`);
    // Create a query to get messages ordered by timestamp
    const q = query(messagesRef, orderBy("timestamp", "asc"));
    // Set up a listener for changes in the Firestore collection
    const unsubscribe = onSnapshot(q, (snapshot) => {
      // Create an array to hold the new messages
      let newMessages: any = [];
      snapshot.forEach((doc) => {
        // Ensure the data is an object before setting it to state
        if (typeof doc.data() === "object" && doc.data() !== null) {
          newMessages.push(doc.data());
        }
      });
      // Update the messages state with the new messages
      setMessages(newMessages);
    });
    // Clean up the onSnapshot listener when the component unmounts
    return () => unsubscribe();
  }, [id]); // Run the effect when the id changes

  return (
    <div>
      {/* Render the ChatBody component with the messages and the handleSendMessage function */}
      <ChatBody messages={messages} onMessageSubmit={handleSendMessage} />
    </div>
  );
};

export default Room;