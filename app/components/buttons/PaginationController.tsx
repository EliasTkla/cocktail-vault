'use client';
import styles from './styles/paginationController.module.css';
import { useRouter, useSearchParams } from 'next/navigation'

export default function PaginationController({ hasNextPage }: { hasNextPage: boolean }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('search');
    const per_load = searchParams.get('per_load') ? searchParams.get('per_load') : '30';

    return (
        <button
            className={hasNextPage ? styles.load_btn : styles.hide_btn}
            onClick={() => {
                if (search) {
                    router.replace(`?search=${search}&per_load=${Number(per_load) + 30}`, { scroll: false });
                } else {
                    router.replace(`?per_load=${Number(per_load) + 30}`, { scroll: false });
                }
            }}>
            Load more
        </button>
    )
}