const Message = ({ msg }) => {
  return (
    <div className={`msg ${msg.name === "sh" ? "right" : ""} `}>
      <p>{msg.msg}</p>
    </div>
  );
};

export default Message;
