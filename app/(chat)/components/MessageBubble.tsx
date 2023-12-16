// Import necessary modules
import React from "react";
// Define the MessageBubble component
// It takes a prop named item of type string
// It renders a paragraph element with the item prop as its content
// It also renders a small element with a time element as its content
const MessageBubble = React.memo(({ item }: { item: string }) => {
  return (
    <p className="p-2 px-4 w-fit rounded-xl self-end bg-pOrange dark:text-background max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl font-medium">
      {item}
      <small className="block self-end p-1 text-right">
        <time>12:00</time>
      </small>
    </p>
  );
});

// Export the MessageBubble component as default
MessageBubble.displayName = "MessageBubble";
export default MessageBubble;
