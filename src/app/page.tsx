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

function NavigationCard({
  isResearchCard,
  isLeft,
  title,
  link,
  imageSrc,
}: {
  isResearchCard: boolean;
  isLeft: boolean;
  title: string;
  link: string;
  imageSrc: string;
}) {
  return (
    <Link
      href={link}
      className={[
        styles.card,
        isResearchCard ? styles.cardBottomMargin : null,
        isLeft ? styles.cardLeft : styles.cardRight,
      ].join(" ")}
    >
      <h3>{title}</h3>
      <div>
        <Image
          src={imageSrc}
          alt="FKNM Logo"
          width={200}
          height={100}
          priority
        />
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.landingPageContent}>
        <div className={styles.blurbContainer}>
          <Image
            src="/placeholder_visual_landing.png"
            alt="FKNM Visual"
            width={500}
            height={300}
            priority
          />
          <div>
            <p>
              Sample text about the dashboard and an explanation as to why this
              is done and how it started, more text, more words more
              explanation, some light description
            </p>
            <Link id={styles.covid19Link} href="/covid_19_impacts/">
              Learn more about the impacts of COVID-19
            </Link>
          </div>
        </div>

        <Separator />

        <div className={styles.navigationCardsContainer}>
          <p>
            Sample text about what this page will show you. More on Current
            programs and things you can possibly learn whooooo
          </p>
          <NavigationCard
            title="Current Programs"
            link="/current_programs/"
            isResearchCard={false}
            isLeft={false}
            imageSrc="/card_placeholder_visuals.png"
          />
          <div className={styles.researchCardsContainer}>
            <NavigationCard
              title="Intake Visuals"
              link="/intake_visuals/"
              isResearchCard={true}
              isLeft={true}
              imageSrc="/card_placeholder_visuals.png"
            />
            <NavigationCard
              title="Measurement Tool Assessment"
              link="/measurement_tool_assessment/"
              isResearchCard={true}
              isLeft={true}
              imageSrc="/card_placeholder_visuals.png"
            />
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
          <NavigationCard
            title="About Us"
            link="/about_fknm/"
            isResearchCard={false}
            isLeft={false}
            imageSrc="/card_placeholder_visuals.png"
          />
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
