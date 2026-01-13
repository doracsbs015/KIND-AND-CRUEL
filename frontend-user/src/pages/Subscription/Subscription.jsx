import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const containerRef = useRef(null); // for scroll fix

  useEffect(() => {
    // Scroll container slightly below top on mount
    if (containerRef.current) {
      const yOffset = -20; // gap from top
      const y =
        containerRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !agreed) {
      toast.error("Please enter your email and accept terms.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://kind-and-cruel-backend.onrender.com/api/subscribers/subscribe",
        { email }
      );
      toast.success(res.data.message);
      setEmail("");
      setAgreed(false);
    } catch (err) {
      if (err.response?.status === 409) {
        toast.error("Email already subscribed.");
      } else {
        toast.error(err.response?.data?.message || "Subscription failed.");
      }
    }
    setLoading(false);
  };

  return (
    <div className="subscription-page">
      <Toaster position="top-right" />

      <div className="subscription-container" ref={containerRef}>
        <h2>Get a Code Daily ✨</h2>

        <p className="subscription-note">
          Subscribe with your email to receive uplifting messages.
          Messages are sent whenever admin posts.
          You can unsubscribe anytime via the email link.
        </p>

        <form className="subscription-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <label htmlFor="agree">
              I agree to receive emails and accept the terms.
            </label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>

      <div className="back-button-wrapper">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>

      {/* Inline CSS */}
      <style>{`
        .subscription-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 1rem;
          background-color: #fdfaf6;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .subscription-container {
          max-width: 480px;
          width: 100%;
          background-color: #fff6f0;
          padding: 2rem 2.5rem;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          text-align: center;
        }

        .subscription-container h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #4b3b2b;
        }

        .subscription-note {
          font-size: 0.95rem;
          color: #5c4a3c;
          margin-bottom: 1.8rem;
          line-height: 1.6;
        }

        .subscription-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .subscription-form input[type="email"] {
          padding: 0.9rem 1rem;
          border-radius: 12px;
          border: 1px solid #ccc;
          font-size: 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          color: #4b3b2b;
          gap: 0.5rem;
        }

        .subscription-form button {
          padding: 0.9rem 1rem;
          border-radius: 12px;
          border: none;
          background-color: #5DADE2;
          color: white;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, background-color 0.2s;
        }

        .subscription-form button:hover {
          background-color: #549acb;
          transform: translateY(-2px);
        }

        .subscription-form button:disabled {
          background-color: #a3cbe5;
          cursor: not-allowed;
        }

        .back-button-wrapper {
          margin-top: 2rem;
        }

        .back-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 10px;
          border: none;
          background-color: #fabf37;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .back-btn:hover {
          background-color: #f5e47b;
        }

        @media (max-width: 500px) {
          .subscription-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Subscription;
