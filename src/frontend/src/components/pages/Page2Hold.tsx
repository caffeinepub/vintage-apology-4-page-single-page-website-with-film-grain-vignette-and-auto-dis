interface Page2HoldProps {
    onNext: () => void;
}

export default function Page2Hold({ onNext }: Page2HoldProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full gap-12 px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center romantic-text">
                I want to hold u every time 🫠
            </h1>
            <div className="uploaded-image-container">
                <img
                    src="/assets/uploaded/Snapchat-44209910-5.jpg"
                    alt="Romantic moment"
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
