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
      This is a message from the future.... :0!
      <small className="block self-end p-1 text-right">
        <time>12:00</time>
      </small>
    </p>
  );
};
export default MessageBubble;
