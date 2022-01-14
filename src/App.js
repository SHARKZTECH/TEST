import "./styles.css";
import Header from "./components/Header";
import InputArea from "./components/InputArea";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <InputArea />
      </div>
    </div>
  );
}
