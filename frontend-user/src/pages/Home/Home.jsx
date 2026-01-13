import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header/Header";
import ColorGrid from "../../components/ColorGrid/ColorGrid";
import RandomMessage from "../../components/RandomMessage/RandomMessage";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm";
import "./Home.css";


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToGrid) {
      const grid = document.getElementById("color-grid");
      if (grid) grid.scrollIntoView({ behavior: "smooth" });

      // remove only the scrollToGrid flag so it doesn't re-trigger
      const newState = { ...location.state };
      delete newState.scrollToGrid;
      window.history.replaceState(newState, document.title);
    }
  }, [location]);

  return (
    <div className="home-container">
      <Header />
      <ColorGrid />
      <RandomMessage />
      <FeedbackForm />
      <SubscribeForm />
      <footer className="home-footer">
        &copy; {new Date().getFullYear()} Kind & Cruel. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
 
