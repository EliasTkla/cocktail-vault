import styles from './details.module.css';
import Image from 'next/image';
import RatingInput from '@/app/components/inputs/RatingInput';
import SaveButton from '@/app/components/buttons/SaveButton';
import { getCocktailDetails } from '@/services/APIFunctions/APIFunctions';

export default async function cocktailDetails({ searchParams }: { searchParams: { search: string } }) {
    const cocktail: Cocktail = await getCocktailDetails(searchParams.search);

    return (
        <>
            <div className={styles.details_container}>
                <div className={styles.image_wrapper}>
                    <Image
                        key={cocktail.id}
                        src={cocktail.image}
                        alt='cocktail'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%", margin: "auto", objectFit: "cover" }}
                    />
                </div>

                <div className={styles.details}>
                    <h1>{cocktail.title}</h1>

                    <div className={styles.container}>
                        <div className={styles.user_input}>
                            <RatingInput cocktail={cocktail.id} />
                            <SaveButton cocktail={cocktail.id} />
                        </div>

                        <h3>Difficulty: <span>{cocktail?.difficulty}</span></h3>
                        <h3>Portions: <span>{cocktail?.portion}</span></h3>
                        <h3>Time: <span>{cocktail?.time}</span></h3>

                        <h3><u>Ingredients</u></h3>
                        <ul>
                            {cocktail.ingredients.map((item: string) => {
                                return (
                                    <li key={cocktail.id + '/' + item}>{item}</li>
                                )
                            })}
                        </ul>

                        <h3><u>Instructions</u></h3>
                        <ol>
                            {cocktail.method.map((step: any, number: number) => {
                                return (
                                    <li key={cocktail.id + '/' + number}>{step['Step ' + (number + 1)]}</li>
                                )
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}