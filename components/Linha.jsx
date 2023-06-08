import styles from '../styles/linha.module.css'
import Casas from "./Casas";

export default function Linha(props) {
    return (
        <div className={styles.linha}>
            <Casas preta={props.preta}/>
            <Casas preta={!props.preta}/>
            <Casas preta={props.preta}/>
            <Casas preta={!props.preta}/>
            <Casas preta={props.preta}/>
            <Casas preta={!props.preta}/>
            <Casas preta={props.preta}/>
            <Casas preta={!props.preta}/>
            
        </div>
    )
}