import { AnimatePresence, motion } from 'motion/react';
import { createContext, useContext, useState } from 'react';
import { MdClose } from 'react-icons/md';

interface Toast {
    id: string;
    message: string;
    icon?: React.ReactNode;
}

interface ToastContextType {
    addToast: (msg: string, icon?: React.ReactNode) => string;
    clearToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    function addToast(message: string, icon?: React.ReactNode) {
        const id = crypto.randomUUID();
        setToasts((prev) => [...prev, { id, message, icon }]);
        setTimeout(() => clearToast(id), 3000);
        return id;
    }

    function clearToast(id: string) {
        setToasts((t) => t.filter((toast) => toast.id !== id));
    }

    return (
        <ToastContext value={{ addToast, clearToast }}>
            {children}
            <div className='fixed bottom-4 left-1/2 -translate-x-1/2 space-y-2 z-9999'>
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <motion.div
                            initial={{ opacity: 0, y: '20px' }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: '-20px' }}
                            transition={{ duration: 0.1, ease: 'easeOut' }}
                            key={toast.id}
                            className='p-2 px-4 flex items-center gap-2 text-sm font-medium whitespace-nowrap bg-white rounded-xl'>
                            {toast.icon}
                            {toast.message}
                            {/* <button
                                className='p-2 ml-4'
                                onClick={() => clearToast(toast.id)}>
                                <MdClose size={18} />
                            </button> */}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext>
    );
}

export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('ToastContext must be used within ToastProvider');
    return ctx;
}
