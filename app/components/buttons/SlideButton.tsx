'use client';
import styles from './styles/slideButton.module.css';

export default function SlideButton({ direction }: { direction: string }) {

    function slideShow() {
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
        <button className={styles.slide} onClick={slideShow} title='slide button'>
            <span className={`${styles.arrow} ${direction === "left" ? styles.left : styles.right}`}></span>
        </button>
    );
}
