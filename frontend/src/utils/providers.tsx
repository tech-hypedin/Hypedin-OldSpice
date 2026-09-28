'use client';

import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MotionConfig } from 'framer-motion';

function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = React.useState(() => new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
				retry: 2,
				refetchOnWindowFocus: false
			}
		}
	}));

    return (
        <QueryClientProvider client={queryClient}>
			<MotionConfig reducedMotion='user'>
				{ children }
			</MotionConfig>
		</QueryClientProvider>
    );
}

export default Providers;