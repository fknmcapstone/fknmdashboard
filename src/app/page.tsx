import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

function Separator({ color = "black", height = 3 }) {
  return (
    <hr
      style={{
        backgroundColor: "#002253",
        marginInline: "10rem",
        marginBlock: "4rem",
        height: height,
        border: "none",
      }}
    />
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.blurbContainer}>
          <Image
            src="/placeholder_visual_landing.png"
            alt="FKNM Visual"
            width={700}
            height={300}
            priority
          />
          <div>
            <p>
              Sample text about the dashboard and an explanation as to why this
              is done and how it started, more text, more words more
              explanation, some light description
            </p>
            <Link href="/covid_19_impacts/">
              Learn more about the impacts of COVID-19
            </Link>
          </div>
        </div>

        <Separator />

        <div className={styles.cardContainer}>
          <p>
            Sample text about what this page will show you. More on Current
            programs and things you can possibly learn whooooo
          </p>

          <Link href="/current_programs/" className={styles.cardRight}>
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
          </Link>
          <div className={styles.cardResearchRow}>
            <Link href="/intake_visuals/" className={styles.cardResearch}>
              <h3>Intake Visuals</h3>
              <div className={styles.logo}>
                <Image
                  src="/fknm_logo.png"
                  alt="FKNM Logo"
                  width={50}
                  height={50}
                  priority
                />
              </div>
            </Link>
            <Link
              href="/measurement_tool_assessment/"
              className={styles.cardResearch}
            >
              <h3>Measurement Tool Assessment</h3>
              <div className={styles.logo}>
                <Image
                  src="/fknm_logo.png"
                  alt="FKNM Logo"
                  width={50}
                  height={50}
                  priority
                />
              </div>
            </Link>
          </div>
          <p>
            Sample text about what this page will show you. More on research
            used in this project and on relevant programs Sample text about what
            this page will show you. More on research used in this project and
            on relevant programs Sample text about what this page will show you.
            More on research used in this project and on relevant programs
            Sample text about what this page will show you. More on research
            used in this project and on relevant programs
          </p>

          <p>
            Sample text about what this page will show you. Learn more about
            where the data came from and more about the team too
          </p>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.cardRight}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>About Us</h3>
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
        <Separator />
        <div className={styles.collabContainer}>
          <p>In collaboration with:</p>
          <div>
            <p>Centre for Child Nutrition</p>
            <a href="https://childnutrition.utoronto.ca/" target="_blank">
              <div className={styles.collabCard}>
                <Image
                  src="/centre_child_nutrition_placeholder_logo.png"
                  alt="Centre for Child Nutrition logo"
                  width={280}
                  height={50}
                  priority
                />
              </div>
            </a>
          </div>
          <div>
            <p>Centre for Global Engineering</p>
            <a href="https://cgen.utoronto.ca/" target="_blank">
              <div className={styles.collabCard}>
                <Image
                  src="/UofT_engineering_placeholder_logo.png"
                  alt="Centre for Child Nutrition logo"
                  width={280}
                  height={50}
                  priority
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
