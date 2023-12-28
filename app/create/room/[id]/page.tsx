// Import necessary modules and components
"use client";
import { ChatBody } from "@/app/create/ChatComponents";
import { database } from "@/firebase";
import {
  onSnapshot,
  query,
  orderBy,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { useUserSetup } from "@/lib/zustand";

// Define a type for the messages
type Message = {
  timestamp: number;
  message: string;
  userID: string;
};

const Room = () => {
  // Get the id from the router object
  const { id } = useParams();
  // Initialize messages state with a specific type
  const [messages, setMessages] = useState<Message[]>([]);

  // Get the user from the Zustand store
  const user: any = useUserSetup();

  // Function to handle sending of messages
  // This function is memoized with useCallback to prevent unnecessary re-renders
  const handleSendMessage = useCallback(
    (value: string) => {
      // Reference to the messages collection in the database
      const messagesRef = collection(database, `rooms/${id}/messages`);
      // Add a new document to the collection with the current timestamp, message, and user ID
      addDoc(messagesRef, {
        timestamp: Date.now(),
        messages: value,
        userID: user.userID,
      });
    },
    [id, user.userID] // Recreate the function whenever the id or user.userID changes
  );

  // Function to create a new user if userID is null
  const createUserFunction = async (user: any) => {
    if (user.userID === null) {
      const newUser = await addDoc(collection(database, "users"), {
        timeStamp: serverTimestamp(),
      });
      user.setUserID(newUser.id);
    }
  };

  // On component mount, check if user exists or needs to be created
  useEffect(() => {
    createUserFunction(user);
  }, [user]);

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
