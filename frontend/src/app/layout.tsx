import './globals.css';

import { Toaster } from 'react-hot-toast';
import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from 'next';

import Providers from '@/src/utils/providers';

const geistSans = Geist({
	variable: '--font-body',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-heading',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Old Spice Creator Program',
	description: 'Become a creator for Old Spice Creator Program. Smell like a champion.'
}

function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
	const toastOption = {
        style: {
        	background: '#ffffff',
        	color: '#AF000F',
        	border: '1px solid #AF000F',
        },
        success: {
        	duration: 5000,
        	iconTheme: {
        		primary: '#09af00',
        		secondary: '#ffffff',
        	},
        },
        error: {
          	duration: 6000,
          	iconTheme: {
            	primary: '#AF000F',
            	secondary: '#ffffff',
          	},
        },
	}

	return (
		<html lang='en' className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
			<body className='bg-background text-secondary font-serif antialiased selection:bg-primary selection:text-background overflow-x-hidden'>
				<Providers>
					<Toaster toastOptions={ toastOption } position='bottom-center'/>
					{ children }
				</Providers>
			</body>
		</html>
	);
}

export default RootLayout;