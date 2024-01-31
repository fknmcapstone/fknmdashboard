"use client";
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  Accordion,
  AccordionItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import styles from "./page.module.css";
import Image from "next/image";

function Separator({ color = "black", height = 2 }) {
  return (
    <hr
      style={{
        backgroundColor: "#002253",
        marginInline: "10rem",
        marginBlockStart: "4rem",
        marginBlockEnd: "1rem",
        height: height,
        border: "none",
      }}
    />
  );
}

const peopleData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => {
  return {
    name: "Person " + index,
    imageUrl:
      "https://media.istockphoto.com/id/1320751178/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=ZbP6p5pWjS2skfdRHrH_fE_jm6ymX-6LiZ__9Wb40pw=",
    content: "This is the popover content for Person " + index,
  };
});

function ProfileCard({
  index,
  name,
  imageURL,
  content,
}: {
  index: number;
  name: string;
  imageURL: string;
  content: string;
}) {
  return (
    <Popover
      placement="bottom"
      offset={20}
      showArrow
      shouldCloseOnInteractOutside={(e) => false}
    >
      <PopoverTrigger key={index} className={styles.popoverTrigger}>
        <Button>
          <Image
            src={imageURL}
            alt={name}
            className="border border-gray-300 p-2 rounded-full"
            width={120}
            height={120}
            priority
          />
          {name}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={styles.popoverContent}>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">{content}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default function AboutFKNM() {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        What is Feeding Kids, Nourishing Minds?
      </div>
      <div className={styles.textContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minimeniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </div>

      <div className={styles.heading}>
        About the Feeding Kids, Nourishing Minds Dashboard
      </div>
      <div className={styles.textContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minimeniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.
      </div>
      <div className={styles.heading}>Meet The Team</div>
      <Accordion
        variant="splitted"
        selectionMode="multiple"
        className={styles.accordion}
      >
        <AccordionItem
          className={styles.accordionItem}
          key="1"
          aria-label="Steering Committee"
          title="Steering Committee"
        >
          <div className={styles.popover}>
            {peopleData.map((person, index) => (
              // eslint-disable-next-line react/jsx-key
              <ProfileCard
                index={index}
                name={person.name}
                imageURL={person.imageUrl}
                content={person.content}
              />
            ))}
          </div>
        </AccordionItem>
        <AccordionItem
          className={styles.accordionItem}
          key="2"
          aria-label="Research Team"
          title="Research Team"
        >
          <div className={styles.popover}>
            {peopleData.map((person, index) => (
              // eslint-disable-next-line react/jsx-key
              <ProfileCard
                index={index}
                name={person.name}
                imageURL={person.imageUrl}
                content={person.content}
              />
            ))}
          </div>
        </AccordionItem>
        <AccordionItem
          className={styles.accordionItem}
          key="3"
          aria-label="Administrative Support"
          title="Administrative Support"
        >
          <div className={styles.popover}>
            {peopleData.map((person, index) => (
              // eslint-disable-next-line react/jsx-key
              <ProfileCard
                index={index}
                name={person.name}
                imageURL={person.imageUrl}
                content={person.content}
              />
            ))}
          </div>
        </AccordionItem>
        <AccordionItem
          className={styles.accordionItem}
          key="4"
          aria-label="Website Team"
          title="Website Team"
        >
          <div className={styles.popover}>
            {peopleData.map((person, index) => (
              // eslint-disable-next-line react/jsx-key
              <ProfileCard
                index={index}
                name={person.name}
                imageURL={person.imageUrl}
                content={person.content}
              />
            ))}
          </div>
        </AccordionItem>
      </Accordion>
      <Separator />

      <div className={styles.collabContainer}>
        <a
          href="https://childnutrition.utoronto.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            src="/Lawson_logo.png"
            alt={""}
            width="300"
            height="300"
          ></Image>
        </a>
        <a
          href="https://cgen.utoronto.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            src="/CGEN_UT_Signature_P655_RGB.png"
            alt={""}
            width="300"
            height="300"
          ></Image>
        </a>
        <a
          href="https://www.ece.utoronto.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            src="/ECE_UT_Signature_P655_RGB.png"
            alt={""}
            width="300"
            height="300"
          ></Image>
        </a>
        <a
          href="https://www.engineering.utoronto.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.logo}
            src="/FASE_UT_Signature_RGB_P655_RGB.png"
            alt={""}
            width="300"
            height="300"
          ></Image>
        </a>
      </div>
    </main>
  );
}
