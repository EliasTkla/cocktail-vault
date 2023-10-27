import Link from 'next/link';
import styles from './styles/navbar.module.css';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import RouteButton from './buttons/ClientRouteButton';
import NavToggleButton from './buttons/NavToggleButton';

export default async function NavBar() {
    const session = await getServerSession(options);

    if (session?.error == "Refresh token unauthorized") {
        signOut();
    }

    return (
        <>
            <nav id={styles.navbar}>
                <div className={styles.brand}>
                    <Link href={"/"} as={"/"}>
                        <h1><span>Cocktail</span></h1>
                        <Image
                            src="/static/images/cocktail.svg"
                            alt="brand logo"
                            className={styles.brand_img}
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority={true}
                        />
                        <h1>Vault</h1>
                    </Link>
                </div>

                <ul id={'topbar'} className={styles.topbar_links}>
                    <li><Link href={"/"} as={"/"}>Home</Link></li>
                    <li><Link href={"/pages/about"} as={"/pages/about"}>About</Link></li>
                    <li><Link href={"/pages/collection"} as={"/pages/collection"}>Collection</Link></li>

                    {session?.user ?
                        <RouteButton authenticated={true} />
                        :
                        <RouteButton authenticated={false} />
                    }
                </ul>
            </nav >

            <NavToggleButton />
        </>
    )
}                       