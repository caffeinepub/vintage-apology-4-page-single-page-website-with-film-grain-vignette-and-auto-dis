import { useEffect, useState } from 'react';

interface Heart {
    id: number;
    left: number;
    delay: number;
    duration: number;
}

export default function FloatingHeartsBackground() {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝'];
        const newHearts: Heart[] = [];
        
        for (let i = 0; i < 20; i++) {
            newHearts.push({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 2,
                duration: 3 + Math.random() * 2,
            });
        }
        
        setHearts(newHearts);
    }, []);

    return (
        <div className="hearts-overlay">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="floating-heart"
                    style={{
                        left: `${heart.left}%`,
                        bottom: '-50px',
                        animationDelay: `${heart.delay}s`,
                        animationDuration: `${heart.duration}s`,
                    }}
                >
                    {['❤️', '💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 6)]}
                </div>
            ))}
        </div>
    );
}
