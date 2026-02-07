import { ReactNode } from 'react';

interface StageTransitionProps {
    children: ReactNode;
    isExiting: boolean;
}

export default function StageTransition({ children, isExiting }: StageTransitionProps) {
    return (
        <div className={isExiting ? 'stage-exit' : 'stage-enter'}>
            {children}
        </div>
    );
}
