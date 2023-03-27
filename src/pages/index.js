import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

import Card from "../components/Card"

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();
  
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            Poke<span>Next</span>
          </h1>
          <Image
            src="/imagens/pokeball.png"
            width="50"
            height="50"
            alt="PokeNext"
          />
        </div>
        <div className={styles.pokemonContainer}>
          {pokemons.map((poke, index) => (
            <Card pokemon={poke} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
