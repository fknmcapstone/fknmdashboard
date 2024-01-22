import styles from "./page.module.css";
import Link from "next/link";
import data from "./publications.json";
var sources = sortPublications();
function sortPublications(): any {
  var pubObject = data.publications;
  var ret: any = {};

  Object.entries(pubObject).map(([_, year]) => {
    Object.entries(year).map(([y, data]) => {
      ret[y] = data;
    });
  });
  return ret;
}

let yearBtnList = Object.keys(sources)
  .reverse()
  .map((year) => {
    return (
      <Link href={"#year_" + year} className={styles.yearBtn}>
        {year}
      </Link>
    );
  });

let citationsList = Object.entries(sources)
  .reverse()
  .map(([year, source]) => {
    var ohno = [];
    ohno.push(
      <div id={"year_" + year} className={styles.yearHeader}>
        {year}
      </div>
    );

    for (var x in source) {
      ohno.push(
        <div
          className={[
            styles.citation,
            x % 2 == 0 ? styles.citationDarkerBg : styles.citationNormalBg,
            x == 0 ? styles.citationRoundedCorners : null,
          ].join(" ")}
        >
          {source[x].citation}{" "}
          {
            <Link
              href={source[x].link}
              className={styles.citationLink}
              target="_blank"
            >
              View Online
            </Link>
          }
          {"."}
        </div>
      );
    }
    return ohno;
  });

export default function Manuscripts() {
  return (
    <main className={styles.main}>
      <p id="title" className={styles.publicationsTitle}>
        Manuscripts
      </p>
      <div className={styles.yearBtnList}>{yearBtnList}</div>
      {citationsList}
    </main>
  );
}
