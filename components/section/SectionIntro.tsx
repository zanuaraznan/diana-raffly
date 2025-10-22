'use client';
import { useSplashContext } from '@/context/splashContext';
import { cn } from '@/utils';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useSplitText } from '@/hooks/gsap';
import { useRef } from 'react';

gsap.registerPlugin(SplitText, ScrollTrigger);

export function useSplitTextSplashTrigger(params?: Parameters<typeof useSplitText>) {
    const { isOpen } = useSplashContext();
    const containerRef = useRef<HTMLDivElement>(null);

    useSplitText({
        ref: containerRef,
        dependencies: { dependencies: [isOpen] },
        conditionalFn: () => !isOpen,
        isRevertOnComplete: false,
        ...params,
    });

    return { isOpen, containerRef };
}

export function SectionIntro() {
    const { containerRef, isOpen } = useSplitTextSplashTrigger();

    return (
        <div ref={containerRef} className='my-0 text-white relative flex justify-center'>
            <div className='w-full h-[520px]'>
                <div
                    className={cn(
                        'relative w-full max-h-[520px] transition-[max-height] duration-1500 ease-in-out overflow-hidden flex justify-center items-center',
                        !isOpen && 'max-h-0'
                    )}>
                    <div className='absolute w-full -z-1'>
                        <Image
                            priority
                            src='/images/image-4.jpg'
                            width={800}
                            height={1200}
                            alt='Welcome'
                            className='h-full w-full object-cover'
                        />
                        <div className='absolute inset-0 h-full w-full bg-black/80 backdrop-blur-xs z-1' />
                    </div>
                    <div className='bg-black'>
                        <Image
                            priority
                            src='/images/image-4.jpg'
                            width={800}
                            height={1200}
                            alt='Welcome'
                            className='h-full max-w-[800px] object-cover opacity-80'
                        />
                    </div>
                    <div className='absolute z-1 max-w-[800px] p-8 flex flex-col items-center justify-center gap-8 text-center'>
                        <Image
                            src='/images/logo.svg'
                            alt='Logo'
                            width={48}
                            height={48}
                            priority
                        />
                        <p className='font-lavishly font-medium text-4xl split leading-[150%] split'>
                            Welcome to our wedding
                        </p>
                        <h1 className='text-7xl font-lamoric text-amber-100 split'>
                            Diana & Raffly
                        </h1>
                        <hr className='border border-neutral-300 h-px w-full' />
                        <p className='tracking-wide text-neutral-100 text-sm split'>
                            "Dan segala sesuatu kami jadikan berpasang-pasangan, supaya
                            kamu mengingat kebesaran Allah."
                            <br />
                            <span className='font-medium'>QS. Adz-Dzariyaat (51):49</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
