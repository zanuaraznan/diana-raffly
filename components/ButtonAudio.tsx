'use client';

import { useSplashContext } from '@/context/splashContext';
import { cn } from '@/utils';
import Image from 'next/image';
import { MdPause, MdPlayArrow } from 'react-icons/md';
import useAudioLabel from './useAudioLabel';

export default function ButtonAudio() {
    const { audioRef, toggleAudioPlay, isAudioPlay } = useSplashContext();
    const { AudioLabelComp, handlePressStart, handlePressEnd } = useAudioLabel();

    return (
        <>
            <audio ref={audioRef} src='/song/bermuara.mp3' preload='auto' hidden loop />
            <button
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={handlePressStart}
                onMouseUp={handlePressEnd}
                onMouseLeave={handlePressEnd}
                onTouchStart={handlePressStart}
                onTouchEnd={handlePressEnd}
                onClick={toggleAudioPlay}
                className='mb-0 fixed z-990 bottom-4 right-4 backdrop-blur-md rounded-full p-3 bg-white/10 hover:bg-neutral-200/30 active:bg-neutral-300/30 transition-all active:scale-90 duration-1000 ease-[cubic-bezier(.17,1.7,.05,.91)]'>
                <Image
                    src='/images/bermuara-cover.jpg'
                    alt='Bermuara - Rizky Febian'
                    fill
                    style={{ animationDuration: '4000ms' }}
                    draggable={false}
                    className={cn(
                        'select-none pointer-events-none object-cover w-full h-full opacity-35 sepia-100 rounded-full',
                        isAudioPlay && 'animate-spin'
                    )}
                />
                <AudioLabelComp text='Rizky Febian - Bermuara' />

                {isAudioPlay ? <MdPause size={18} /> : <MdPlayArrow size={18} />}
            </button>
        </>
    );
}
