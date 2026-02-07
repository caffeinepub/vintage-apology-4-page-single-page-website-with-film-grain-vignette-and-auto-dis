interface Page2HoldProps {
    onNext: () => void;
}

export default function Page2Hold({ onNext }: Page2HoldProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full gap-16 px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center romantic-text">
                I want to hold u every time 🫠
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
