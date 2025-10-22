'use client';
import { useToast } from '@/context/toastContext';
import { useEffect, useState } from 'react';
import { LuClipboard, LuClipboardCheck } from 'react-icons/lu';
import { MdCheck } from 'react-icons/md';

export default function ButtonCopyClipboard({ account }: { account: string }) {
    const [isCopy, setIsCopy] = useState(false);
    const { addToast } = useToast();

    function handleCopy() {
        navigator.clipboard.writeText(account);
        setIsCopy(true);
        addToast('Nomor rekening telah disalin', <MdCheck size={22} color='green' />);
    }

    useEffect(() => {
        if (!isCopy) return;
        setTimeout(() => setIsCopy(false), 3000);
    }, [isCopy]);

    return (
        <button
            onClick={handleCopy}
            className='flex items-center gap-4 p-4 px-6 ring ring-neutral-300 rounded-xl'>
            {isCopy ? <LuClipboardCheck size={18} /> : <LuClipboard size={18} />}
            {account}
        </button>
    );
}
