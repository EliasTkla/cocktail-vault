import styles from './home.module.css';
import Banner from './components/Banner';
import CocktailList from '@/app/components/CocktailList';
import SlideButton from '@/app/components/buttons/SlideButton';
import LearnButton from './components/buttons/LearnButton';

export default function Home() {

    return (
        <>
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

            <Banner backgroundFile={"homeBanner.jpg"} containerClass={"background_container"} imageClass={"background"} />

            <div className={styles.popular_list}>
                <h2>Featured Cocktails</h2>

                <CocktailList page={"home"} />

                <SlideButton />
            </div>
        </>
    );
}
