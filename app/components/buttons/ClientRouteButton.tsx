'use client';
import { useRouter } from 'next/navigation';
import styles from './styles/clientRouteButton.module.css';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

export default function ClientRouteButton({ authenticated }: { authenticated: boolean }) {
    const router = useRouter();
    const session = useSession();

    return (
        <>
            {authenticated ?
                <>
                    <li><Link href={"/pages/favourites"} as={"/pages/favourites"} onClick={() => { router.refresh() }}>Favourites</Link></li>
                    <li><Link href={"#"} as={"#"}>{session.data?.user?.name ? session.data?.user?.name : '...'}</Link></li>
                    <li><button className={styles.logout_btn} onClick={() => { signOut(); }}></button></li>
                </>
                :
                <li><button className={styles.login_btn} onClick={() => router.push('/pages/login')}>Login</button></li>
            }

        </>
    )
}