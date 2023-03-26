import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/imagens/favicon.ico"></link>
        <title>PokeNext</title>
      </Head>

      <NavBar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
