import React from "react";
import { useNavigate } from "react-router-dom";
import "./ColorGrid.css";

const categories = [
  { name: "Bible Verse", color: "#5DADE2", route: "/category/bible" },
  { name: "Strong & Motivational", color: "#58D68D", route: "/category/strong" },
  { name: "Comfort & Kind", color: "#EC7063", route: "/category/comfort" },
  { name: "Say to Someone", color: "#f7d13b", route: "/category/share" },
];

const ColorGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="color-grid-section" id="color-grid">

      <div className="color-grid-intro-card">
        <p className="color-grid-intro">
          What color did you get? Click the colors to explore more quotes that might uplift, comfort, or inspire you. 💌✨
        </p>
      </div>

      <div className="color-grid">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="color-card"
            style={{ backgroundColor: cat.color }}
            onClick={() => navigate(cat.route)}
          />
        ))}
      </div>
    </section>
  );
};

export default ColorGrid;
