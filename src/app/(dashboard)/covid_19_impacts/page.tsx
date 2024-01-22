import styles from "./page.module.css";

export default function COVID19Impacts() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>
        The Effects of COVID-19 on Canadian School Food Programs
      </p>
      <div className={styles.link}>
        <p>Data Collection</p>
        <p>Program Map</p>
      </div>
      <div className={styles.header}>Impacts</div>
      <div className={styles.impactsInfo}>
        <p className={styles.item}>
          Lockdown measures resulted in abrupt school closures and disruptions
          to school food programs, limiting access to food sources many children
          relied on.
        </p>
        <p className={styles.item}>
          Many school food programs have adapted by implementing new
          modifications in order to continue providing children with food, yet
          have met novel challenges in doing so.
        </p>
      </div>
      <div className={styles.header}>Adaptations</div>
      <div className={styles.adaptationsInfoFirst}>
        <p className={styles.item}>
          New collaborations within communities and with organizations to
          support modified school food programs.
        </p>
        <p className={styles.item}>
          COVID-19 guideline adherence when preparing and distributing food.
        </p>
      </div>
      <div className={styles.adaptationsInfoSecond}>
        <p className={styles.item}>
          Increased government funding towards supporting school food programs.
        </p>
        <p className={styles.item}>
          Distribution of meal kits and freshly prepared meals.
        </p>
        <p className={styles.item}>
          Expansions of existing school food programs to reach more students.
        </p>
      </div>
      <div className={styles.header}>Challenges</div>
      <div className={styles.challengesInfoFirst}>
        <p className={styles.item}>
          Expenses of modified programs hard to maintain, especially when led by
          small teams of volunteers.
        </p>
        <p className={styles.item}>
          Increased barriers to food access experienced by families without
          internet access.
        </p>
      </div>
      <div className={styles.challengesInfoSecond}>
        <p className={styles.item}>
          Accessing food due to price gouging and loss of usual food suppliers.
        </p>
        <p className={styles.item}>
          Logistical challenges of delivery and distribution.
        </p>
        <p className={styles.item}>Lack of protein food group in meal kits.</p>
      </div>
    </main>
  );
}
