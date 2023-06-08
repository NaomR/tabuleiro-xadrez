import styles from '../styles/Home.module.css'
import Tabuleiro from '@/components/Tabuleiro'

export default function inicio() {
    return (
        <div className={styles.main}>
            <Tabuleiro />
        </div>
    )
}