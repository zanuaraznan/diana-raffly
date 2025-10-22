import Image from 'next/image';

export default function TitleSection({ title }: { title: string }) {
    return (
        <div className='text-center flex flex-col items-center gap-4 mb-8'>
            <h2 className='text-4xl font-semibold tracking-wider font-lamoric split'>
                {title}
            </h2>
            <Image src='/images/curly-border.svg' width={300} height={100} alt='border' />
        </div>
    );
}
