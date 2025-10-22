'use client';
import { useRef, useState } from 'react';
import { MdOutlineMusicNote } from 'react-icons/md';

export default function audioLabel() {
    const [isPressing, setIsPressing] = useState(false);
    const holdTimeout = useRef<NodeJS.Timeout>(null);

    function handlePressStart() {
        holdTimeout.current = setTimeout(() => {
            setIsPressing(true);
        }, 300);
    }

    function handlePressEnd() {
        if (holdTimeout.current) {
            setIsPressing(false);
            clearTimeout(holdTimeout.current);
        }
    }

    const AudioLabelComp = ({ text }: { text: string }) =>
        isPressing ? (
            <div className='select-none pointer-events-none absolute bottom-[120%] z-99 right-0 text-sm px-4 p-2 rounded-full bg-white whitespace-nowrap transition-all flex items-center gap-2'>
                <MdOutlineMusicNote size={16} />
                {text}
            </div>
        ) : null;

    return { handlePressStart, handlePressEnd, AudioLabelComp };
}
