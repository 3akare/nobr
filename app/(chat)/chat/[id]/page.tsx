"use client";
// Import necessary components
import { ChatBody } from "../../components";

// Define a constant array for messages
const messages = [
  { messages: "hello", timestamp: Date.now() },
  { messages: "Get the ", timestamp: Date.now() },
  { messages: "Fuck", timestamp: Date.now() },
  { messages: "Out of", timestamp: Date.now() },
  { messages: "Here", timestamp: Date.now() },
];
const handleSubmit = (value: string) => {
  console.log(`${value}`);
};

// Define the Page component
// It renders a ChatBody component with a messages prop
const Page = () => {
  return <ChatBody messages={messages} onMessageSubmit={handleSubmit} />;
};

// Export the Page component as default
export default Page;
