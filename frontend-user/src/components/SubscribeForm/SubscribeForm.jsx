import React from "react";
import { useNavigate } from "react-router-dom";

const SubscribeForm = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/daily-quote"); 
  };

  return (
    <div
      style={{
        margin: "2.5rem auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          padding: "0.9rem 1.6rem",
          borderRadius: "14px",
          border: "none",
          backgroundColor: "#fffde7", 
          color: "#4b3b2b",
          fontSize: "1.05rem",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 10px 22px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.12)";
        }}
      >
        Get a Quote Daily💌
      </button>
    </div>
  );
};

export default SubscribeForm;
