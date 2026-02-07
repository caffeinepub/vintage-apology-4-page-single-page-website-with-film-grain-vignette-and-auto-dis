interface Page1SplashProps {
    onNext: () => void;
}

export default function Page1Splash({ onNext }: Page1SplashProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full gap-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center px-6 romantic-text">
                I'm really sorry chlow! 🤌🏻
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
