"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function Home() {
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 });
  const [yesScale, setYesScale] = useState(1);
  const [noScale, setNoScale] = useState(1);
  const [accepted, setAccepted] = useState(false);

  const moveNoButton = () => {
    const randomTop = Math.random() * 400 - 200;
    const randomLeft = Math.random() * 400 - 200;

    setNoPosition({ top: randomTop, left: randomLeft });
    setYesScale((prev) => prev + 0.25);
    setNoScale((prev) => prev - 0.1);
  };

  const handleYes = () => {
    setAccepted(true);

    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
    });
  };

  useEffect(() => {
    const audio = new Audio(
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    );
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(() => {});
  }, []);

  if (accepted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-600 to-pink-600 text-white text-center px-6">
        <h1 className="text-5xl font-bold animate-bounce mb-6">
          💖 That’s the right choice, Hanshu! 💖
        </h1>
        <p className="text-xl opacity-90">
          I knew bubzooo would say YES 😌❤️
        </p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-black text-white">

      {/* Heart Rain */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-pulse opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-12 z-10 text-center px-4">
        Hanshu, will you be my Valentine? ❤️
      </h1>

      <div className="flex gap-8 z-10 relative">
        <button
          onClick={handleYes}
          style={{ transform: `scale(${yesScale})` }}
          className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-full text-xl font-bold shadow-2xl transition-all duration-300"
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
            transform: `scale(${noScale})`,
          }}
          className="bg-gray-800 px-8 py-4 rounded-full text-xl font-bold shadow-xl transition-all duration-200"
        >
          No 😢
        </button>
      </div>
    </div>
  );
}