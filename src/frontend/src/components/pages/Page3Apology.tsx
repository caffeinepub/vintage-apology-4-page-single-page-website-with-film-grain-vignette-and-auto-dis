interface Page3ApologyProps {
    onNext: () => void;
}

export default function Page3Apology({ onNext }: Page3ApologyProps) {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen w-full py-12 px-6">
            <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full max-w-4xl">
                <div className="glass-card w-full">
                    <p className="text-lg md:text-xl lg:text-2xl text-center body-text leading-relaxed">
                        I know things haven't been perfect lately, but my love for you always is. Let's put this behind us? ❤️
                    </p>
                </div>
            </div>
            
            <button
                onClick={onNext}
                className="glow-button"
            >
                Next
            </button>
        </div>
    );
}
