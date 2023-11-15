const MessageBubble = ({ isRight }: { isRight: true | false }) => {
  return (
    <p
      className={`p-2 px-4 w-fit rounded-xl ${
        isRight
          ? "self-end bg-pOrange dark:text-background"
          : "self-start bg-muted text-foreground"
      } max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl font-medium`}
    >
      {!isRight && <span className="block font-bold">Olawale</span>}
      hello world hello world hello world hello world hello world hello world
      hello worldlorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Natus asperiores cum quia, iste ullam distinctio adipisicing elit. Natus
      asperiores cum quia, iste ullam distinctio adipisicing elit. Natus
      asperiores cum quia, iste ullam distinctio adipisicing elit. Natus
      asperiores cum quia, iste ullam distinctio adipisicing elit. Natus
      asperiores cum quia, iste ullam distinctio
      <small className="block self-end p-1 text-right">
        <time>12:00</time>
      </small>
    </p>
  );
};
export default MessageBubble;
