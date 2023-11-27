'use client';
import { useRouter } from 'next/navigation';
import styles from './styles/learnButton.module.css';

export default function CustomButton({ page, text }: { page: string, text: string }) {
    const router = useRouter();

    return (
        <button className={styles.learn_button} title='about page link' onClick={() => { router.push(`/pages/${page}`) }}>{text}</button>
    )
}