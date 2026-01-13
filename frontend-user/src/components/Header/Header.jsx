import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Main header text inside a semi-transparent container */}
      <div className="header-main-text">
        <h1 className="header-title">
  Kind & Cruel{' '}
  <a 
    href="https://kindandcruel-admin.vercel.app/"
    target="_blank" 
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    ✨
  </a>
</h1>

        <p className="header-subtitle">
          In a world where you can be anything,
be most kind andleast cruel to yourself. 🌸
        </p>
      </div>

      {/* About card */}
      <section className="header-about-card">
        <h2 className="about-title">About ❤️</h2>
        <p className="about-text">
          Back in school, I loved writing little notes and giving them to people.  
          Sometimes to friends, sometimes to strangers. Seeing them smile..  
          that always stayed with me. ✨
        </p>
        <p className="about-text">
          Somewhere along the way, college happened and that habit slowly stopped.  
          <strong> Kind & Cruel</strong> is my way of starting again with a tech-twist, 
          sharing warmth, strength, and gentle reminders through words.
        </p>
        <p className="about-text end-line">
          If you’re here, I hope you find something that feels like a quiet hug.  
          Have a nice day. 🌸
        </p>
      </section>
    </header>
  );
};

export default Header;
