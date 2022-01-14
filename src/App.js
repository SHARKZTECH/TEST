import "./styles.css";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import Messages from "./components/Messages";
import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState([]);
  const getMessage = (message) => {
    alert(message);
  };
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Messages />
        <InputArea getMessage={getMessage} />
      </div>
    </div>
  );
}
