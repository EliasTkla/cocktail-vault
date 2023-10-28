'use client';
import { useRouter } from 'next/navigation';
import styles from './styles/learnButton.module.css';
import Link from 'next/link';

export default function CustomButton() {
    const router = useRouter();

    return (
        <div className={styles.button_container}>
            <span></span>
            <button onClick={() => { router.push("/pages/about") }}>Learn More</button>
            <span></span>
        </div>
    )
}