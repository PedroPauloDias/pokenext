import Image from "next/Image"
import styles from "../styles/about.module.css"

export default function About() {
  return (
    <div className={styles.about} >
      <h1>Sobre o Projeto</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip</p>
      <Image src="/images/charizard.png" height="400" width="400" alt="Charizard" />
    </div>
  )
}