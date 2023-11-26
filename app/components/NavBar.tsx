'use client';
import Link from 'next/link';
import styles from './styles/navbar.module.css';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NavBar() {
    const session = useSession();
    const router = useRouter();
    const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
    const [overlay, setOverlay] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Effect to set loading state for auth buttons to load
    useEffect(() => {
        setTimeout(() => { setIsLoading(false) }, 1000);
    }, []);


    const toggleSideBar = () => {
        var w = window.innerWidth;

        if (w < 1220) {
            setMobileNavbar(!mobileNavbar);

            var sidebar = document.getElementById('topbar');
            var toggle = document.getElementById("sidebar-toggler");

            if (sidebar && toggle) {

                if (mobileNavbar) {
                    toggle.classList.add(styles.toggle_animation);
                    setOverlay(true);
                    document.body.style.overflowY = "hidden";
                    sidebar.style.right = "0";
                } else {
                    toggle.classList.remove(styles.toggle_animation);
                    setOverlay(false);
                    document.body.style.overflowY = "auto";
                    sidebar.style.right = w > 425 ? "-50%" : "-100%";
                }
            }
        }
    }

    return (
        <>
            <nav id={styles.navbar}>
                <div className={styles.brand}>
                    <Link href={"/"} as={"/"}>
                        <h1><span>Cocktail</span></h1>
                        <Image
                            src="/static/images/cocktail.svg"
                            alt="cocktail icon"
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
                    {isLoading ?
                        <>
                            <li><span></span></li>
                            <li><span></span></li>
                            <li><span></span></li>
                            <li><span></span></li>
                        </>
                        :
                        <>
                            <li><Link href={"/"} as={"/"} onClick={toggleSideBar}>Home</Link></li>
                            <li><Link href={"/pages/about"} as={"/pages/about"} onClick={toggleSideBar}>About</Link></li>
                            <li><Link href={"/pages/collection"} as={"/pages/collection"} onClick={toggleSideBar}>Collection</Link></li>

                            {session.data ?
                                <>
                                    <li><Link href={"/pages/favourites"} as={"/pages/favourites"} onClick={() => { router.refresh(); toggleSideBar(); }}>Favourites</Link></li>
                                    <li><Link href={"#"} as={"#"} onClick={toggleSideBar}>{session.data?.user?.name ? session.data?.user?.name : '...'}</Link></li>
                                    <li><button className={styles.logout_btn} onClick={() => { signOut(); toggleSideBar(); }}></button></li>
                                </>
                                :
                                <li ><button className={styles.login_btn} onClick={() => { router.push('/pages/login'); toggleSideBar(); }}>Login</button></li>
                            }
                        </>
                    }
                </ul>
            </nav >

            <button id='sidebar-toggler' title='sidebar toggle' className={styles.toggler} onClick={toggleSideBar}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {overlay && (
                <div id='overlay' className={styles.overlay} onClick={toggleSideBar}></div>
            )}
        </>
    )
}                       