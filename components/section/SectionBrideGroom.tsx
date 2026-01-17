'use client';
import Image from 'next/image';
import { useSplitTextSplashTrigger } from './SectionIntro';
import { cn } from '@/utils';

const BrideAndGroom = [
    {
        name: 'Mochammad Zanuar Aznan Rasyidin',
        detail: 'Putra dari Bapak & Ibu',
    },
    {
        name: 'Lalisa Manobal',
        detail: 'Putri dari Bapak & Ibu',
    },
];

export function SectionBrideGroom() {
    const { containerRef, isOpen } = useSplitTextSplashTrigger();
    return (
        isOpen && (
            <section ref={containerRef} className='mt-0! section-classes'>
                <div className='absolute w-full sepia-50 left-0 top-0 -scale-y-100 flex items-center justify-between opacity-50 -z-2 -translate-y-1/5'>
                    <Image
                        src='/images/flower.png'
                        alt='Flower'
                        width={200}
                        height={300}
                        className='w-[120px] md:w-[200px]'
                    />
                    <Image
                        src='/images/flower.png'
                        alt='Flower'
                        width={200}
                        height={300}
                        className='-scale-x-100 w-[120px] md:w-[200px]'
                    />
                </div>
                <div className='relative w-full flex flex-col items-center gap-4 py-12 text-center'>
                    <h2 className='max-w-[500px] text-4xl font-semibold tracking-wider font-lamoric split'>
                        Calon Pengantin
                    </h2>
                    <p className='split'>
                        Dengan rahmat dan karunia Allah SWT, dimohon kesediaan Bapak/Ibu
                        untuk hadir pada acara resepsi pernikahan :
                    </p>
                    <div className='mt-6 flex flex-col md:flex-row gap-8 max-w-[80%] mx-auto'>
                        {BrideAndGroom.map(({ name, detail }, index) => (
                            <div key={name} className='flex-1'>
                                <Image
                                    src={`/images/img_${index + 1}.jpeg`}
                                    alt='Image'
                                    width={1000}
                                    height={1000}
                                    priority
                                    className={cn(
                                        'w-full aspect-4/3 object-top object-cover rounded-4xl',
                                        index === 1 && 'object-center',
                                    )}
                                />
                                <h4 className='font-semibold text-2xl font-lamoric mt-8 split'>
                                    {name}
                                </h4>
                                <p className='split'>{detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    );
}
