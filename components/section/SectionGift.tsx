'use client';
import ButtonCopyClipboard from '../ButtonCopyClipboard';
import TitleSection from '../TitleSection';
import { useSplitTextSplashTrigger } from './SectionIntro';

const AccountList = [
    { name: 'DANA a/n DIANA KOMALA SARI', detail: '0821-7538-0591' },
    { name: 'Bank BNI a/n MUHAMMAD RAFFLY YUDHADITIRA', detail: '1252-1566-01' },
];

export function SectionGift() {
    const { containerRef, isOpen } = useSplitTextSplashTrigger();

    return (
        isOpen && (
            <section ref={containerRef} className='section-classe py-12'>
                <div className='text-center flex flex-col gap-2 items-center'>
                    <TitleSection title='Ungkapan Kasih dan Doa' />
                    <p className='split max-w-1/2'>
                        Tanpa mengurangi rasa hormat, untuk melengkapi kebahagiaan
                        pengantin, Anda dapat memberikan tanda kasih melalui nomor
                        rekening / dompet digital berikut ini :
                    </p>
                </div>
                <div className='mt-8 flex flex-col gap-8 items-center justify-center'>
                    {AccountList.map(({ name, detail }) => (
                        <div
                            key={name}
                            className='flex flex-col items-center gap-2 text-center'>
                            <h2
                                className='text-xl
                             font-semibold'>
                                {name}
                            </h2>
                            <ButtonCopyClipboard account={detail} />
                        </div>
                    ))}
                </div>
            </section>
        )
    );
}
