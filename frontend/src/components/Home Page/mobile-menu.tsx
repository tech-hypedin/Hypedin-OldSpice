'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavLinkItem {
	label: string;
	href: string;
}

function MobileMenu({ navLinks }: { navLinks: NavLinkItem[] }) {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const router = useRouter();

	return (
    	<>
      		<button type='button' onClick={() => setMenuOpen((prev) => !prev)} aria-expanded={menuOpen} aria-controls='mobile-menu' aria-label={menuOpen ? 'Close menu' : 'Open menu'} className='lg:hidden w-10 h-10 border border-neutral-200 rounded-md flex items-center justify-center text-neutral-800 hover:border-primary/60 hover:text-primary transition-colors cursor-pointer'>
      		  {menuOpen ? <X className='w-5 h-5' aria-hidden='true' /> : <Menu className='w-5 h-5' aria-hidden='true' />}
      		</button>

      		<AnimatePresence>
      			{menuOpen && (
      		    	<motion.div
						id='mobile-menu'
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
						className='lg:hidden absolute top-20 left-0 right-0 overflow-hidden bg-background/95 backdrop-blur-md border-b border-neutral-200 shadow-xl'
      		    	>
      		      		<div className='px-6 py-6 flex flex-col gap-1'>
      		        		{navLinks.map((link, i) => (
      		          			<motion.div
      		          				key={link.label}
      		          				initial={{ opacity: 0, x: -16 }}
      		          				animate={{ opacity: 1, x: 0 }}
      		          				transition={{ delay: i * 0.05, duration: 0.25 }}
      		          			>
      		            			<Link href={link.href} onClick={() => setMenuOpen(false)} className='block text-base font-bold tracking-widest uppercase text-neutral-800 hover:text-primary py-3 border-b border-neutral-100 transition-colors'>
      		              				{link.label}
      		            			</Link>
      		          			</motion.div>
      		        		))}

      		        		<motion.div
      		        			initial={{ opacity: 0 }}
      		        			animate={{ opacity: 1 }}
      		        			transition={{ delay: navLinks.length * 0.05 + 0.1 }}
      		        			className='pt-4 flex flex-col gap-2'
      		        		>
      		          			<button
      		          			  onClick={() => {
      		          			    setMenuOpen(false);
      		          			    router.push('/application');
      		          			  }}
      		          			  className='w-full bg-primary text-background font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-primary/90 transition-all duration-200 shadow-sm'
      		          			>
      		            			Enlist Now
      		          			</button>
      		        		</motion.div>
      		      		</div>
      		    	</motion.div>
      		  	)}
      		</AnimatePresence>
    	</>
  	);
}

export default MobileMenu;