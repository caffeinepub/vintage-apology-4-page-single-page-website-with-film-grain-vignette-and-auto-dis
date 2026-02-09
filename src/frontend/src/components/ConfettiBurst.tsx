import { useEffect, useState } from 'react';

interface Confetti {
    id: number;
    left: number;
    color: string;
    delay: number;
    duration: number;
}

export default function ConfettiBurst() {
    const [confetti, setConfetti] = useState<Confetti[]>([]);

    useEffect(() => {
        const colors = ['#d4a574', '#c89b6d', '#e0b585', '#f5f5f5', '#ffd700', '#ff69b4'];
        const pieces: Confetti[] = [];

        for (let i = 0; i < 100; i++) {
            pieces.push({
                id: i,
                left: Math.random() * 100,
                color: colors[Math.floor(Math.random() * colors.length)],
                delay: Math.random() * 0.5,
                duration: 2 + Math.random() * 2,
            });
        }

        setConfetti(pieces);

        const timer = setTimeout(() => {
            setConfetti([]);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {confetti.map((piece) => (
                <div
                    key={piece.id}
                    className="confetti-piece"
                    style={{
                        left: `${piece.left}%`,
                        top: '-10px',
                        backgroundColor: piece.color,
                        animation: `confetti-fall ${piece.duration}s linear forwards`,
                        animationDelay: `${piece.delay}s`,
                        transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                />
            ))}
        </div>
    );
}
