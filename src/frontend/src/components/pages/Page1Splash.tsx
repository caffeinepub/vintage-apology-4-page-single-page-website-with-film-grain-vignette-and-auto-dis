interface Page1SplashProps {
    onNext: () => void;
}

export default function Page1Splash({ onNext }: Page1SplashProps) {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen w-full py-12 px-6">
            <div className="flex-1 flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center romantic-text">
                    I'm really sorry chlow! 🤌🏻
                </h1>
            </div>
            <button
                onClick={onNext}
                className="apology-button"
            >
                Next
            </button>
        </div>
    );
}
