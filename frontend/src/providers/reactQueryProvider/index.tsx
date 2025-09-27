'use client'
import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { showToast } from '@/components/notification';
import { AxiosError } from 'axios';

const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            mutations: {
                onError: (error: unknown) => {
                    console.error(error);

                    if (error instanceof AxiosError) {
                        const message = error.response?.data?.message || 'Something went wrong!';
                        showToast('error', message);
                    } else if (error instanceof Error) {
                        showToast('error', error.message);
                    } else {
                        showToast('error', 'Unexpected error occurred!');
                    }
                }
            }
        }
    });

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default ReactQueryProvider;
