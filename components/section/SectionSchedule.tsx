'use client';
import { useSplitTextSplashTrigger } from './SectionIntro';
import { MdOutlinePinDrop } from 'react-icons/md';
import TitleSection from '../TitleSection';
import Image from 'next/image';

const ScheduleList = [
    {
        title: 'Akad Nikah',
        hari: 'Rabu',
        tanggal: '30',
    },
    {
        title: 'Resepsi Pernikahan',
        hari: 'Kamis',
        tanggal: '31',
    },
];

export function SectionSchedule() {
    const { containerRef, isOpen } = useSplitTextSplashTrigger();
    return (
        isOpen && (
            <section
                ref={containerRef}
                className='section-classes flex flex-col items-center py-12'>
                <div className='-z-2 opacity-20 absolute inset-x-0 top-1/3 flex justify-between'>
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
                <TitleSection title='Jadwal Acara' />
                <div className='max-w-[1000px] flex flex-col md:flex-row items-center gap-20 mt-8'>
                    {ScheduleList.map(({ title, hari, tanggal }) => (
                        <div
                            key={title}
                            className='text-center flex flex-col items-center justify-center gap-4'>
                            <h3 className='text-4xl font-lavishly split'>{title}</h3>
                            <div className='w-full flex *:flex-1 items-stretch'>
                                <p className='flex items-center justify-center tracking-wider font-medium uppercase py-3 border-t border-b text-sm border-neutral-900 text-amber-800 split'>
                                    {hari}
                                </p>
                                <p className='*:block split'>
                                    <span>FEBRUARI</span>
                                    <span className='text-2xl font-bold'>{tanggal}</span>
                                    <span className='text-lg font-medium'>2026</span>
                                </p>
                                <p className='flex items-center justify-center tracking-wider font-medium uppercase py-3 border-t border-b border-neutral-900 text-amber-800 text-sm split'>
                                    09.00 WIB - SELESAI
                                </p>
                            </div>
                            <p className='text-sm'>
                                Gedung 2A, Kelurahan Dandangan, Kota Kediri, Jawa Timur,
                                Indonesia
                            </p>
                        </div>
                    ))}
                </div>
                <button className='mt-8 p-3 px-6 rounded-xl flex items-center gap-4 font-medium bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700 transition-colors'>
                    <MdOutlinePinDrop size={18} className='shrink-0' />
                    Buka di Google Maps
                </button>
            </section>
        )
    );
}
