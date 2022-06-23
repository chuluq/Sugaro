import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import cake1 from "../assets/cake-1.png";
import cake2 from "../assets/cake-2.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sugaro</title>
        <meta name="description" content="Sugaro Cafe Bakery" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <header className={styles.leading}>
          <h1 className={styles.leadingTitle}>Hey sugar!</h1>
          <p className={styles.leadingCaption}>
            Our cake bakery is small but with a big love for wonderful desserts.
          </p>
          <div className={styles.leadingImage}>
            <Image src={cake1} alt="cake" />
          </div>
        </header>

        <section className={`${styles.section} ${styles.about}`}>
          <h2 className={styles.sectionTitle}>Our love, for your love</h2>
          <p className={styles.sectionCaption}>
            Our bakery is set up to cater specifically to the cake lover, our
            bakery is open to everyone but only the most special order. It would
            be great if our bakery can make you get your own cake because
            that&apos;s where our family comes from!
          </p>
          <div className={styles.sectionImage}>
            <Image src={cake2} alt="cake" />
          </div>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
