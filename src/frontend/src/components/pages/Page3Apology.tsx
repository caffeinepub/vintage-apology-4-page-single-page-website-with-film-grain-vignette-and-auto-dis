interface Page3ApologyProps {
    onNext: () => void;
}

export default function Page3Apology({ onNext }: Page3ApologyProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full gap-16 px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center romantic-text leading-relaxed max-w-4xl">
                I'm really sorry, I didn't mean to hurt you. You mean a lot to me. 🫂
            </h1>
            <button
                onClick={onNext}
                className="apology-button bottom-button"
            >
                Next
            </button>
        </div>
    );
}
