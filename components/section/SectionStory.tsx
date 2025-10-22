'use client';
import Image from 'next/image';
import { useSplitTextSplashTrigger } from './SectionIntro';

export function SectionStory() {
    const { containerRef, isOpen } = useSplitTextSplashTrigger();
    return (
        isOpen && (
            <section ref={containerRef} className='section-classes py-12'>
                <div className='flex flex-col md:flex-row items-center gap-12'>
                    <Image
                        src='/images/image-7.jpg'
                        alt='image'
                        width={400}
                        height={300}
                        className='md:w-full md:max-w-[550px] lg:max-w-[700px] h-auto aspect-video object-[50%_35%] rounded-2xl object-cover'
                    />
                    <div>
                        <div className='mb-4 flex flex-col max-md:items-center'>
                            <h1 className='mb-2 text-4xl font-semibold tracking-wider font-lamoric split'>
                                Cerita Kami
                            </h1>
                            <Image
                                src='/images/curly-border.svg'
                                width={220}
                                height={100}
                                alt='border'
                            />
                        </div>

                        <p className='split'>
                            Tahun 2024, kami dipertemukan pada fase saling galau. Singkat
                            cerita, kami saling berkomunikasi hari demi hari semakin
                            bertambah dekat dan kami menjalin hubungan pada tanggal 20
                            Juli 2024. Tanggal 05 April 2025, kami memutuskan melanjutkan
                            ke jenjang lebih serius dalam ikatan pertunangan. Waktu telah
                            tiba, kami di penghujung untuk menikah pada tanggal 22 Oktober
                            2025.
                        </p>
                    </div>
                </div>
            </section>
        )
    );
}
