'use client';

import { useSplashContext } from '@/context/splashContext';
import { useSplitText } from '@/hooks/gsap';
import { cn } from '@/utils';
import Image from 'next/image';
import { MdMailOutline } from 'react-icons/md';

export interface GuestName {
    to?: string;
    detail?: string;
}

export default function Splash({ to, detail }: GuestName) {
    const { splashRef, openSplash, isAnimate, isOpen } = useSplashContext();
    useSplitText({ ref: splashRef! });

    return (
        !isOpen && (
            <section
                ref={splashRef}
                className={cn(
                    'fixed inset-0 z-999 bg-neutral-900 text-white p-8 transition-transform duration-1000 ease-in-out',
                    isAnimate && '-translate-y-full'
                )}>
                <Image
                    src='/images/image-1.jpg'
                    alt='Wedding of Diana and Raffly'
                    fill
                    priority
                    className='absolute inset-0 w-full h-full object-cover object-[center_35%] transition-opacity ease-in-out duration-1000 starting:opacity-0 opacity-25 z-0'
                />
                <div className='relative w-full h-[90dvh] z-1 flex flex-col gap-6 items-center justify-center text-center'>
                    <p className='font-lavishly font-medium text-4xl split leading-[150%]'>
                        The wedding of
                    </p>
                    <h1 className='text-7xl font-lamoric split'>Diana & Raffly</h1>
                    <p className='tracking-wider text-xl split'>23 - 10 - 2025</p>
                    <div className='mt-8 flex flex-col items-center gap-4'>
                        <p className='tracking-wide text-neutral-200 split'>
                            Yth. Bapak/Ibu/Saudara/i
                        </p>
                        <h2 className='uppercase font-semibold tracking-tight text-3xl split'>
                            {to ?? 'Tamu Undangan'}
                            {detail && (
                                <span className='text-neutral-200 mt-2 split'>
                                    {detail}
                                </span>
                            )}
                        </h2>
                    </div>
                    <button
                        onClick={openSplash}
                        className='flex items-center gap-4 p-5 px-6 rounded-full bg-white text-neutral-900 font-medium hover:bg-neutral-200 active:bg-neutral-300 transition-colors'>
                        <MdMailOutline size={24} />
                        Buka Undangan
                    </button>
                </div>
                <p className='text-center text-neutral-400 text-sm'>
                    Kami mohon maaf apabila ada kesalahan dalam penulisan nama atau gelar.
                </p>
            </section>
        )
    );
}
