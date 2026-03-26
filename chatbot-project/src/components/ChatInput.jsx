import { useState } from "react";
import { chatbot } from "supersimpledev";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [InputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    if (!InputText.trim()) return;

    const newChatMessages = [
      ...chatMessages,
      {
        message: InputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = chatbot.getResponse(InputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className="chat-input">
      <input
        placeholder="Send a message to ChatBot..."
        onChange={saveInputText}
        value={InputText}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}