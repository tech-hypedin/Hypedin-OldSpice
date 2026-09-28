import Link from 'next/link';
import { Compass, Home, ArrowLeft } from 'lucide-react';

function NotFound() {
	return (
		<main className='min-h-[85vh] bg-background flex items-center justify-center px-4 py-24'>
			<div className='max-w-xl w-full text-center'>
				<div className='w-20 h-20 bg-primary/10 border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-8'>
					<Compass className='w-10 h-10 text-primary animate-[spin_12s_linear_infinite]' />
				</div>

				<p className='text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3'>
					Error 404 • Uncharted Waters
				</p>

				<h1 className='text-4xl sm:text-6xl font-black uppercase tracking-tight text-secondary leading-tight mb-4'>
					You Took A Wrong Turn, Sailor.
				</h1>

				<p className='text-neutral-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto'>
					Look at the URL. Now back to the homepage. Sadly, this page does not exist—probably lost somewhere off the coast of Swagger Island.
				</p>

				<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
					<Link href='/' className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-background font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-colors shadow-md cursor-pointer'>
						<Home className='w-4 h-4' />
						Return to Flagship
					</Link>

					<Link href='/login' className='w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-secondary/20 hover:border-primary text-secondary hover:text-primary font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-colors cursor-pointer'>
						<ArrowLeft className='w-4 h-4' />
						Login
					</Link>
				</div>
			</div>
		</main>
	);
}

export default NotFound;