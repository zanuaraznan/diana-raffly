'use client';
import Image from 'next/image';
import CountdownTimer from '../CountdownTimer';
import TitleSection from '../TitleSection';
import { useSplitTextSplashTrigger } from './SectionIntro';

export function SectionTimer() {
    const { containerRef, isOpen } = useSplitTextSplashTrigger();
    return (
        isOpen && (
            <section
                ref={containerRef}
                className='section-classes flex items-center flex-col gap-8 py-12'>
                <div className='-z-2 opacity-20 absolute inset-x-0 top-1/6 flex justify-between'>
                    <Image
                        src='/images/flower.png'
                        alt='Flower'
                        width={200}
                        height={300}
                        className='w-[200px] md:w-[250px]'
                    />
                    <Image
                        src='/images/flower.png'
                        alt='Flower'
                        width={200}
                        height={300}
                        className='-scale-x-100 w-[200px] md:w-[250px]'
                    />
                </div>
                <TitleSection title="Don't Miss it" />
                <Image
                    src='/images/save-the-date.png'
                    alt='save the date'
                    width={250}
                    height={250}
                    className='invert'
                />
                <CountdownTimer tanggal={23} bulan={10} tahun={2025} jam={9} />
                <h2 className='py-20 text-amber-800 text-center text-4xl font-semibold tracking-wider font-lamoric split'>
                    Terima Kasih ♡
                </h2>
            </section>
        )
    );
}
