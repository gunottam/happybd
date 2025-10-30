"use client";

import { useEffect } from "react";
import PasswordGate from "../components/PasswordGate";
import Hero from "../components/Hero";
import MessageCards from "../components/MessageCards";
import Gallery from "../components/Gallery";
import CustomCursor from "../components/CustomCursor";

export default function HomePage() {
  useEffect(() => {
    document.body.classList.add("custom-cursor");
    return () => document.body.classList.remove("custom-cursor");
  }, []);

  return (
    <main className="relative">
      {/* Subtle floating confetti background */}
      <div className="confetti-layer" aria-hidden>
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="confetti-piece"
            style={{
              left: `${Math.random() * 100}%`,
              background: ["#FFC0CB", "#BFE7FF", "#E9D7FF", "#FFF8F9"][i % 4],
              top: `-${Math.random() * 20}%`,
              animationDelay: `${(i % 12) * 0.4}s`,
            }}
          />
        ))}
      </div>

      <CustomCursor />
      <PasswordGate password="160823">
        <div className="text-gray-800">
          {" "}
          {/* Adding text color wrapper */}
          <Hero />
          <MessageCards />
          <Gallery />
        </div>
      </PasswordGate>
    </main>
  );
}
