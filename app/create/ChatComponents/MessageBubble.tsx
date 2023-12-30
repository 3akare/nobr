// Import necessary modules
import { useUserSetup } from "@/lib/zustand";
import React from "react";

// Define an interface for item
interface Item {
  messages: string;
  timestamp: string;
  userID: string;
}

// Define the MessageBubble component
// It takes a prop named item of type Item
// This component is memoized to prevent unnecessary re-renders
const MessageBubble = React.memo(({ item }: { item: Item }) => {
  // Get the user from the Zustand store
  const user: any = useUserSetup();

  // Destructure the item prop
  const { messages, timestamp } = item;

  // Convert the timestamp to a Date object
  const date = new Date(timestamp);

  // Format the time in 12-hour format
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Determine the message bubble style based on the user ID
  const bubbleStyle =
    item.userID === user.userID
      ? "p-2 px-4 w-auto rounded-xl self-end bg-pOrange dark:text-background max-w-[80%] font-medium overflow-wrap break-word word-wrap break-word word-break break-all text-pretty"
      : "p-2 px-4 w-auto rounded-xl self-start bg-muted dark:text-foreground max-w-[80%] font-medium overflow-wrap break-word word-wrap break-word word-break break-all";

  // Render the message bubble
  return (
    <p className={bubbleStyle}>
      <div className="font-bold text-xs">
        {`stranger-` + `${item.userID}`.slice(-7)}
      </div>
      {messages.toString()}
      <small className="block self-end p-1 text-right text-[0.7rem]">
        <time>{`${time}`}</time>
      </small>
    </p>
  );
});

// Set the display name for the MessageBubble component
// This is useful for debugging in React DevTools
MessageBubble.displayName = "MessageBubble";

// Export the MessageBubble component as default
export default MessageBubble;
