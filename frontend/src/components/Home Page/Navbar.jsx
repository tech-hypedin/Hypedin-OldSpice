import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './mobile-menu';

const navLinks = [
  // { label: 'About the Program', href: '/#mission' },
  { label: 'Program Roadmap', href: '/#roadmap' },
  { label: 'Rewards & Benefits', href: '/#loot' },
  { label: "FAQs", href: '/#faq' }
]

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-neutral-200 font-['Open_Sans']">
      {/* Inline Font Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <Link href="/" className="flex items-center">
            <Image 
              src="/oldspice.png" 
              alt="Old Spice Logo" 
              height={270} 
              width={150} 
              priority 
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-neutral-700">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="hover:text-primary transition-colors py-2 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link 
            href="/apply" 
            className="hidden sm:inline-flex bg-primary text-background font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Enlist Now
          </Link>

          <MobileMenu navLinks={navLinks}/>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;