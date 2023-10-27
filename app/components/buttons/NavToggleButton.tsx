'use client';
import styles from './styles/navToggleButton.module.css';
import { useState } from 'react';

export default function NavToggleButton() {
    const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
    const [overlay, setOverlay] = useState(false);

    const toggleSideBar = () => {
        setMobileNavbar(!mobileNavbar);

        var sidebar = document.getElementById('topbar');

        if (sidebar) {
            var w = window.innerWidth;

            if (mobileNavbar) {
                document.getElementById('bar1')?.classList.add(styles.first_bar);
                document.getElementById('bar2')?.classList.add(styles.second_bar);
                document.getElementById('bar3')?.classList.add(styles.third_bar);

                setOverlay(true);
                document.body.style.overflowY = "hidden";
                sidebar.style.width = w > 425 ? "50%" : "100%";
            } else {
                document.getElementById('bar1')?.classList.remove(styles.first_bar);
                document.getElementById('bar2')?.classList.remove(styles.second_bar);
                document.getElementById('bar3')?.classList.remove(styles.third_bar);

                setOverlay(false);
                document.body.style.overflowY = "auto";
                sidebar.style.width = "0%";
            }
        }
    }

    return (
        <>
            <button id='sidebar-toggler' className={styles.toggler} onClick={() => { toggleSideBar() }}>
                <span id="bar1" className={styles.burger_bars}></span>
                <span id="bar2" className={styles.burger_bars}></span>
                <span id="bar3" className={styles.burger_bars}></span>
            </button>

            {overlay && (
                <div id='overlay' className={styles.overlay}></div>
            )}
        </>
    )
}                       