import { useState } from 'react';
import Page1Splash from './pages/Page1Splash';
import Page2Hold from './pages/Page2Hold';
import Page3Apology from './pages/Page3Apology';
import Page4ForgivePrompt from './pages/Page4ForgivePrompt';
import Page5Final from './pages/Page5Final';
import StageTransition from './StageTransition';

type Page = 1 | 2 | 3 | 4 | 5;

export default function ValentineFlow() {
    const [currentPage, setCurrentPage] = useState<Page>(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePageChange = (nextPage: Page) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage(nextPage);
            setIsTransitioning(false);
        }, 500);
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="relative z-10 w-full flex items-center justify-center px-4">
                <StageTransition isExiting={isTransitioning} key={currentPage}>
                    {currentPage === 1 && <Page1Splash onNext={() => handlePageChange(2)} />}
                    {currentPage === 2 && <Page2Hold onNext={() => handlePageChange(3)} />}
                    {currentPage === 3 && <Page3Apology onNext={() => handlePageChange(4)} />}
                    {currentPage === 4 && <Page4ForgivePrompt onYes={() => handlePageChange(5)} />}
                    {currentPage === 5 && <Page5Final />}
                </StageTransition>
            </div>
        </div>
    );
}
