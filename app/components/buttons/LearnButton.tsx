'use client';
import styles from './styles/learnButton.module.css';
import Link from 'next/link';

export default function CustomButton({ page, text }: { page: string, text: string }) {

    return (
        <Link className={styles.learn_button} href={page === "about" ? "/pages/about" : "/pages/collection"} as={`/pages/${page}`}>
            {text}
        </Link>
    )
}