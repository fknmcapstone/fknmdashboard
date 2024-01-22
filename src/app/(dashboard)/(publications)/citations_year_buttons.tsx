import styles from "./page.module.css";
import Link from "next/link";

// Returns a map where the key is the year and the value is a list of manuscripts associated with that year
// Each manuscript has a citation string and a link string
export function sortPublications(data: any): {
  [key: string]: { [key: string]: string }[];
} {
  var yearToCitationsMap: { [key: string]: { [key: string]: string }[] } = {};

  Object.entries(data).map(([_, year]) => {
    Object.entries(year).map(([y, citationData]) => {
      yearToCitationsMap[y] = citationData;
    });
  });
  return yearToCitationsMap;
}

export function yearBtnList(sources: {
  [key: string]: { [key: string]: string }[];
}) {
  return Object.keys(sources)
    .reverse()
    .map((year) => {
      return (
        <Link href={"#year_" + year} className={styles.yearBtn}>
          {year}
        </Link>
      );
    });
}

export function citationsList(sources: {
  [key: string]: { [key: string]: string }[];
}) {
  return Object.entries(sources)
    .reverse()
    .map(([year, sourceList]) => {
      var manuscriptList = [];
      manuscriptList.push(
        <div id={"year_" + year} className={styles.yearHeader}>
          {year}
        </div>
      );

      for (var sourceIndex in sourceList) {
        manuscriptList.push(
          <div
            className={[
              styles.citation,
              sourceIndex % 2 == 0
                ? styles.citationDarkerBg
                : styles.citationNormalBg,
              sourceIndex == 0 ? styles.citationRoundedCorners : null,
            ].join(" ")}
          >
            {sourceList[sourceIndex].citation}{" "}
            {
              <Link
                href={sourceList[sourceIndex].link}
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
      return manuscriptList;
    });
}
