import Link from "next/link";

interface MainHeaderProps {
    routes: string[];
}

export default function MainHeader(props: MainHeaderProps) {
    const { routes } = props;

    return (
        <header id="main-header" className="w-full border-b border-cyan-400">
            <nav className="w-full h-20 px-2 flex flex-row items-center justify-end">
                <div className="flex flex-row px-3 gap-6">
                    {routes.map((route) => {
                        const routePath = route.toLowerCase() === 'home' ? '': route.toLowerCase().replace(' ', '-');
                        return <Link className="text-2xl px-2 py-1 hover:bg-sky-400 hover:bg-opacity-30 rounded-md" key={route} href={`/${routePath}`}>{route}</Link>
}                   )}
                </div>
            </nav>
        </header>
    );
}
