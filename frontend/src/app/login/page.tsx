'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';

import useLogin from '@/src/hooks/useLogin';

interface LoginForm {
    email: string,
    password: string,
}

const formState: LoginForm = {
    email: '',
    password: ''
}

function LoginPage() {
	const [formData, setFormData] = React.useState<LoginForm>(formState);
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const { mutate: Login, isPending } = useLogin();

	const handleLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		Login(formData);
	}

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name as keyof LoginForm;
        const value = e.target.value;
        setFormData((f) => ({ ...f, [name]: value }));
    }

	return (
		<main className='min-h-screen bg-background flex flex-col justify-between'>
			<header className='relative z-20 w-full border-b border-neutral-200 bg-background/95 backdrop-blur-md py-4 px-6 sm:px-12 flex items-center justify-between'>
				<Link href='/' className='flex items-center gap-3'>
					<Image src='/oldspice.png' alt='Old Spice Logo' height={36} width={110} className='h-9 w-auto object-contain' priority/>
					<span className='hidden sm:inline-block font-black text-xs uppercase tracking-widest text-secondary border-l border-neutral-200 pl-3'>
						User Login
					</span>
				</Link>

				<Link href='/' className='text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-primary transition-colors'>
					&larr; Return to Home Page
				</Link>
			</header>

            <div className='absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem]'/>

			<div className='relative flex-1 flex items-center justify-center px-4 py-12 overflow-hidden'>
				<div className='w-full max-w-md'>

					<div className='bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-sm'>

						<form onSubmit={handleLogin} noValidate className='space-y-5'>
							<div>
								<label htmlFor='email' className='block text-xs font-bold uppercase tracking-wider text-secondary mb-2'>
									Captain ID / Email
								</label>
								<div className='relative'>
									<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400'>
										<Mail className='w-4 h-4' />
									</div>
									<input id='email' name='email' type='email' autoComplete='email' value={formData.email} onChange={handleChange} placeholder='JhonDoe@gmail.com' className='w-full pl-10 pr-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-all'
									/>
								</div>
							</div>

							<div>
								<div className='flex items-center justify-between mb-2'>
									<label htmlFor='password' className='block text-xs font-bold uppercase tracking-wider text-secondary'>
										Secret Passphrase
									</label>
								</div>
								<div className='relative'>
									<div className='absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400'>
										<Lock className='w-4 h-4' />
									</div>
									<input id='password' name='password' type={showPassword ? 'text' : 'password'} autoComplete='current-password' value={formData.password} onChange={handleChange} placeholder='••••••••••••' className='w-full pl-10 pr-11 py-3 bg-white border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-all'/>

									<button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-neutral-700 transition-colors hover:cursor-pointer' aria-label={showPassword ? 'Hide password' : 'Show password'}>
										{showPassword ? (
											<EyeOff className='w-4 h-4' />
										) : (
											<Eye className='w-4 h-4' />
										)}
									</button>
								</div>
							</div>

							<button type='submit' disabled={isPending} className='w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-background font-bold text-xs uppercase tracking-widest py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer'>
								{isPending ? 'Authenticating...' : 'Enter Dashboard'}
								{!isPending && <ArrowRight className='w-4 h-4' />}
							</button>
						</form>

						<div className='mt-8 pt-6 border-t border-secondary-foreground text-center'>
							<p className='text-xs text-neutral-500 font-medium'>
								Not an appointed Campus Captain yet?{' '}
								<Link href='/apply' className='text-primary font-bold uppercase tracking-wider hover:underline ml-1'>
									Enlist Here
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default LoginPage;