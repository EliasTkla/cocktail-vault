import styles from './home.module.css';
import CocktailList from '@/app/components/CocktailList';
import SlideButton from '@/app/components/buttons/SlideButton';
import LearnButton from './components/buttons/LearnButton';

export default function Home() {

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

                    <LearnButton page={"about"} text={"Learn More"} />
                </div>
            </div>

            <div className={styles.cocktail_facts}>
                <div>
                    <span></span>
                </div>

                <div>
                    <h3>Early Beginnings:</h3>

                    <p>The concept of mixing alcoholic beverages with other ingredients dates back to ancient times. Early civilizations such as the Greeks and Romans had various concoctions that blended wine with herbs and spices.
                        In the Middle Ages, the use of distilled spirits became more prevalent, and flavored spirits were created for medicinal purposes.</p>

                    <h3>The Birth of the Word "Cocktail":</h3>

                    <p>The term "cocktail" is thought to have originated in the early 19th century. One popular story traces it back to a publication in 1806, where it was defined as a combination of spirits, sugar, water, and bitters. The term's exact origin remains a subject of debate.</p>

                    <h3>The Rise of American Mixology:</h3>

                    <p>In the 19th century, the cocktail culture gained momentum in the United States. Bartenders and mixologists experimented with a wide range of ingredients, and cocktail bars became social hubs.
                        Jerry Thomas, often considered the "father of mixology," published the first known cocktail book, "The Bartender's Guide," in 1862, showcasing a variety of cocktail recipes.</p>

                    <h3>Prohibition and Speakeasies:</h3>

                    <p>The Prohibition era (1920-1933) in the United States, during which the production and sale of alcoholic beverages were banned, led to the rise of speakeasies and clandestine bars. Cocktails became a way to mask the taste of inferior spirits.
                        Classic cocktails such as the Martini and the Old Fashioned gained popularity during this period.</p>
                </div>

                <div>
                    <h3>Mid-20th Century and Tiki Culture:</h3>

                    <p>After the repeal of Prohibition, the cocktail scene continued to evolve. Tiki bars, inspired by Polynesian and tropical themes, gained popularity in the mid-20th century. Exotic and fruity cocktails became fashionable.</p>

                    <h3>Cocktail Renaissance:</h3>

                    <p>In the late 20th and early 21st centuries, there was a resurgence of interest in craft cocktails. Bartenders began to focus on using high-quality ingredients, fresh fruits, and artisanal spirits.
                        The craft cocktail movement emphasized creativity and innovation, leading to the rediscovery of classic recipes and the development of new and unique cocktails.</p>

                    <h3>Global Influence:</h3>

                    <p>Cocktails have become a global phenomenon, with each region contributing its own unique twists and creations. International competitions and collaborations among bartenders have further fueled the evolution of cocktail culture.</p>
                </div>

                <div>
                    <span></span>
                </div>
            </div>

            <span className={styles.header_break}><h1>Featured cocktails</h1></span>

            <div className={styles.popular_list}>
                <SlideButton direction={"left"} />

                <CocktailList page={"home"} />

                <SlideButton direction={"right"} />

                <LearnButton page={"collection"} text={"Explore more"} />
            </div>
        </div>
    );
}
