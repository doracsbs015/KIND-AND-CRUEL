import React, { useState } from "react";
import axios from "axios";
import { FaRegCopy } from "react-icons/fa"; // copy icon
import toast, { Toaster } from "react-hot-toast"; // <-- import toast
import "./RandomMessage.css";

// Map categories to pastel colors
const categoryColors = {
  bible: "#b0d5f6",    // light blue
  strong: "#b3f8c3",   // light green
  comfort: "#f7b4ba",  // light red/pink
  share: "#f8e39f",    // light yellow
};

const RandomMessage = () => {
  const [messageData, setMessageData] = useState(null);

  const fetchRandomMessage = async () => {
    try {
      const res = await axios.get("https://kind-and-cruel-backend.onrender.com/api/messages/random");
      setMessageData(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch message."); // <-- replaced alert
    }
  };

  const copyToClipboard = () => {
    if (messageData) {
      navigator.clipboard.writeText(messageData.text);
      toast.success("Message copied to clipboard!"); // <-- replaced alert
    }
  };

  // Get background color based on category dynamically
  const getCategoryColor = (category) => {
    if (!category) return "#f5f0eb"; // default pastel brown
    const trimmedCategory = category.trim(); // remove whitespace
    return categoryColors[trimmedCategory] || "#f5f0eb";
  };

  return (
    <div className="random-message-wrapper">
      {/* Toaster for toast messages */}
      <Toaster position="top-right" reverseOrder={false} />

      <button className="random-btn" onClick={fetchRandomMessage}>
        Get Random Message
      </button>

      {messageData && (
        <div
          className="random-message-card"
          style={{ backgroundColor: getCategoryColor(messageData.category) }}
        >
          <p className="random-message-text">{messageData.text}</p>

          <div className="card-footer">
            <span className="random-message-category">{messageData.category}</span>
            <FaRegCopy className="copy-icon" onClick={copyToClipboard} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomMessage;
