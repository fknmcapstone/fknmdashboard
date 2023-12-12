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
  src,
}: {
  id: string;
  column: Column;
  title: string;
  src: string[];
}) {
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
  );
}

// Current structure allows chart locations to be changed if need be
let graphs: { [title: string]: Column } = {
  "Age Group Legend": Column.LEFT,
  "Daily Macronutrient Intake By Age Group": Column.MIDDLE,
  "Daily Micronutrient Intake By Age Group": Column.RIGHT,
  "Prep Location Legend": Column.LEFT,
  "Daily Macronutrient Intake By Prep Location": Column.MIDDLE,
  "Daily Micronutrient Intake By Prep Location": Column.RIGHT,
  "Age Group and Prep Location Legend": Column.LEFT,
  "Daily Macronutrient Intake By Age Group and Prep Location": Column.MIDDLE,
  "Daily Micronutrient Intake By Age Group and Prep Location": Column.RIGHT,
  "Daily School Energy Intake vs. Recommended Intake": Column.MERGED,
  "Daily School Macronutrient Intake vs. Recommended Intake": Column.MERGED,
  "Daily School Micronutrient Intake vs. Recommended Intake": Column.MERGED,
  "Meal Components": Column.MERGED,
};

let graphSources: { [title: string]: string[] } = {
  "Age Group Legend": ["legend_placeholder.png"],
  "Daily Macronutrient Intake By Age Group": ["chart_visual_placeholder.png"],
  "Daily Micronutrient Intake By Age Group": ["chart_visual_placeholder.png"],
  "Prep Location Legend": [""],
  "Daily Macronutrient Intake By Prep Location": [""],
  "Daily Micronutrient Intake By Prep Location": [""],
  "Age Group and Prep Location Legend": [""],
  "Daily Macronutrient Intake By Age Group and Prep Location": [""],
  "Daily Micronutrient Intake By Age Group and Prep Location": [""],
  "Daily School Energy Intake vs. Recommended Intake": [""],
  "Daily School Macronutrient Intake vs. Recommended Intake": [""],
  "Daily School Micronutrient Intake vs. Recommended Intake": [""],
  "Meal Components": [
    "meal_component_visual_placeholder.png",
    "meal_component_visual_placeholder.png",
  ],
};

let linkList = Object.keys(graphs).map((graphTitle, index) => {
  if (graphTitle.includes("Legend")) {
    return null;
  } else {
    return [
      <p>&#8226;</p>,
      <Link
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
    <GraphCard
      id={
        "" +
        graphTitle
          .replace(/(\b(\w{1,3})\b(\s|$))/g, "")
          .split(" ")
          .join("_")
          .toLowerCase()
      }
      column={column}
      title={graphTitle.includes("Legend") ? "" : graphTitle}
      src={graphSources[graphTitle]}
    />
  );
});

export default function IntakeVisuals() {
  return (
    <main className={styles.main}>
      <div id={styles.chartMenu} className={styles.Fixed}>
        <p id={styles.chartMenuTitle}>Charts</p>
        <div id={styles.chartMenuList}>{linkList}</div>
      </div>

      {graphCardList}
    </main>
  );
}
