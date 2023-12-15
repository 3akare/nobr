import React from "react";
import { InputBar, MessageBubble } from ".";

const ChatBody = () => {
  const messages = [true, false];
  return (
    <main className="container mx-auto flex items-center flex-col justify-end p-4 max-w-4xl">
      <section className="flex text-ellipsis self-start justify-self-start w-full h-full gap-3 flex-col">
        {messages.map((item, index) => (
          <MessageBubble isRight={item} key={index} />
        ))}
        <div className="h-24 w-full"></div>
      </section>
      <InputBar />
    </main>
  );
};

export default ChatBody;
