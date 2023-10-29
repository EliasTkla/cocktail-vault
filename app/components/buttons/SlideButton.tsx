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
            <button className={styles.slide} onClick={() => { slideShow("left"); }} title='slide left'>
                <span className={`${styles.arrow} ${styles.left}`}></span>
            </button>

            <button className={styles.slide} onClick={() => { slideShow("right"); }} title='slide right' >
                <span className={`${styles.arrow} ${styles.right}`}></span>
            </button>
        </>
    );
}
