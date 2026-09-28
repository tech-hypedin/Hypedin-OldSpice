import api from '@/src/utils/api';

import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import type { ApiRes } from '@/src/types/apiResponse';

type Credentials = {
    email: string,
    password: string
}

function useLogin() {
    const router = useRouter();

    return useMutation({
        mutationFn: async (credentials: Credentials) => {
            const { data }: { data: ApiRes } = await api.post('', credentials);

            return data;
        },
        onMutate: () => {
            toast.loading('Logging in...', { id: 'login-toast' });
        },
        onSuccess: (data: ApiRes) => {
            toast.success(data.message || 'Logged in', { id:  'login-toast' });

            const searchParams = new URLSearchParams(window.location.search);
            const redirectUrl = searchParams.get('from');

            if (redirectUrl) {
              router.replace(decodeURIComponent(redirectUrl));
            } else if (data.resUser?.role === 'Admin') {
              router.replace('/admin');
            } else if (data.resUser?.role === 'Ambassador') {
              router.replace('/dashboard');
            } else if (data.resUser?.role === 'Manager') {
              router.replace('/manager');
            } else {
              router.replace('/');
            }
        },
        onError: (err: any) => {
            const errMessage = err.response?.data?.message || 'An Error Occured';
            
            toast.error(errMessage, { id: 'login-toast' });

            // * Forward error telemetry to the server
            fetch('/api/log-error', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    endpoint: 'application_submission',
                    message: errMessage,
                    status: err.response?.status,
                    stack: err.stack,
                    serverData: err.response?.data,
                }),
            }).catch(() => {
                // * Fail silently to avoid interrupting the UI flow
            });
        }
    });
}

export default useLogin;