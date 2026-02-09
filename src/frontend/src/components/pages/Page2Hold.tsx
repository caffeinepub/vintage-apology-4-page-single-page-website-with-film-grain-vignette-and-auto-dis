interface Page2HoldProps {
    onNext: () => void;
}

export default function Page2Hold({ onNext }: Page2HoldProps) {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen w-full py-12 px-6">
            <div className="flex-1 flex flex-col items-center justify-center gap-12 w-full max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center romantic-text">
                    I want to hold u everytime 🫠
                </h1>
                
                <div className="heart-container">
                    <div className="aura-glow"></div>
                    <div className="heart-shape">❤️</div>
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
