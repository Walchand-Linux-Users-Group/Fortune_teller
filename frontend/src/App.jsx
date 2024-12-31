import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fortune, setFortune] = useState("");
  const [isRevealed, setIsRevealed] = useState(false);

  const revealFortune = async () => {
    const response = await fetch("http://localhost:5000/api/fortune");
    const data = await response.json();
    setFortune(data.fortune);
    setIsRevealed(true);
  };

  // Generate random bubble styles
  const generateRandomStyles = () => {
    return Array.from({ length: 20 }).map(() => ({
      "--random-x": (Math.random() - 0.5) * 2, // Random value between -1 and 1
    }));
  };

  return (
    <div className="app">
      <div className="bubbles">
        {generateRandomStyles().map((style, index) => (
          <div key={index} className="bubble" style={style}></div>
        ))}
      </div>
      <div className="background">
        <div className="container rounded-md">
          <h1 className="title">
            <span className="icon">🔮</span> Cosmic Fortune Teller{" "}
            <span className="icon">🔮</span>
          </h1>
          <p className="description">
            Peer into the cosmic void and uncover your destiny.
          </p>
          <button className="reveal-button" onClick={revealFortune}>
            Tap to Reveal
          </button>
          {isRevealed && <div className="fortune">{fortune}</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
