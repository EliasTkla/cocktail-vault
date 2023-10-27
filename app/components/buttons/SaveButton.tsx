'use client';
import { useSession } from 'next-auth/react';
import styles from './styles/saveButton.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { addCocktial, removeCocktial, getSavedState } from '@/services/serverFunctions/Serverfunctions';

export default function SaveButton({ cocktail }: { cocktail: string }) {
    const router = useRouter();
    const [saved, setSaved] = useState<boolean>(false);
    const session = useSession();

    useEffect(() => {
        const checkState = async () => {
            const check = await getSavedState(session.data?.user?.email, session.data?.accessToken, cocktail);

            setSaved(check);
        }

        if (session.status == 'authenticated') {
            checkState();
        }
    }, []);

    async function updateState() {
        if (session.status == 'authenticated') {
            if (saved) {
                const state = await removeCocktial(session.data?.user?.email, session.data?.accessToken, cocktail);
                setSaved(state);
            } else {
                const state = await addCocktial(session.data?.user?.email, session.data?.accessToken, cocktail);
                setSaved(state);
            }
        } else {
            router.push("/pages/login");
        }
    }

    return (
        <button className={`${styles.save_btn} ${saved ? styles.saved_icon : styles.unsaved_icon}`} onClick={() => { updateState() }}></button>
    )
}