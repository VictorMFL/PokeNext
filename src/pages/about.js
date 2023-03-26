import styles from "../styles/About.module.css";

import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
        provident itaque quibusdam culpa illum et accusantium similique
        consequuntur harum laborum, quaerat modi! Facere expedita atque
        accusantium sunt animi error cupiditate.
      </p>

      <Image
        src="/imagens/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
