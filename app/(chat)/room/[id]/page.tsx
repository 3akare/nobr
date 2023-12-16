"use client";
import { ChatBody } from "@/app/(chat)/components";
import { RoomsCollectionRef } from "@/firebase";
import { onSnapshot, doc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Get a reference to the Firestore service
const firestore = getFirestore();

function Room() {
  // Use the useRouter hook to get the router object
  const { id } = useParams();
  // Get the id from the router object
  // Initialize messages state
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Create a reference to the document in the RoomsCollectionRef
    const docRef = doc(firestore, `${RoomsCollectionRef.path}/${id}`);
    // Subscribe to changes in the document
    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      // Get the document data
      const data = docSnapshot.data();
      // Check if data is defined
      if (data) {
        // Update the messages state with the new data
        setMessages(data.Messages);
      }
    });
    // Unsubscribe from changes when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, [id]); // Add id to the dependency array to re-run the effect when id changes

  return (
    <div>
      <ChatBody messages={messages} />
    </div>
  );
}

export default Room;
