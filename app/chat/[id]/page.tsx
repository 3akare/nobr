import { InputBar, MessageBubble } from "./components/index";

const page = () => {
  const messages = [true, false, false, true, true, false];
  return (
    <main className="container mx-auto flex items-center flex-col justify-end p-4">
      <section className="flex text-ellipsis self-start justify-self-start w-full h-full gap-3 flex-col">
        {messages.map((item, index) => {
          return <MessageBubble isRight={item} key={index} />;
        })}
        <div className="h-24 w-full"></div>
      </section>
      <InputBar />
    </main>
  );
};

export default page;
