"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

export default function MessageCards() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * 10;
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * 10;

    setRotateX(-rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      id="messages"
      className="px-6 py-24 min-h-screen flex items-center justify-center"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="glass rounded-3xl p-8 border border-white/50 shadow-glow max-w-5xl w-full transform-gpu"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="space-y-6">
          <h2
            className="text-3xl font-bold text-purple-800 mb-6"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            Dear Mittar ✨
          </h2>
          <p
            className="text-gray-800 text-lg leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            happy birthday phenchhooo 🎂💖 <br />
            tu jaanti hai na ab toh 2.5 saal ho gaye hume dost bane hue 🫶 <br />
            kab time nikal gaya pata hi nahi chala <br />
            <br />
            upar neeche sab chalta rehta hai life meinbut sach bolu toh tu meri
            life ka ek bahut special part ban gayi hai 💫 <br />
            kabhi kabhi words kam pad jaate hain jab tere baare mein bolna hota
            hai <br />
            bas dil se feel hota hai ki tu important hai yaar 💞 <br />
            <br />
            hamesha yehi hope karta hu ki hum sabko ek hi jagah internship mil
            jaayefir masti bhi hogi aur ye dosti aur strong banegi 🤝 <br />
            <br />
            aur haan kabhi kabhi agar humne tujhe thoda hurt kiya ho <br />
            toh genuinely sorry yaar 🙏 <br />
            dil se kabhi kuch galat nahi hota <br />
            bas situations ajeeb ho jaati hain <br />
            <br />
            bas itna yaad rakhiyo ki tu hamare liye bohot close hai ❤️ <br />
            aur kabhi na kabhi fir se wo ghumi ghumi wali vibes laayenge <br />
            chicken party hogi masti hogi full enjoyment 🍗😎 <br />
            <br />
            apna khayal rakhiyo mittar <br />
            aur wo cute si smile hamesha face pe rakhiiyo <br />
            bhot jachti hai tujhpe 😄✨ <br />
            <br />
            lots of love — gunottam 💕
          </p>

          <p
            className="text-purple-700 text-xl mt-6 text-right"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            With love ❤️
          </p>
        </div>
      </motion.div>
    </section>
  );
}
