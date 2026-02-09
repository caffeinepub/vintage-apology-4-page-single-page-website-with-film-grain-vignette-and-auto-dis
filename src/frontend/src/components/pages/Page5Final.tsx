import { useEffect } from 'react';
import ConfettiBurst from '../ConfettiBurst';

export default function Page5Final() {
    const imageUrl = "/assets/uploaded/8cea9dbe688448677b472a8d5e73118d-13.jpg";

    return (
        <>
            <ConfettiBurst />
            <div className="flex flex-col items-center justify-center min-h-screen w-full px-6 gap-8">
                <div className="flex flex-col items-center gap-6">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl text-center romantic-text final-message">
                        Awwwwweehh!
                    </h1>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-center romantic-text final-message">
                        Lvb u bab 💋
                    </h2>
                </div>
                
                <div className="circular-image-container">
                    <img 
                        src={imageUrl}
                        alt="Us"
                        className="circular-image"
                    />
                </div>
            </div>
        </>
    );
}
