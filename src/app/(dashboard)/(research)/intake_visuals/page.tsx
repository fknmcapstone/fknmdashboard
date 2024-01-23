/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import styles from "./page.module.css";
import Link from "next/link";

enum Column {
  LEFT,
  MIDDLE,
  RIGHT, // Legends will be in the third column of the charts
  MERGED, // Takes up two columns
}

let columnStyles: { [column: number]: string } = {
  0: styles.columnLeft,
  1: styles.columnMiddle,
  2: styles.columnRight,
  3: styles.columnMerged,
};

function GraphCard({
  id,
  column,
  title,
  iframeLinks,
}: {
  id: string;
  column: Column;
  title: string;
  iframeLinks: string[];
}) {
  /* Old Image-based Code
  let imgList = src.map((src) => {
    return [<img src={src}></img>];
  });
  return (
    <div
      id={id}
      className={[
        columnStyles[column],
        styles.card,
        id.includes("legend") ? styles.legend : null,
      ].join(" ")}
    >
      <p>{!title ? "" : title}</p>
      <div
        className={
          id.includes("legend") ? styles.legendEmbed : styles.chartEmbed
        }
      >
        {imgList}
      </div>
    </div>
  );*/

  // New Iframe-based Code
  let iframeList = iframeLinks ? iframeLinks.map((iframeLink, index) => {
    return (
      <div key={index}>
        <iframe
          title={title}
          width="100%"
          height="373.5"
          src={iframeLink}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  }) : null;

  return (
    <div
      id={id}
      className={[
        columnStyles[column],
        styles.card,
        id.includes("legend") ? styles.legend : null,
      ].join(" ")}
    >
      <p>{!title ? "" : title}</p>
      <div
        className={
          id.includes("legend") ? styles.legendEmbed : styles.chartEmbed
        }
      >
        {iframeList}
      </div>
      <div 
        className={
          id.includes("legend") ? styles.legendEmbed : styles.hider
        }
      ></div>
    </div>
  );
}

// Current structure allows chart locations to be changed if need be
let graphs: { [title: string]: Column } = {
  "Age Group Legend": Column.LEFT,
  "Daily Macronutrient Intake By Age Group": Column.MIDDLE,
  "Daily Micronutrient Intake By Age Group": Column.RIGHT,
  "Meal Components": Column.MERGED,
  //"Prep Location Legend": Column.LEFT,
  //"Daily Macronutrient Intake By Prep Location": Column.MIDDLE,
  //"Daily Micronutrient Intake By Prep Location": Column.RIGHT,
  //"Age Group and Prep Location Legend": Column.LEFT,
  "Daily Macronutrient Intake By Age Group and Prep Location": Column.MIDDLE,
  //"Daily Micronutrient Intake By Age Group and Prep Location": Column.RIGHT,
  "Daily School Energy Intake vs. Recommended Intake": Column.MERGED,
  //"Daily School Macronutrient Intake vs. Recommended Intake": Column.MERGED,
  //"Daily School Micronutrient Intake vs. Recommended Intake": Column.MERGED,
};

let graphSources: { [title: string]: string[] } = {
  "Age Group Legend": ["legend_placeholder.png"],
  "Daily Macronutrient Intake By Age Group": [
    "https://app.powerbi.com/view?r=eyJrIjoiYzRmNTc3ODktYTk1YS00ZTY4LTkzNjItNGJiMzhhZmI0YTQyIiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9",
  ],
  "Daily Micronutrient Intake By Age Group": [
    "https://app.powerbi.com/view?r=eyJrIjoiZjg4YjNkZDgtYmM4MS00NDJkLWJkYWEtZmI4ODA4MDVhMzk3IiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9",
  ],
  "Meal Components": [
    "https://app.powerbi.com/view?r=eyJrIjoiNjFmZGZkZTItNzBlMi00ZDRlLTkyYjMtZTIxMzdmOWJjOGFiIiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9",
  ],

  "Daily School Energy Intake vs. Recommended Intake": [
    "https://app.powerbi.com/view?r=eyJrIjoiZDUxMmU5MmYtZGVlMi00MzZmLTljMjctYjI0MjBjMGQ5OTI2IiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9"
  ],

  "Daily Macronutrient Intake By Age Group and Prep Location": [
    "https://app.powerbi.com/view?r=eyJrIjoiYzA1YzY3YTYtZDk5MS00YWNkLWEzZGYtZjg0NzMyYTE2MzU2IiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9"
  ],
  
};

let linkList = Object.keys(graphs).map((graphTitle, index) => {
  if (graphTitle.includes("Legend")) {
    return null;
  } else {
    return [
      <p key={index}>&#8226;</p>,
      <Link
        key={graphTitle}
        href={
          "#" +
          graphTitle
            .replace(/(\b(\w{1,3})\b(\s|$))/g, "")
            .split(" ")
            .join("_")
            .toLowerCase()
        }
      >
        {graphTitle}
      </Link>,
    ];
  }
});

let graphCardList = Object.entries(graphs).map(([graphTitle, column]) => {
  return (
    // eslint-disable-next-line react/jsx-key
    <GraphCard
      key={graphTitle}
      id={
        "" +
        graphTitle
          .replace(/(\b(\w{1,3})\b(\s|$))/g, "")
          .split(" ")
          .join("_")
          .toLowerCase()
      }
      column={column}
      /*title={graphTitle.includes("Legend") ? "" : graphTitle}*/
      iframeLinks={graphSources[graphTitle]}
    />
  );
});

export default function IntakeVisuals() {
  return (
    <main className={styles.main}>
      <div id={styles.chartMenu} className={styles.Fixed}>
        <p id={styles.chartMenuTitle}>Charts</p>
        <div id={styles.chartMenuList}>
          {linkList}
        </div>
      </div>

      {graphCardList}
    </main>
  );
}
