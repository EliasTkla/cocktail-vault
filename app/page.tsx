import styles from './home.module.css';
import CocktailList from '@/app/components/CocktailList';
import SlideButton from '@/app/components/buttons/SlideButton';
import LearnButton from './components/buttons/LearnButton';
import Link from 'next/link';

export default function Home() {

    function slideShow(direction: string) {
        var slide = document.getElementById("slide_show");

        if (slide) {
            var length = slide.offsetWidth;

            if (direction == "left") {
                slide.scrollLeft -= length;
            } else {
                slide.scrollLeft += length;
            }
        }
    }

    return (
        <div className={styles.home_container}>
            <div>
                <div className={styles.background}></div>

                <div className={styles.intro_text}>
                    <h1>
                        Unveiling <br /> the Artistry
                    </h1>

                    <p>
                        From classic favorites to modern innovations, cocktails encapsulate
                        the art of mixing flavors, connecting us with the past while embracing
                        creativity and taste.
                    </p>

                    <LearnButton />
                </div>
            </div>

            <div className={styles.popular_list}>
                <h1>Featured</h1>
                <Link href={"/pages/collection"} as={"/pages/collection"}>Explore more</Link>

                <SlideButton direction={"left"} />

                <CocktailList page={"home"} />

                <SlideButton direction={"right"} />
            </div>
        </div>
    );
}
