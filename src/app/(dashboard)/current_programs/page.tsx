"use client";
// This directive is required due to a bug with NextUI Accordion
// See: https://github.com/nextui-org/nextui/issues/1403

import styles from "./page.module.css";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

let keyOutcomes = [
  "A - Anthropometric",
  "D - Dietary Intake",
  "E - Environment",
  "I - Implementation",
  "KAP - Knowledge, Attitudes and Practices",
  "P - Prevalence",
  "PA - Physical Activity",
  "PR - Promotion and Advertisements",
  "S - Food Sold",
];

let equityIndicators = [
  "A - Age",
  "S - Sex",
  "E - Ethnicity",
  "I - Indigeneity",
  "G - Geography",
  "P - Prevalence",
  "SES - Socioeconomic Status",
];

let qualityAssessment = ["ROB - Risk of Bias"];

let keyOutcomesElementList = keyOutcomes.map((outcome) => {
  return <p>{outcome}</p>;
});

let equityIndicatorsElementList = equityIndicators.map((indicator) => {
  return <p>{indicator}</p>;
});

let qualityAssessmentElementList = qualityAssessment.map((assessment) => {
  return <p>{assessment}</p>;
});

export default function CurrentPrograms() {
  return (
    <main className={styles.main}>
      <div id={styles.aboutText}>
        <p>Blurb here discussing what is shown on the map</p>
      </div>
      <div id={styles.helperText}>
        <p>
          Hover over each program point on<br></br> the map to see more
          information
        </p>
      </div>
      <div id={styles.foldableLegend}>
        <p id={styles.legendTitle}>Legend</p>
        <Accordion selectionMode="multiple" className={styles.item}>
          <AccordionItem key="1" title="Key Outcomes">
            {keyOutcomesElementList}
          </AccordionItem>
          <AccordionItem key="2" title="Disaggregated Equity Indicators">
            {equityIndicatorsElementList}
          </AccordionItem>
          <AccordionItem key="3" title="Quality Assessment">
            {qualityAssessmentElementList}
          </AccordionItem>
        </Accordion>
      </div>
      <div id={styles.map}></div>
    </main>
  );
}
