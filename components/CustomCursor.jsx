"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 30 });
    const springY = useSpring(y, { stiffness: 300, damping: 30 });

    useEffect(() => {
        const move = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [x, y]);

    return (
        <motion.div
            ref={cursorRef}
            className="pointer-events-none fixed z-[60]"
            style={{
                left: springX,
                top: springY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            aria-hidden
        >
            <div className="relative">
                <div className="w-6 h-6 rounded-full bg-babyPink/70 blur-[2px] shadow-glow"></div>
                <div className="absolute inset-0 w-12 h-12 -left-3 -top-3 rounded-full bg-babyBlue/40 blur-xl opacity-60"></div>
            </div>
        </motion.div>
    );
}


