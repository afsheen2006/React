import robot from "../assets/robot.png";
import user from "../assets/user.png";

export function ChatMessage({ message, sender }) {
  return (
    <div className={`message-row ${sender}`}>
      <img
        className="avatar"
        src={sender === "robot" ? robot : user}
        alt={sender}
      />

      <div className="chat-bubble">{message}</div>
    </div>
  );
}