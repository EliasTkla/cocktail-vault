'use client';
import styles from "./styles/searchInput.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
    const router = useRouter();
    const path: any = usePathname();
    const [searchText, setSearchText] = useState('');

    function updateSearch(e: any) {
        if (e.key == 'Enter') {
            if (searchText != '') {
                router.push(`?search=${searchText}`);
            } else {
                router.push(path);
            }
        }

        if (e == 'clear') {
            router.push(path);
        }
    }

    return (
        <>
            <input name="search input" className={styles.searchbar} type="text" placeholder="Find your cocktail..." autoComplete='off' value={searchText} onChange={(e) => { e.preventDefault(); setSearchText(e.target.value) }} onKeyDown={(e) => { updateSearch(e); }} />
            {searchText != '' && (
                <button className={styles.clear_btn} onClick={() => { setSearchText(''); updateSearch('clear') }}>X</button>
            )}
        </>
    )
}