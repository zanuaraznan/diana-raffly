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
                        src='/images/img_2.jpeg'
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
                            Aku ingat hari itu jelas sekali. Aku terburu-buru sambil
                            menenteng kopi, dan tiba-tiba… aku menabrak seseorang. Kopinya
                            hampir tumpah, dia tersenyum canggung, dan entah kenapa hatiku
                            langsung berdebar. “Kamu baik-baik saja?” tanyanya. “Ya… kamu
                            juga,” jawabku, mencoba tersenyum. Obrolan singkat itu terasa
                            lama, hangat, dan anehnya nyaman. Siapa sangka, dari tabrakan
                            kecil itu, aku justru menemukan seseorang yang kini selalu
                            membuatku tersenyum.
                        </p>
                    </div>
                </div>
            </section>
        )
    );
}
