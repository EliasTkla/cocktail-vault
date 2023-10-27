import styles from './styles/banner.module.css';
import Image from 'next/image';

export default function Banner(props: any) {
    var bgImage = "/static/images/" + props.backgroundFile;
    var containerClass = props.containerClass;
    var imageClass = props.imageClass;

    return (
        <div className={styles[containerClass]}>
            <Image
                src={bgImage}
                alt="banner"
                className={styles[imageClass]}
                width={0}
                height={0}
                sizes="100vw"
                priority={true}
            />
        </div>
    )
}