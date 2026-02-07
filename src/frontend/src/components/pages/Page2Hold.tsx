interface Page2HoldProps {
    onNext: () => void;
}

export default function Page2Hold({ onNext }: Page2HoldProps) {
    // REPLACE IMAGE URL HERE: Change the src attribute below to your custom image URL
    const imageUrl = "/assets/uploaded/Snapchat-44209910-7.jpg";

    return (
        <div className="flex flex-col items-center justify-between min-h-screen w-full py-12 px-6">
            <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center romantic-text">
                    I want to hold u everytime 🫠
                </h1>
                
                <div className="image-container">
                    <img 
                        src={imageUrl}
                        alt="Us together"
                        className="apology-image grayscale-image"
                    />
                </div>
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
