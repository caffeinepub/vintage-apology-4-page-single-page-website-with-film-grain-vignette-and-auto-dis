interface Page3ApologyProps {
    onNext: () => void;
}

export default function Page3Apology({ onNext }: Page3ApologyProps) {
    // REPLACE IMAGE URL HERE: Change the src attribute below to your custom image URL
    const imageUrl = "/assets/uploaded/8cea9dbe688448677b472a8d5e73118d-11.jpg";

    return (
        <div className="flex flex-col items-center justify-between min-h-screen w-full py-12 px-6">
            <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full max-w-3xl">
                <p className="text-lg md:text-xl lg:text-2xl text-center body-text leading-relaxed max-w-2xl">
                    I know I messed up, and I'm truly sorry for hurting you. You mean the world to me, 
                    and seeing you upset breaks my heart. I never wanted to cause you pain. Every moment 
                    with you is precious, and I don't want to lose what we have. Please know that I'm 
                    committed to being better, to listening more, and to making sure you always feel 
                    loved and valued. You deserve nothing less than my best, and I promise to give you 
                    that every single day. I hope you can find it in your heart to forgive me. 🫂
                </p>
                
                <div className="image-container">
                    <img 
                        src={imageUrl}
                        alt="My apology"
                        className="apology-image"
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
