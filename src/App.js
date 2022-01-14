import "./styles.css";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import Messages from "./components/Messages";
import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const getMessage = (message) => {
    setMessages([
      ...messages,
      {
        name: "sh",
        msg: message
      }
    ]);
  };
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Messages messages={messages} />
        <InputArea getMessage={getMessage} />
      </div>
    </div>
  );
}
