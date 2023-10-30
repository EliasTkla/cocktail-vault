import './globals.css';
import type { Metadata } from 'next';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AuthProvider from './components/providers/AuthProvider';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
    title: 'Cocktail Vault',
    icons: {
        icon: '/static/images/cocktail.svg'
    },
    description: 'Browse through a collection of cocktail recipes to save the right drink for any occasion.'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="en">
                <body>
                    <AuthProvider>
                        <NavBar />
                        <main>
                            {children}
                        </main>
                        <Footer />
                    </AuthProvider>
                </body>
            </html>
            <Analytics />
        </>
    )
}
