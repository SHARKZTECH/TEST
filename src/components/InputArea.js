import { useState } from "react";

const InputArea = ({ getMessage }) => {
  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    getMessage(msg);
    setMsg("");
  };
  return (
    <div className="inputarea">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="input"
          placeholder="Type your message here.."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="btn">send</button>
      </form>
    </div>
  );
};
export default InputArea;
