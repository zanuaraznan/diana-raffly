'use client';
import { useEffect, useState } from 'react';

interface CountdownTimerProps {
    tanggal: number;
    bulan: number;
    tahun: number;
    jam?: number;
    menit?: number;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const ComponentLabel = {
    days: 'Hari',
    hours: 'Jam',
    minutes: 'Menit',
    seconds: 'Detik',
};

export default function CountdownTimer({
    tanggal,
    bulan,
    tahun,
    jam = 0,
    menit = 0,
}: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date(tahun, bulan - 1, tanggal, jam, menit, 0);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [tanggal, bulan, tahun, jam, menit]);

    return (
        <div className='flex items-center gap-8 p-4 justify-center text-center'>
            {Object.entries(ComponentLabel).map(([k, v]) => (
                <div key={k}>
                    <p className='font-lamoric font-bold tracking-wide text-4xl split'>
                        {timeLeft[k as keyof typeof timeLeft]}
                    </p>
                    <span className='split'>{v}</span>
                </div>
            ))}
        </div>
    );
}
