"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const media = [
  { type: "image", src: "/Images/ig1.JPG", alt: "Birthday Image 1" },
  { type: "image", src: "/Images/ig2.JPG", alt: "Birthday Image 2" },
  { type: "image", src: "/Images/ig3.JPG", alt: "Birthday Image 3" },
  { type: "image", src: "/Images/ig4.JPG", alt: "Birthday Image 4" },
  { type: "video", src: "/Images/vd1.mp4", alt: "Birthday Video" },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [unwrapped, setUnwrapped] = useState(new Set());

  const handleItemClick = (index) => {
    if (!unwrapped.has(index)) {
      setUnwrapped(new Set([...unwrapped, index]));
      setTimeout(() => setSelectedItem(index), 1000);
    } else {
      setSelectedItem(index);
    }
  };

  return (
    <section className="px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="glass border border-white/50 rounded-2xl p-8 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {media.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative aspect-square cursor-pointer"
                onClick={() => handleItemClick(idx)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Hidden Media Content */}
                <div
                  className={`absolute inset-0 rounded-lg overflow-hidden transition-opacity duration-500 ${
                    !unwrapped.has(idx) ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      priority={idx < 2}
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                    />
                  )}
                </div>

                {/* Gift Wrap Overlay */}
                <AnimatePresence>
                  {!unwrapped.has(idx) && (
                    <motion.div
                      className="absolute inset-0 z-10"
                      initial={{ scale: 1 }}
                      exit={{
                        scale: [1, 1.2, 0],
                        rotate: [0, 15, -15],
                        opacity: [1, 1, 0],
                      }}
                      transition={{ duration: 0.8 }}
                    >
                      <Image
                        src="/Images/gift.png"
                        alt="Gift wrapper"
                        fill
                        className="object-cover rounded-lg"
                        priority
                      />
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                        <p className="text-sm bg-black/50 px-3 py-1 rounded-full">
                          Click to unwrap!
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative w-[90vmin] h-[90vmin] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {media[selectedItem].type === "image" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={media[selectedItem].src}
                    alt={media[selectedItem].alt}
                    fill
                    className="object-contain"
                    sizes="90vmin"
                  />
                </div>
              ) : (
                <video
                  src={media[selectedItem].src}
                  className="max-w-full max-h-full w-auto h-auto"
                  controls
                  autoPlay
                />
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(null);
                }}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
