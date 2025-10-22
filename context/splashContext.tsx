'use client';
import {
    createContext,
    ReactNode,
    RefObject,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

interface SplashContextType {
    isOpen: boolean;
    isAnimate: boolean;
    isAudioPlay: boolean;
    toggleAudioPlay: () => void;
    openSplash: () => void;
    splashRef: RefObject<HTMLDivElement | null> | null;
    audioRef: RefObject<HTMLAudioElement | null> | null;
}

const StarterContext = createContext<SplashContextType | undefined>(undefined);

function SplashProvider({ children }: { children: ReactNode }) {
    const [isOpen, setisOpen] = useState(false);
    const [isAnimate, setIsAnimate] = useState(false);
    const splashRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const [isAudioPlay, setIsAudioPlay] = useState(false);

    const toggleAudioPlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handlePlay = () => setIsAudioPlay(true);
        const handlePause = () => setIsAudioPlay(false);
        const handleEnded = () => setIsAudioPlay(false);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    function openSplash() {
        if (!splashRef.current || isOpen) return;

        setIsAnimate(true);
        audioRef.current?.play();
        setTimeout(() => setisOpen(true), 1000);
    }

    return (
        <StarterContext.Provider
            value={{
                isOpen,
                openSplash,
                isAnimate,
                splashRef,
                audioRef,
                isAudioPlay,
                toggleAudioPlay,
            }}>
            {children}
        </StarterContext.Provider>
    );
}

function useSplashContext() {
    const context = useContext(StarterContext);
    if (!context) throw new Error('usSplashContext must be used within SplashProvider');
    return context;
}

export { SplashProvider, useSplashContext };
