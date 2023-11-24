import styles from './styles/cocktailCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function CocktailCard({ id, title, image, difficulty }: Cocktail) {

    return (
        <div className={styles.container} key={id} >
            <Link href={`/pages/cocktail/${title}?search=${id}`} as={`/pages/cocktail/${title}?search=${id}`}>
                <div className={styles.image_wrapper}>
                    <Image
                        src={image}
                        alt={title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "auto", height: "115%", transition: ".3s", marginLeft: "-25%", objectFit: "cover" }}
                        priority={true}
                    />
                </div>

                <div className={styles.drink_text}>
                    <span>
                        <h3>{title}</h3>
                    </span>

                    <h4>{difficulty}</h4>
                </div>
            </Link>
        </div>
    )
}