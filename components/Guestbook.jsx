"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Guestbook() {
    const [message, setMessage] = useState("");
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("guestbook_entries");
        if (saved) setEntries(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("guestbook_entries", JSON.stringify(entries));
    }, [entries]);

    const onSign = () => {
        if (!message.trim()) return;
        setEntries([{ id: Date.now(), text: message.trim() }, ...entries]);
        setMessage("");
    };

    return (
        <section className="px-6 py-24">
            <div className="max-w-3xl mx-auto glass border border-white/50 rounded-2xl p-6 shadow-glow">
                <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Guestbook</h2>
                <div className="space-y-3 mb-6">
                    <textarea
                        className="w-full min-h-[120px] rounded-xl p-4 glass border border-white/50 outline-none focus:ring-2 focus:ring-babyPink/70 placeholder-slate-600/60"
                        placeholder="{{GUESTBOOK}}"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        onClick={onSign}
                        className="rounded-xl px-6 py-3 font-medium text-slate-900 bg-gradient-to-r from-babyPink to-babyBlue hover:opacity-95 transition shadow-glow"
                    >
                        Sign
                    </button>
                </div>
                <div className="space-y-3">
                    {entries.map((e) => (
                        <motion.div
                            key={e.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass border border-white/50 rounded-xl p-4"
                        >
                            <p className="text-slate-800">{e.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


