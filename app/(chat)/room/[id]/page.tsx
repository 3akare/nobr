// Import necessary modules and components
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

// Define a type for the messages
type Message = {
  timestamp: number;
  message: string;
};

const Room = () => {
  // Get the id from the router object
  const { id } = useParams();
  // Initialize messages state with a specific type
  const [messages, setMessages] = useState<Message[]>([]);

  // Function to handle sending of messages
  const handleSendMessage = useCallback(
    (value: string) => {
      // Reference to the messages collection in the database
      const messagesRef = collection(database, `rooms/${id}/messages`);
      // Add a new document to the collection with the current timestamp and message
      addDoc(messagesRef, {
        timestamp: Date.now(),
        messages: value,
      });
    },
    [id] // Recreate the function whenever the id changes
  );

  // Effect to fetch messages from the database
  useEffect(() => {
    // Reference to the messages collection in the database
    const messagesRef = collection(database, `rooms/${id}/messages`);
    // Subscribe to the collection and update the state whenever it changes
    const unsubscribe = onSnapshot(
      query(messagesRef, orderBy("timestamp", "asc")),
      (snapshot) => {
        // Map the snapshot documents to the Message type and update the state
        const newMessages = snapshot.docs.map((doc) => doc.data() as Message);
        setMessages(newMessages);
      }
    );
    // Unsubscribe from the collection when the component unmounts or the id changes
    return () => unsubscribe();
  }, [id]); // Run the effect when the id changes

  // Render the chat body with the messages and the send message function
  return (
    <main>
      <ChatBody messages={messages} onMessageSubmit={handleSendMessage} />
    </main>
  );
};

export default Room;
