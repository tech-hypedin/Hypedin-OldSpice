import api from '@/src/utils/api';

import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import type { FormState } from '@/src/types/formState';
import type { ApiRes } from '@/src/types/apiResponse';

function useApplication() {
    const router = useRouter();

    return useMutation({
        mutationFn: async (formData: FormState) => {
            const { data }: ApiRes = await api.post('', formData);
            return data;
        },
        onMutate: () => {
            toast.loading('Submitting your application...', { id: 'submit-toast' });
        },
        onSuccess: (data: ApiRes) => {
            toast.success(data.message, { id: 'submit-toast' });

            setTimeout(() => {
                router.push('/');
            }, 2000);
        },
        onError: (err: any) => {
            const errMessage = err.response?.data?.message || 'An Error Occured';

            toast.error(errMessage, { id: 'submit-toast' });

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

export default useApplication;