'use client';
import styles from './styles/slideButton.module.css';

export default function SlideButton() {

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
        <>
            <button className={styles.slide} onClick={() => { slideShow("left"); }} >
                <i className={`${styles.arrow} ${styles.left}`}></i>
            </button>

            <button className={styles.slide} onClick={() => { slideShow("right"); }} >
                <i className={`${styles.arrow} ${styles.right}`}></i>
            </button>
        </>
    );
}
