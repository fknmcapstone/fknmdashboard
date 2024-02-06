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
  src,
}: {
  id: string;
  column: Column;
  title: string;
  src: string;
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
      <img src={src}></img>
    </div>
  );
}

let graphs = ["Component", "Method", "Socio Economic Factor", "Dimension"];
let linkList = graphs.map((graphTitle, index) => {
  return [
    <p>&#8226;</p>,
    <Link href={"#" + graphTitle.split(" ").pop()}>
      Programs by {graphTitle}
    </Link>,
  ];
});

let graphCardList = graphs.map((graphTitle, index) => {
  let column = index % 2 == 0 ? Column.LEFT : Column.RIGHT;
  return (
    <GraphCard
      id={"" + graphTitle.split(" ").join("_").toLowerCase()}
      column={column}
      title={"Number of Programs by " + graphTitle}
      src="mta_chart_placeholder.png"
    />
  );
});

export default function MeasurementToolAssessment() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <p>Measurement Tool Assessment</p>
      </div>
      <div id={styles.map}>
      <iframe title="Track_3_Map" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiZDUxMmU5MmYtZGVlMi00MzZmLTljMjctYjI0MjBjMGQ5OTI2IiwidCI6IjU1MjQxYmEwLTBiNjgtNGRkYi05ZjE5LWZmNjQ5MjExZTkyMiJ9" frameborder="0" allowFullScreen="true"></iframe>
      </div>
      <div className={styles.greyRectangle}></div> {/* grey rectangle */}
      <div className={styles.subtext}>
        <p>Blurb from discussing what is being shown here. Long blurb</p>
      </div>
      <div className={styles.shortcutMenu}>
        <p className={styles.shortcutMenuTitle}>Shortcuts</p>
        <div className={styles.shortcutMenuList}>{linkList}</div>
      </div>
      {graphCardList}
    </main>
  );
}
