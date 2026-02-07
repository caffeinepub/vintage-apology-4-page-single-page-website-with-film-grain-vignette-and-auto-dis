interface Page3ApologyProps {
    onNext: () => void;
}

export default function Page3Apology({ onNext }: Page3ApologyProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full gap-12 px-6">
            <div className="apology-message-container">
                <p className="text-2xl md:text-3xl text-center romantic-text leading-relaxed">
                    My dearest, I know I've hurt you, and for that, my heart aches. 
                    Every moment without your smile feels incomplete. 
                    You mean the world to me, and I promise to cherish you, 
                    hold you close, and never let you feel alone again. 
                    Please forgive me, my love. 💕
                </p>
            </div>
            <div className="uploaded-image-container">
                <img
                    src="/assets/uploaded/6de4a0ed8a66079b44f32ddcb86801a1-5.jpg"
                    alt="Sorry message"
                    className="uploaded-image"
                />
            </div>
            <button
                onClick={onNext}
                className="apology-button bottom-button"
            >
                Next
            </button>
        </div>
    );
}
