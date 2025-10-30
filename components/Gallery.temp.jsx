"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const media = [
  { type: "image", src: "/Images/ig1.jpg", alt: "Birthday Image 1" },
  { type: "image", src: "/Images/ig2.jpg", alt: "Birthday Image 2" },
  { type: "image", src: "/Images/ig3.jpg", alt: "Birthday Image 3" },
  { type: "image", src: "/Images/ig4.jpg", alt: "Birthday Image 4" },
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
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {media.map((item, idx) => (
            <motion.div
              key={idx}
              onClick={() => handleItemClick(idx)}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              {!unwrapped.has(idx) ? (
                <motion.div
                  className="absolute inset-0 z-10"
                  exit={{ scale: 1.2, opacity: 0 }}
                >
                  <Image
                    src="/Images/gift.png"
                    alt="Gift wrapper"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <p className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                      Click to unwrap!
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="w-full h-full">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              ✕
            </button>

            <div className="w-full h-full flex items-center justify-center">
              {media[selectedItem].type === "image" ? (
                <div className="relative w-[90vh] h-[90vh]">
                  <Image
                    src={media[selectedItem].src}
                    alt={media[selectedItem].alt}
                    fill
                    className="object-contain"
                    sizes="90vh"
                  />
                </div>
              ) : (
                <video
                  src={media[selectedItem].src}
                  className="max-h-[90vh] max-w-[90vw]"
                  controls
                  autoPlay
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
