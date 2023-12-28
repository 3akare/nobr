import { InputBar, MessageBubble, ScrollDiv } from ".";

// Define the type for a message
type Message = {
  messages: any[];
  onMessageSubmit: Function;
};

// ChatBody component
// It takes an object of type Message as a prop
// It renders a list of MessageBubble components based on the messages prop
// It also renders an InputBar component at the end
const ChatBody = ({ messages, onMessageSubmit }: Message) => {
  return (
    <main className="container mx-auto flex items-center flex-col justify-end p-4 max-w-4xl">
      <section className="flex text-ellipsis self-start justify-self-start w-full h-full gap-3 flex-col">
        {/* Check if messages is an array and has at least one item */}
        {Array.isArray(messages) &&
          messages.length > 0 &&
          // Map over the messages array and render a MessageBubble for each item
          messages.map((item: any, index: number) => (
            <MessageBubble item={item} key={index} />
          ))}
        <ScrollDiv messages={messages} />
      </section>
      {/* Render the InputBar component */}
      <InputBar onMessageSubmit={onMessageSubmit} />
    </main>
  );
};

export default ChatBody;
