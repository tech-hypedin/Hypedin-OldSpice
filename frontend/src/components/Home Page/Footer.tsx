import Link from 'next/link';
import Image from 'next/image';

const XTwitterIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg viewBox='0 0 24 24' fill='currentColor' className={className} aria-hidden='true'>
        <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
    </svg>
);
  
const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className={className} aria-hidden='true'>
        <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
        <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
    </svg>
);
  
const YoutubeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
    <svg viewBox='0 0 24 24' fill='currentColor' className={className} aria-hidden='true'>
        <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
    </svg>
);

const socials: { name: string, icon: React.ReactNode, link: string }[] = [
    {
        name: 'X (Twitter)',
        icon: <XTwitterIcon className='w-5 h-5' />,
        link: 'https://x.com/OldSpice',
    },
    {
        name: 'Instagram',
        icon: <InstagramIcon className='w-5 h-5' />,
        link: 'https://www.instagram.com/oldspiceindia/',
    },
    {
        name: 'YouTube',
        icon: <YoutubeIcon className='w-5 h-5' />,
        link: 'https://www.youtube.com/c/OldSpiceIndia',
    },
]

const operations: { text: string, path: string }[] = [
    {
        text: 'Program Roadmap',
        path: '/#roadmap',
    },
    {
        text: 'Rewards & Benefits',
        path: '/#loot',
    },
    {
        text: 'FAQ`s',
        path: '/#faq',
    },
]

const navigation: { text: string, path: string }[] = [
    {
        text: 'ENLIST NOW',
        path: '/apply',
    },
    {
        text: 'TERMS OF SWAGGER',
        path: '/terms',
    },
    {
        text: 'PRIVACY DIRECTIVE',
        path: '/privacy',
    },
]

function Footer() {
    return (
        <footer className='bg-secondary border-t border-secondary/35 pt-24 sm:pt-32 pb-16 text-background'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-16 mb-16 sm:mb-24'>

                    <div className='md:col-span-2'>
                        <Link href='/' className='flex items-center gap-3 mb-8'>
                            <div className='h-10 w-auto flex items-center justify-center'>
                              <Image src='/oldspice.png' height={40} width={130} alt='Old Spice Logo' className='h-10 w-auto object-contain'/>
                            </div>
                            <span className='text-xl font-secondary text-background tracking-tighter uppercase'>
                              CAMPUS CAPTAINS
                            </span>
                        </Link>

                        <p className='text-background/70 max-w-xs sm:max-w-sm leading-relaxed mb-10 font-normal uppercase text-xs md:text-sm tracking-wide'>
                          Banishing the stench of library all-nighters. Join the official collegiate vanguard and command legendary freshness across your university.
                        </p>

                        <div className='flex gap-4'>
                            {socials.map((s, i) => (
                                <Link key={i} href={s.link} target='_blank' rel='noopener noreferrer' aria-label={s.name} className='w-12 h-12 border border-secondary-foreground flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-white transition-all duration-200'>
                                    {s.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className='text-background font-bold mb-8 uppercase tracking-[0.2em] text-sm md:text-base'>
                          OPERATIONS
                        </h4>
                        <ul className='space-y-4'>
                            {operations.map((item) => (
                                <li key={item.path}>
                                    <Link href={item.path} className='text-background/65 hover:text-primary transition-colors text-xs md:text-sm font-bold tracking-wider md:tracking-widest uppercase block'>
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-background font-bold mb-8 uppercase tracking-[0.2em] text-sm md:text-base'>
                          NAVIGATION
                        </h4>
                        <ul className='space-y-4'>
                            {navigation.map((item) => (
                                <li key={item.path}>
                                    <Link href={item.path} className='text-background/65 hover:text-primary transition-colors text-xs md:text-sm font-bold tracking-wider md:tracking-widest uppercase block'>
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='pt-10 border-t border-[#1f1f1f] flex flex-col sm:flex-row justify-between items-center gap-4'>
                    <p className='text-center sm:text-left text-[10px] md:text-xs font-bold text-[#8C8C8C] uppercase tracking-[0.25em]'>
                        Old Spice Campus Captains Program • Procter & Gamble
                    </p>
                    <p className='text-center sm:text-right text-[10px] md:text-xs font-bold text-[#8C8C8C] uppercase tracking-[0.25em]'>
                        © {new Date().getFullYear()} All Rights Reserved. Smell Like A Legend.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;