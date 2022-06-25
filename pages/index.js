import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import cake1 from "../assets/cake-1.png";
import cake2 from "../assets/cake-2.png";
import cake3 from "../assets/cake-3.jpg";
import cake4 from "../assets/cake-4.jpg";
import cake5 from "../assets/cake-5.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sugaro - Cafe Bakery</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta
          name="description"
          content="Sugaro Cafe Bakery provides a homemade bakery"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <header className={styles.leading}>
          <div className={styles.leadingText}>
            <h1 className={styles.leadingTitle}>Hey sugar!</h1>
            <p className={styles.leadingCaption}>
              Our cake bakery is small but with a big love for wonderful
              desserts.
            </p>
          </div>
          <div className={styles.leadingImage}>
            <Image src={cake1} alt="cake-1" />
          </div>
        </header>

        <section className={`${styles.section} ${styles.about}`}>
          <div>
            <h2 className={styles.sectionTitle}>Our love, for your love</h2>
            <p className={styles.sectionCaption}>
              Our bakery is set up to cater specifically to the cake lover, our
              bakery is open to everyone but only the most special order. It
              would be great if our bakery can make you get your own cake
              because that&apos;s where our family comes from!
            </p>
          </div>
          <div className={styles.sectionImage}>
            <Image src={cake2} alt="cake-2" />
          </div>
        </section>

        <section className={`${styles.section} ${styles.menu}`}>
          <div className={styles.menus}>
            <h2 className={styles.sectionTitle}>Menu</h2>
            <p className={styles.sectionCaption}>
              The cake is a form of sweet food that is usually baked. Cover a
              wide range of preparations that can be simple or elaborate.
            </p>
          </div>
          <div className={styles.menuList}>
            <div className={styles.menuDetails}>
              <h6 className={styles.menuTitle}>- Cassata -</h6>
              <p className={styles.menuDesc}>
                Cassata consists of round sponge cake moistened.
              </p>
              <span className={styles.menuPrice}>$7</span>
            </div>
            <div className={styles.menuDetails}>
              <h6 className={styles.menuTitle}>- Fruitcake -</h6>
              <p className={styles.menuDesc}>
                Made with candied or dried fruit, nuts, and spices.
              </p>
              <span className={styles.menuPrice}>$7</span>
            </div>
            <div className={styles.menuDetails}>
              <h6 className={styles.menuTitle}>- Panforte -</h6>
              <p className={styles.menuDesc}>
                Chewy Italian dessert containing fruits and nuts.
              </p>
              <span className={styles.menuPrice}>$7</span>
            </div>
            <div className={styles.menuDetails}>
              <h6 className={styles.menuTitle}>- Castell -</h6>
              <p className={styles.menuDesc}>
                Cake made of sugar, flour, eggs, and starch syrup.
              </p>
              <span className={styles.menuPrice}>$8</span>
            </div>
            <div className={styles.menuDetails}>
              <h6 className={styles.menuTitle}>- Garash cake -</h6>
              <p className={styles.menuDesc}>
                Garash is a type of chocolate cake in Bulgarian cuisine.
              </p>
              <span className={styles.menuPrice}>$8</span>
            </div>
            <div className={styles.menuDetails}>
              <h6 className={styles.menuTitle}>- Petit four -</h6>
              <p className={styles.menuDesc}>
                A petit four is a small bite-sized confectionery.
              </p>
              <span className={styles.menuPrice}>$8</span>
            </div>
          </div>
        </section>

        <section className={`${styles.section}`}>
          <h2 className={styles.sectionTitle}>
            The taste that you will remember
          </h2>
          <p className={styles.sectionCaption}>
            Our cake bakery is small but with big love for wonderful desserts.
            Our cakes have all the ingredients for an amazing bakery.
          </p>
          <div className={styles.featureImages}>
            <div className={styles.featureImage}>
              <Image src={cake3} alt="cake-3" width={500} height={500} />
            </div>
            <div className={styles.featureImage}>
              <Image src={cake4} alt="cake-4" width={500} height={500} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact us for more details</h2>
          <p className={styles.sectionCaption}>
            If you want to know more about our bakery or the team we have
            working at our bakery, let us know by leaving a messages.
          </p>
          <Link href="#contacts" scroll={false}>
            <a className={styles.contactBtn}>Contact us</a>
          </Link>
        </section>

        <div className={styles.bigImage}>
          <Image src={cake5} alt="cake-5" layout="responsive" priority={true} />
        </div>
      </main>

      <footer id="contacts" className={`${styles.section} ${styles.footer}`}>
        <div>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@sugaro.com</p>
        </div>
        <div>
          <p>
            9737 Streich Squares St. <br />
            San Francisco, CA 98856
          </p>
        </div>
        <div>
          <p>Mon - Fri: 9am - 8pm</p>
          <p>Saturday: 10am - 5pm</p>
          <p>Sunday: 10am - 5pm</p>
        </div>
        <p className={styles.developer}>Developed by LookQ</p>
      </footer>
    </div>
  );
}
