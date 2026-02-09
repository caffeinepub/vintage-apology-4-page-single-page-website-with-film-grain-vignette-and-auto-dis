import { useState, useRef, useEffect } from 'react';

interface Page4ForgivePromptProps {
    onYes: () => void;
}

export default function Page4ForgivePrompt({ onYes }: Page4ForgivePromptProps) {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const noButtonRef = useRef<HTMLButtonElement>(null);

    const moveNoButton = () => {
        const container = containerRef.current;
        if (!container) return;
        
        const containerRect = container.getBoundingClientRect();
        const buttonWidth = 150;
        const buttonHeight = 60;
        
        const maxX = (containerRect.width - buttonWidth) / 2 - 50;
        const maxY = (containerRect.height - buttonHeight) / 2 - 50;
        
        const newX = (Math.random() - 0.5) * maxX * 2;
        const newY = (Math.random() - 0.5) * maxY * 2;
        
        setNoButtonPosition({ x: newX, y: newY });
    };

    const handleNoInteraction = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        moveNoButton();
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const button = noButtonRef.current;
            if (!button) return;
            
            const rect = button.getBoundingClientRect();
            const buttonCenterX = rect.left + rect.width / 2;
            const buttonCenterY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(e.clientX - buttonCenterX, 2) + 
                Math.pow(e.clientY - buttonCenterY, 2)
            );
            
            if (distance < 100) {
                moveNoButton();
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
            ref={containerRef}
            className="flex flex-col items-center justify-center min-h-screen w-full gap-16 px-6"
        >
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center romantic-text">
                Are u willing to forgive me bab? ❤️
            </h1>
            <div className="relative min-h-[200px] w-full max-w-2xl flex items-center justify-center">
                <button
                    onClick={onYes}
                    className="yes-button"
                >
                    Yes 🌹
                </button>
                <button
                    ref={noButtonRef}
                    onMouseEnter={handleNoInteraction}
                    onMouseDown={handleNoInteraction}
                    onTouchStart={handleNoInteraction}
                    onClick={handleNoInteraction}
                    className="no-button"
                    style={{
                        transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                        transition: 'transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                        left: '50%',
                        top: '50%',
                        marginLeft: '150px',
                    }}
                >
                    No 🥀
                </button>
            </div>
        </div>
    );
}
