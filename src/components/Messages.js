import Message from "./Message";

const Messages = () => {
  const msgs = [
    { name: "sh", msg: "hii" },
    { name: "s", msg: "hii 2" },
    { name: "sh", msg: "hii 3" },
    { name: "sh", msg: "hii 4" },
    { name: "s", msg: "hii 6" }
  ];
  return (
    <div className="msgs">
      {msgs.map((msg) => (
        <Message msg={msg} />
      ))}
    </div>
  );
};

export default Messages;
