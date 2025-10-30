"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const nextRef = useRef(null);

  const scrollToNext = () => {
    const el = document.getElementById("messages");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1
            className="text-5xl md:text-6xl leading-tight text-purple-800"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            <span className="block">Happy Birthday! 🎉</span>
          </h1>
          <p
            className="text-purple-700 text-lg md:text-xl font-medium"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Wishing you a day filled with joy, laughter, and beautiful memories!
            🎂✨
          </p>
          <button
            onClick={scrollToNext}
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium text-slate-900 bg-gradient-to-r from-babyPink to-babyBlue hover:opacity-95 transition shadow-glow"
          >
            Open Message
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl overflow-hidden w-full border border-white/50 shadow-glow"
          ref={nextRef}
        >
          <Image
            src="/Images/Hero.JPG"
            alt="Birthday Hero Image"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
