import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const text = "<Hello World! />";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timer = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, 100);
            return () => clearTimeout(timer);
        }

        const hideTimer = setTimeout(() => setIsVisible(false), 3000);
        return () => clearTimeout(hideTimer);
    }, [index]);

    return (
        isVisible && (
            <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <motion.h1
                    className="text-4xl font-bold text-orange-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {displayText}
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    >
                        |
                    </motion.span>
                </motion.h1>
            </div>
        )
    );
};

export default LoadingScreen;
