import styles from './styles/errorMessage.module.css';

export default function ErrorMessage() {
    return (
        <div className={styles.error_message}>
            <h2>Something went wrong!</h2>
            <h3>Please refresh the page or try again later.</h3>
        </div>
    )
}