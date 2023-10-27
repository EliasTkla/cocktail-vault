'use client';
import styles from './styles/dropdownMenu.module.css';
import { useRouter } from 'next/navigation';

export default function DropdownMenu() {
    const router = useRouter();

    function updateFilter(difficulty: string) {
        if (difficulty != '') {
            router.push(`?search=${difficulty}`);
        } else {
            router.push("/pages/collection");
        }
    }

    return (

        <div className={styles.dropdown}>
            <button className={styles.dropdown_btn}></button>

            <div className={styles.dropdown_content}>
                <span onClick={() => { updateFilter("Easy") }}>Easy</span>
                <span onClick={() => { updateFilter("Medium") }}>Medium</span>
                <span onClick={() => { updateFilter("") }}>Clear</span>
            </div>
        </div>

    )
}