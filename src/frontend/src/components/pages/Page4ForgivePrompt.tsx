import { useState } from 'react';

interface Page4ForgivePromptProps {
    onYes: () => void;
}

export default function Page4ForgivePrompt({ onYes }: Page4ForgivePromptProps) {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

    const handleNoInteraction = () => {
        const newX = (Math.random() - 0.5) * 300;
        const newY = (Math.random() - 0.5) * 200;
        setNoButtonPosition({ x: newX, y: newY });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full gap-12 px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center romantic-text">
                Are you willing to forgive me, bab? ❤️
            </h1>
            <div className="flex gap-6 flex-wrap justify-center relative">
                <button
                    onClick={onYes}
                    className="apology-button"
                >
                    Yes 🌹
                </button>
                <button
                    onMouseEnter={handleNoInteraction}
                    onTouchStart={handleNoInteraction}
                    onClick={handleNoInteraction}
                    className="apology-button no-button"
                    style={{
                        transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                        transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    }}
                >
                    No 🥀
                </button>
            </div>
        </div>
    );
}
