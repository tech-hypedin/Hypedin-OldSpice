'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, AlertOctagon } from 'lucide-react';

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error('Route Boundary Error:', error);

		fetch('/api/log-error', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				endpoint: 'route_error_boundary',
				message: error.message || 'Unhandled route error',
				stack: error.stack,
				digest: error.digest,
			}),
		}).catch(() => {

		});
	}, [error]);

	return (
		<main className='min-h-[85vh] bg-background flex items-center justify-center px-4 py-24'>
			<div className='max-w-xl w-full text-center'>
				<div className='w-20 h-20 bg-primary/10 border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-8'>
					<AlertOctagon className='w-10 h-10 text-primary' />
				</div>

				<p className='text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3'>
					Directives Compromised
				</p>

				<h1 className='text-4xl sm:text-5xl font-black uppercase tracking-tight text-secondary leading-tight mb-4'>
					Man Down On The Field.
				</h1>

				<p className='text-neutral-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto'>
					Something went sideways on the deck. Take a breath, shake it off, and recalibrate your coordinates.
				</p>

				{error.digest && (
					<p className='text-[11px] font-mono text-neutral-600 mb-8 select-all'>
						Error Code: {error.digest}
					</p>
				)}

				<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
					<Link href='/' className='w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-secondary/20 hover:border-primary text-secondary hover:text-primary font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-colors'>
						<Home className='w-4 h-4' />
						Return to Home Page
					</Link>
				</div>
			</div>
		</main>
	);
}

export default Error;