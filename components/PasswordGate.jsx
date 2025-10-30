"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PasswordGate({ password = "160823", children }) {
    const [input, setInput] = useState("");
    const [unlocked, setUnlocked] = useState(false);
    const [error, setError] = useState("");
    const [shake, setShake] = useState(false);

    useEffect(() => {
        const gate = localStorage.getItem("birthday_gate");
        if (gate === "unlocked") setUnlocked(true);
    }, []);

    function tryUnlock() {
        if (input.trim() === String(password)) {
            setUnlocked(true);
            setError("");
            localStorage.setItem("birthday_gate", "unlocked");
        } else {
            setError("Try again 💫");
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    }

    return (
        <div className="relative min-h-screen">
            <AnimatePresence>
                {!unlocked && (
                    <motion.div
                        key="gate"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 grid place-items-center p-4"
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            className="glass shadow-glow rounded-2xl w-full max-w-md p-8 border border-white/40"
                        >
                            <div className="text-center space-y-6">
                                <h1 className="text-3xl sm:text-4xl font-semibold text-slate-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    Welcome to your surprise 🎀
                                </h1>
                                <p className="text-slate-700/80">
                                    Enter password to open your surprise 🎁
                                </p>
                                <motion.div
                                    animate={shake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
                                    transition={{ duration: 0.45 }}
                                    className="space-y-3"
                                >
                                    <input
                                        type="password"
                                        placeholder="Enter password to open your surprise 🎁"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && tryUnlock()}
                                        className="w-full rounded-xl px-4 py-3 glass border border-white/50 outline-none focus:ring-2 focus:ring-babyBlue/70 placeholder-slate-600/60"
                                    />
                                    <button
                                        onClick={tryUnlock}
                                        className="w-full rounded-xl px-4 py-3 font-medium text-slate-900 bg-gradient-to-r from-babyPink to-babyBlue hover:opacity-95 transition focus:outline-none shadow-glow"
                                    >
                                        Unlock
                                    </button>
                                </motion.div>
                                {error && (
                                    <p className="text-rose-500 text-sm font-medium">{error}</p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {unlocked && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


