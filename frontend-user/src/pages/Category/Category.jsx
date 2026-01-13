import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaRegCopy } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast"; // <--- import toast
import "./Category.css";

const CATEGORY_CONFIG = {
  bible: {
    title: "Bible Verses ✝️",
    intro: "Words of faith, hope, and quiet reassurance.",
    bg: "#EAF2FB",
    img: "/bible.jpg",
  },
  strong: {
    title: "Strong & Motivational 💪",
    intro: "Grounding words to steady you and keep you moving.",
    bg: "#E9F7EF",
    img: "/strong.jpg",
  },
  comfort: {
    title: "Comfort & Kind 🤍",
    intro: "Gentle reminders for heavy days.",
    bg: "#FDEDEC",
    img: "/comfort.jpg",
  },
  share: {
    title: "Say to Someone 🌼",
    intro: "Messages meant to be shared with someone you care about.",
    bg: "#FEF9E7",
    img: "/share.jpg",
  },
};

const Category = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  const config = CATEGORY_CONFIG[type];

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(
          `https://kind-and-cruel-backend.onrender.com/api/messages/category/${type}`
        );
        setMessages(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMessages();
  }, [type]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [type]);

  // <-- updated copyText to use toast
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied ✨");
  };

  if (!config) return <p>Category not found</p>;

  return (
    <div className="category-page">
      {/* Toaster for toast messages */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header */}
      <div className="category-header">
        <button
          className="back-btn"
          onClick={() => navigate("/", { state: { scrollToGrid: true } })}
        >
          ← Back
        </button>

        <img src={config.img} alt={config.title} className="category-header-img" />

        <h2>{config.title}</h2>
        <p>{config.intro}</p>
      </div>

      {/* Messages */}
      <div className="category-list">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className="category-card"
            style={{ backgroundColor: config.bg }}
          >
            <p className="category-text">{msg.text}</p>

            <div className="category-footer">
              <span className="category-label">{msg.category}</span>
              <FaRegCopy
                className="copy-icon"
                onClick={() => copyText(msg.text)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
