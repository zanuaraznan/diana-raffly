'use client';
import Image from 'next/image';
import TitleSection from '../TitleSection';
import { useSplitTextSplashTrigger } from './SectionIntro';

export function SectionGallery() {
    const { containerRef, isOpen } = useSplitTextSplashTrigger();
    return (
        isOpen && (
            <section ref={containerRef} className='section-classes py-12'>
                <TitleSection title='Galeri' />
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {Array.from({ length: 7 }).map((_, index) => (
                        <Image
                            key={index}
                            src={`/images/image-${index + 1}.jpg`}
                            width={500}
                            height={500}
                            alt='image'
                            className='object-cover w-auto h-auto aspect-3/4 rounded-xl'
                        />
                    ))}
                </div>
            </section>
        )
    );
}
