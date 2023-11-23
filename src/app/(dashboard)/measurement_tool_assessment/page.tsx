import styles from "./page.module.css";
import Link from "next/link";

enum Column {
  LEFT,
  RIGHT,
}

function GraphCard({
  id,
  column,
  title,
}: {
  id: string;
  column: Column;
  title: string;
}) {
  return (
    <div
      id={id}
      className={[
        column == Column.LEFT ? styles.columnLeft : styles.columnRight,
        styles.card,
      ].join(" ")}
    >
      <p>{title}</p>
    </div>
  );
}

let graphs = ["Component", "Method", "Socio Economic Factor", "Dimension"];
let linkList = graphs.map((graphTitle, index) => {
  return (
    <Link href={"#" + graphTitle.split(" ").pop()}>
      Programs by {graphTitle}
    </Link>
  );
});

let graphCardList = graphs.map((graphTitle, index) => {
  let column = index % 2 == 0 ? Column.LEFT : Column.RIGHT;
  return (
    <GraphCard
      id={"" + graphTitle.split(" ").pop()}
      column={column}
      title={"Programs by " + graphTitle}
    />
  );
});

export default function MeasurementToolAssessment() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <p>Measurement Tool Assessment</p>
      </div>
      <div id={styles.map}></div>
      <div className={styles.subtext}>
        <p>
          Blurb from discussing what is being shown here. Long blurb very l;ong
          blurb
        </p>
      </div>
      <div className={styles.shortcutMenu}>
        <p>Shortcuts</p>
        {linkList}
      </div>
      {graphCardList}
    </main>
  );
}
