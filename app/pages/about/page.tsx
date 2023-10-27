import styles from './about.module.css'
import Banner from "../../components/Banner";

export default function About() {

    return (
        <div className={styles.about_container}>
            <Banner backgroundFile={"aboutBanner.jpg"} containerClass={"banner_container"} imageClass={"banner"} />

            <h1>About Us</h1>

            <div className={styles.about_details}>
                <div>
                    <h2>Unveiling the World of Mixology</h2>

                    <p>Cocktail Vault is your treasure trove of mixological marvels. Whether
                        you're a seasoned cocktail enthusiast or a curious novice, our platform
                        is designed to cater to your every libation need. Dive into a treasure
                        trove of meticulously curated cocktail recipes, each a work of art in its
                        own right.</p>
                </div>

                <div>
                    <h2>Endless Inspiration</h2>

                    <p>With an ever-expanding collection of cocktails from classic to contemporary,
                        our website offers endless inspiration for your cocktail journey. Explore
                        iconic concoctions like the Martini, Old Fashioned, and Margarita, or embark
                        on a quest to discover lesser-known gems waiting to be mixed and savored.</p>
                </div>

                <div>
                    <h2>User-Friendly Experience</h2>

                    <p>Our user-friendly interface makes browsing and selecting cocktails a breeze.
                        Search by name, ingredients, or even your mood, and unlock a world of cocktail
                        possibilities. With detailed ingredient lists, step-by-step instructions,
                        and serving suggestions, we're here to make your cocktail-making journey smooth
                        and enjoyable.</p>
                </div>

                <div>
                    <h2>Your Mixological Adventure Awaits</h2>

                    <p>Cocktail Vault isn't just a website; it's your passport to a world of taste
                        and creativity. Whether you're looking to impress guests at your next soirée
                        or simply unwind with a well-crafted drink after a long day, we've got you covered.</p>
                </div>

                <div>
                    <h2>Join Our Community</h2>

                    <p>Join our growing community of cocktail enthusiasts who are passionate about
                        shaking, stirring, and sipping their way through the world of mixology.
                        Share your own creations, tips, and tricks, and connect with like-minded
                        individuals who appreciate the art of the cocktail.</p>
                </div>

                <div>
                    <h2>Cheers to You</h2>

                    <p>As you explore Cocktail Vault, remember that each cocktail recipe is a story
                        waiting to be told, a flavor waiting to be experienced, and an opportunity
                        to craft unforgettable moments. We raise our glasses to you, and your mixological
                        adventure is about to begin. Cheers!</p>
                </div>
            </div>
        </div>
    )
}