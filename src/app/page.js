"use client";

import { useState, useEffect } from "react";
import Snowfall from "./components/Snowfall";
import Envelope from "./components/Envelop";
import Content from "./components/Content";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [password, setPassword] = useState("");
    const [ig, setIg] = useState("@");
    const correctPassword = "21082002";
    const [error, setError] = useState("");
    const [correct, setCorrect] = useState(false);
    const [openInput, setOpenInput] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            password === correctPassword &&
            (ig === "@_babe.na_" || ig === "@babe.na")
        ) {
            setCorrect(true);
            setOpenInput(false);
            setTimeout(() => {
              setIsOpen(true);
            }, 500)
        } else {
            if (password !== correctPassword) {
                setError("Ngày sinh của mình mà cũng không nhớ?");
            }
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "visible";
        };
    }, []);

    return (
        <div className="w-screen h-screen items-center justify-center relative">
            <img
                src={"./theme.jpg"}
                className="absolute min-h-auto min-w-screen flex items-center justify-center overflow-hidden"
            />
            <div className=" w-full h-full">
                <Snowfall />
                <div className="w-full max-w-md z-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    {openInput ? (
                        <form
                            onSubmit={handleSubmit}
                            className="mb-4 text-center"
                        >
                            <h1 className="text-4xl font-bold text-white mb-6 font-serif">
                                {error ? (
                                    <div className="text-[yellow] text-[20px]">
                                        {error}
                                    </div>
                                ) : (
                                    `Tun's Secret Message`
                                )}
                            </h1>
                            <input
                                type="text"
                                value={ig}
                                onChange={(e) => {
                                    if (e.target.value) {
                                        setError("");
                                        setIg(e.target.value);
                                    }
                                }}
                                placeholder="@"
                                className="w-full p-3 mb-4 border-2 border-gold rounded-full text-center text-lg bg-transparent text-white placeholder-gold"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setError("");
                                    setPassword(e.target.value);
                                }}
                                placeholder={`${
                                    ig === "@" ? "" : ig
                                }'s birthday`}
                                className="w-full p-3 mb-4 border-2 border-gold rounded-full text-center text-lg bg-transparent text-white placeholder-gold"
                            />
                            <button
                                type="submit"
                                className="w-full bg-gold text-blue-900 p-3 rounded-full text-lg font-bold hover:bg-yellow-400 transition-colors"
                            >
                                Gooooo
                            </button>
                        </form>
                    ) : null}
                    {correct ? (
                        <Envelope isOpen={isOpen}>
                            <Content />
                        </Envelope>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
}
