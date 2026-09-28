'use client';

import React, { useEffect } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

interface GlobalErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

function GlobalError({ error, reset }: GlobalErrorProps) {
	useEffect(() => {
		console.error('Critical Global Crash:', error);

		fetch('/api/log-error', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				endpoint: 'global_error_boundary',
				message: error.message || 'Critical system failure',
				stack: error.stack,
				digest: error.digest,
			}),
		}).catch(() => {
			
		});
	}, [error]);

	return (
		<html lang='en'>
			<body style={{ margin: 0, padding: 0, backgroundColor: '#ffffff', color: '#090907', fontFamily: 'Arial, Helvetica, sans-serif', WebkitFontSmoothing: 'antialiased' }}>
				<main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', boxSizing: 'border-box' }}>
					<div style={{ maxWidth: '520px', width: '100%', textAlign: 'center' }}>
						<div style={{ width: '72px', height: '72px', backgroundColor: 'rgba(175, 0, 15, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
							<AlertTriangle style={{ width: '36px', height: '36px', color: '#AF000F' }}/>
						</div>

						<p style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#AF000F', marginBottom: '8px' }}>
							Critical Server Error
						</p>

						<h1 style={{ fontSize: '36px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 16px 0', lineHeight: 1.1 }}>
							Server Offline.
						</h1>

						{error.digest && (
							<p style={{ fontSize: '11px', fontFamily: 'monospace', color: '#888888', marginBottom: '28px' }}>
								Crash Digest: {error.digest}
							</p>
						)}

						<button type='button' onClick={() => reset()} style={{ backgroundColor: '#AF000F', color: '#ffffff', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', padding: '16px 36px', borderRadius: '9999px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(175, 0, 15, 0.25)' }}>
							<RefreshCw style={{ width: '16px', height: '16px' }} />
							Try Refresh
						</button>
					</div>
				</main>
			</body>
		</html>
	);
}

export default GlobalError;