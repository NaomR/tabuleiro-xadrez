import styles from '../styles/casas.module.css'

export default function Casas(props) {
    return (
        <div 
            style={{
                backgroundColor: props.preta ? "#000" : "#fff",
            }}
        className={styles.casas}></div>
    )
}