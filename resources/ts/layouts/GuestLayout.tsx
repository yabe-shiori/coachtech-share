import React, { ReactNode } from 'react';
import { AuthHeader } from '../components/AuthHeader';


interface GuestProps {
    children: ReactNode;
}

export const Guest: React.FC<GuestProps> = ({ children }) => {
    return (
        <>
            <div className="min-h-screen flex flex-col pt-6 sm:pt-0 bg-gray-800 text-center">
                <AuthHeader />
                <div className="mt-28 w-full sm:max-w-md  px-12 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg mx-auto">
                    {children}
                </div>
            </div>
        </>
    );
};