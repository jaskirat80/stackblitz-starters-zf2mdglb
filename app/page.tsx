"use client";

import { useState } from "react";

export default function Home() {
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 });
  const [yesScale, setYesScale] = useState(1);
  const [accepted, setAccepted] = useState(false);

  const moveNoButton = () => {
    const randomTop = Math.random() * 300 - 150;
    const randomLeft = Math.random() * 300 - 150;

    setNoPosition({ top: randomTop, left: randomLeft });
    setYesScale((prev) => prev + 0.2);
  };

  if (accepted) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-500 text-white text-4xl font-bold animate-pulse">
        ❤️ That’s the right choice ❤️
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-br from-red-500 via-pink-500 to-red-700 text-white">

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl animate-bounce opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-12 z-10 text-center">
        Will you be my Valentine? ❤️
      </h1>

      <div className="flex gap-8 z-10 relative">
        <button
          onClick={() => setAccepted(true)}
          style={{ transform: `scale(${yesScale})` }}
          className="bg-white text-red-600 px-8 py-4 rounded-full text-xl font-bold shadow-lg transition-all duration-300"
        >
          Yes 💖
        </button>

        <button
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={{
            position: "relative",
            top: noPosition.top,
            left: noPosition.left,
          }}
          className="bg-black text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg transition-all duration-200"
        >
          No 😢
        </button>
      </div>
    </div>
  );
}