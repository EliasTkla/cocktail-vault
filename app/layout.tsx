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
    }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <NavBar />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </AuthProvider>
                <Analytics />
            </body>
        </html>
    )
}
