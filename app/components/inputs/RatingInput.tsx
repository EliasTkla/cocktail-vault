'use client';
import { useSession } from 'next-auth/react';
import styles from './styles/ratingInput.module.css'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { getRating, updateRating } from '@/services/serverFunctions/Serverfunctions';

export default function RatingInput({ cocktail }: { cocktail: string }) {
    const router = useRouter();
    const session = useSession();
    const [ratingValue, setRatingValue] = useState("");

    useEffect(() => {
        checkRating();
    }, []);

    const checkRating = async () => {
        const check = await getRating(cocktail);

        setRatingValue(check);
    }

    async function changeRating(e: any) {
        if (session.status == 'authenticated') {
            const update = await updateRating(cocktail, session.data?.user?.email, session.data?.accessToken, e.target.value);

            if (update) {
                checkRating();
            }
        } else {
            router.push("/pages/login");
        }
    }

    return (
        <div className={styles.rating} >
            <input type="radio" id="star5" name="rate" value="5" onChange={changeRating} checked={ratingValue === "5"} />
            <label htmlFor="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" onChange={changeRating} checked={ratingValue === "4"} />
            <label htmlFor="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" onChange={changeRating} checked={ratingValue === "3"} />
            <label htmlFor="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" onChange={changeRating} checked={ratingValue === "2"} />
            <label htmlFor="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" onChange={changeRating} checked={ratingValue === "1"} />
            <label htmlFor="star1" title="text">1 star</label>
        </div>
    )
}


