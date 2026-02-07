import { useState, useRef } from 'react';

interface Page4ForgivePromptProps {
    onYes: () => void;
}

export default function Page4ForgivePrompt({ onYes }: Page4ForgivePromptProps) {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleNoInteraction = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        
        // Get container bounds to keep button visible
        const container = containerRef.current;
        if (!container) return;
        
        const containerRect = container.getBoundingClientRect();
        const maxX = Math.min(containerRect.width / 3, 250);
        const maxY = Math.min(containerRect.height / 3, 150);
        
        // Generate random position with larger range
        const newX = (Math.random() - 0.5) * maxX * 2;
        const newY = (Math.random() - 0.5) * maxY * 2;
        
        setNoButtonPosition({ x: newX, y: newY });
    };

    return (
        <div 
            ref={containerRef}
            className="flex flex-col items-center justify-center min-h-screen w-full gap-12 px-6"
        >
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center romantic-text">
                Are you willing to forgive me, bab? ❤️
            </h1>
            <div className="flex gap-6 flex-wrap justify-center relative min-h-[120px]">
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
                        pointerEvents: 'auto',
                    }}
                >
                    No 🥀
                </button>
            </div>
        </div>
    );
}
