import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/fknm_logo.png"
            alt="FKNM Logo"
            width={50}
            height={50}
            priority
          />
        </div>

        <p>Feeding Kids, Nourishing Minds</p>
      </div>

      <div className={styles.navigationbar}>
        <p>Current Programs</p>
        <p>Research</p>
        <p>News</p>
        <p>Publications</p>
        <p>About FKNM</p>
      </div>

      <div className={styles.blurb}>
        <p>Hello</p>
      </div>

      <div className={styles.grid}>
        <p>Find aaaaa in-depth information about Next.js features and API.</p>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Current Programs</h3>
          <div className={styles.logo}>
            <Image
              src="/fknm_logo.png"
              alt="FKNM Logo"
              width={50}
              height={50}
              priority
            />
          </div>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Current Programs</h3>
          <div className={styles.logo}>
            <Image
              src="/fknm_logo.png"
              alt="FKNM Logo"
              width={50}
              height={50}
              priority
            />
          </div>
        </a>
        <p>Find aaaaa in-depth information about Next.js features and API.</p>

        <p>Find aaaaa in-depth information about Next.js features and API.</p>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Current Programs</h3>
          <div className={styles.logo}>
            <Image
              src="/fknm_logo.png"
              alt="FKNM Logo"
              width={50}
              height={50}
              priority
            />
          </div>
        </a>
      </div>
    </main>
  );
}
