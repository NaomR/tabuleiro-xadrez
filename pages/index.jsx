import styles from '../styles/Home.module.css'
import Tabuleiro from '@/components/Tabuleiro'  

export default function Home() {
  return (
      <div className={styles.main}>
        <h1>Projeto de Aprendizado #001</h1>
         <Tabuleiro />
         <h2>feito dia 08/06/2023</h2>
      </div>
  )
  
}
