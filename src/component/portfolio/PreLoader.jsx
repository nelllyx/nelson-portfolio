import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ( {onComplete} ) => {

    const greetings = [
        { text: 'Hello', lang: 'English' },
        { text: 'Bonjour', lang: 'French' },
        { text: 'Hola', lang: 'Spanish' },
        { text: 'Hallo', lang: 'German' },
        { text: 'こんにちは', lang: 'Japanese' },
        { text: 'Kaabo', lang: 'Yoruba' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [canHide, setCanHide] = useState(false);

    // Ensure preloader is visible for at least 1 second
    useEffect(() => {
        const minTimer = setTimeout(() => setCanHide(true), 1000);
        return () => clearTimeout(minTimer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                if (prev < greetings.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsComplete(true);
                        setTimeout(onComplete, 500);
                    }, 1000);
                    return prev;
                }
            });
        }, 600);

        return () => clearInterval(interval);
    }, [onComplete, greetings]);

    return (
        <AnimatePresence>
            {(!isComplete || !canHide) && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8 } }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
                >
                    <div className="text-center">
                        {/* Logo/Icon */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="mb-8"
                        >
                            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
                                <span className="text-2xl font-bold text-purple-600">P</span>
                            </div>
                        </motion.div>

                        {/* Greeting Text */}
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.8 }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className="text-6xl font-bold text-white mb-4"
                        >
                            {greetings[currentIndex]?.text}
                        </motion.div>

                        {/* Language Label */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-300 mb-8"
                        >
                            {greetings[currentIndex]?.lang}
                        </motion.div>

                        {/* Progress Bar */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentIndex + 1) / greetings.length) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto max-w-xs rounded-full shadow-lg"
                        />

                        {/* Loading Dots */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex justify-center mt-6 space-x-2"
                        >
                            {[0, 1, 2].map((dot) => (
                                <motion.div
                                    key={dot}
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{ 
                                        duration: 1.5, 
                                        repeat: Infinity, 
                                        delay: dot * 0.2 
                                    }}
                                    className="w-2 h-2 bg-white rounded-full"
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;