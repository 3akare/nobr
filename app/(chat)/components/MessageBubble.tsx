// Import necessary modules
import React from "react";
// Define an interface for item
interface Item {
  messages: string;
  timestamp: string;
}

// Define the MessageBubble component
// It takes a prop named item of type Item
const MessageBubble = React.memo(({ item }: { item: Item }) => {
  const { messages, timestamp } = item;
  const date = new Date(timestamp);
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <p className="p-2 px-4 w-auto rounded-xl self-end bg-pOrange dark:text-background max-w-[80%] font-medium overflow-wrap break-word word-wrap break-word word-break break-all">
      {messages.toString()}
      <small className="block self-end p-1 text-right text-[0.7rem]">
        <time>{`${time}`}</time>
      </small>
    </p>
  );
});

// Export the MessageBubble component as default
MessageBubble.displayName = "MessageBubble";
export default MessageBubble;
