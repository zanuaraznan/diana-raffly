import GlobalProvider from '@/components/GlobalProvider';
import Main from '@/components/Main';
import Splash, { type GuestName } from '@/components/Splash';

interface SearchPageProps {
    searchParams: Promise<GuestName>;
}

export default async function Page({ searchParams }: SearchPageProps) {
    const search = await searchParams;

    return (
        <GlobalProvider>
            <Splash {...search} />
            <Main />
        </GlobalProvider>
    );
}
