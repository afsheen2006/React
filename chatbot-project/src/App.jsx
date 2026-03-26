import { useState } from "react";
import  ChatMessages  from "./components/ChatMessages";
import { ChatInput } from "./components/ChatInput";
import dayjs from "dayjs";
import "./App.css";



function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "Hello chatBot", sender: "user", id: "id1" },
    { message: "Hello, How can I help you?", sender: "robot", id: "id2" },
    { message: "Can I get today's date?", sender: "user", id: "id3" },
    {
      message: "Today's date is " + dayjs().format("MMMM D, YYYY"),
      sender: "robot",
      id: "id4",
    },
  ]);

  return (
    <div className="chat-container">
      <h1 className="chat-title">CHATBOT</h1>

      <ChatMessages chatMessages={chatMessages} />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />

      <footer>Made with ❤️ By Afsheen</footer>
    </div>
  );
}

export default App;