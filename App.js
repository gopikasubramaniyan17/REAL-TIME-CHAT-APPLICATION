import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5000");

function App() {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("messageHistory", (messages) => {
      setChat(messages);
    });

    socket.on("receiveMessage", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off();
  }, []);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const msgData = {
      user: username,
      text: message,
      time: new Date().toLocaleTimeString(),
    };

    
    setChat((prev) => [...prev, msgData]);

    socket.emit("sendMessage", msgData);
    setMessage("");
  };

  
  if (!loggedIn) {
    return (
      <div className="login-container">
        <h2>💬 Chat App</h2>
        <input
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => username && setLoggedIn(true)}>
          Join Chat
        </button>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <div className="chat-header">Welcome, {username} 👋</div>

      <div className="chat-box">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={
              msg.user === username
                ? "chat-message own"
                : "chat-message other"
            }
          >
            <strong>{msg.user}</strong>
            <p>{msg.text}</p>
            <small>{msg.time}</small>

            {}
            <button
              className="reply-btn"
              onClick={() =>
                setMessage(`Replying to ${msg.user}: `)
              }
            >
              Reply
            </button>
          </div>
        ))}
      </div>

      <div className="input-box">
        <input
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
