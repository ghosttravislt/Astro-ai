import { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const handlePrompt = async () => {
    if (!prompt.trim()) return; // ignore empty input
    console.log(prompt);
    const res = await fetch("https://genkit-backend.vercel.app/", {
      method: "POST", // important: must be POST
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }), // send data
    });

    const data = await res.json();
    console.log(data);
    setOutput(data.output || data.error);
  };

  return (
    <>
      <div className="chat-container">
        <div className="chat-header">
          <div className="ai-avatar">🤖</div>
          <div className="chat-info">
            <h2>Chat AI Assistant</h2>
            <p>Always here to help you</p>
          </div>
          <div className="status-indicator"></div>
        </div>

        <div className="chat-messages" id="chatMessages">
          <div className="message ai">
            <div className="message-avatar">🤖</div>
            <div className="message-bubble">{output}</div>
          </div>
        </div>

        <div className="typing-indicator" id="typingIndicator">
          <div className="typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="chat-input-container">
          <div className="chat-input-wrapper">
            <textarea
              className="chat-input"
              id="chatInput"
              placeholder="Type your message here..."
              rows="1"
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
            ></textarea>
            <button
              className="send-button"
              id="sendButton"
              onClick={handlePrompt}
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
