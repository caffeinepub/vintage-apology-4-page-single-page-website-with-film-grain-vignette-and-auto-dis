import { useState, useRef, useEffect } from 'react';
import FloatingHeartsBackground from '../FloatingHeartsBackground';

export default function Page4ForgivePrompt() {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [showFinal, setShowFinal] = useState(false);
    const [showHearts, setShowHearts] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleNoInteraction = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        
        const container = containerRef.current;
        if (!container) return;
        
        const containerRect = container.getBoundingClientRect();
        const maxX = Math.min(containerRect.width / 2.5, 200);
        const maxY = Math.min(containerRect.height / 2.5, 150);
        
        const newX = (Math.random() - 0.5) * maxX * 2;
        const newY = (Math.random() - 0.5) * maxY * 2;
        
        setNoButtonPosition({ x: newX, y: newY });
    };

    const handleYes = () => {
        setShowFinal(true);
        setShowHearts(true);
    };

    if (showFinal) {
        return (
            <>
                {showHearts && <FloatingHeartsBackground />}
                <div className="flex flex-col items-center justify-center min-h-screen w-full px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center romantic-text final-message">
                        Awwwwweehh! Lvb u bab 💋
                    </h1>
                </div>
            </>
        );
    }

    return (
        <div 
            ref={containerRef}
            className="flex flex-col items-center justify-center min-h-screen w-full gap-12 px-6"
        >
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center romantic-text">
                Are u willing to forgive me bab ❤️
            </h1>
            <div className="flex gap-6 flex-wrap justify-center relative min-h-[120px] w-full max-w-md">
                <button
                    onClick={handleYes}
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
                        pointerEvents: 'auto',
                    }}
                >
                    No 🥀
                </button>
            </div>
        </div>
    );
}
