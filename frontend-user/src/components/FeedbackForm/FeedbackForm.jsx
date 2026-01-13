import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; 
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      toast.error("Please enter a message."); 
      return;
    }

    setLoading(true);
    try {
      await axios.post("https://kind-and-cruel-backend.onrender.com/api/feedback", {
        name: name.trim() || "Anonymous",
        message: message.trim(),
      });

      toast.success("Message sent successfully 💛"); 
      setName("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message."); 
    }
    setLoading(false);
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      
      <Toaster position="top-right" reverseOrder={false} />

      <h3>Say something to the creator 💌</h3>

      <p className="feedback-note">
        All messages sent here can be read only by the admin.  
        You can always choose to stay anonymous.  
        Your little words matter ✨
      </p>

      <input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Write your message here… 💭"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send 💛"}
      </button>
    </form>
  );
};

export default FeedbackForm;
