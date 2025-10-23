import type { Metadata } from 'next';
import { IBM_Plex_Sans, Lavishly_Yours } from 'next/font/google';
import LocalFont from 'next/font/local';
import './globals.css';

const IBMPlex = IBM_Plex_Sans({ subsets: ['latin'] });

const LavishlyYours = Lavishly_Yours({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--lavishly',
});

const Lamoric_Rowen = LocalFont({
    src: './fonts/Lamoric Rowen TTF.ttf',
    preload: true,
    adjustFontFallback: 'Times New Roman',
    variable: '--lamoric-rowen',
});

export const metadata: Metadata = {
    title: 'Undangan Pernikahan Diana  & Raffly',
    description:
        'Spesial mengundang untuk menghadiri acara pernikahan kami. - Diana  & Raffly ',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${IBMPlex.className} ${Lamoric_Rowen.variable} ${LavishlyYours.variable} text-neutral-800 bg-amber-50 antialiased`}>
                {children}
            </body>
        </html>
    );
}
