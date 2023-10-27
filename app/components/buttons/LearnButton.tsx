'use client';
import styles from './styles/customButton.module.css';
import Link from 'next/link';

export default function CustomButton() {

    return (
        <div className={styles.button_container}>
            <Link href={"/pages/about"} as={"/pages/about"}>
                <span></span>
                <button>Learn More</button>
                <span></span>
            </Link>
        </div>
    )
}