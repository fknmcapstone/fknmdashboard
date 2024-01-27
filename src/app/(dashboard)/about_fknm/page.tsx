"use client";
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import styles from "./page.module.css";
import Image from "next/image";

function Separator({ color = "black", height = 3 }) {
  return (
    <hr
      style={{
        backgroundColor: "#002253",
        marginBlock: "4rem",
        height: height,
        border: "none",
      }}
    />
  );
}

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const peopleData = [
  {
    name: "Person One",
    imageUrl:
      "https://media.istockphoto.com/id/1320751178/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=ZbP6p5pWjS2skfdRHrH_fE_jm6ymX-6LiZ__9Wb40pw=",
    content: "This is the popover content for Person One",
  },
  {
    name: "Person Two",
    imageUrl:
      "https://media.istockphoto.com/id/1320751178/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=ZbP6p5pWjS2skfdRHrH_fE_jm6ymX-6LiZ__9Wb40pw=",
    content: "This is the popover content for Person Two",
  },
  {
    name: "Person Three",
    imageUrl:
      "https://media.istockphoto.com/id/1320751178/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=ZbP6p5pWjS2skfdRHrH_fE_jm6ymX-6LiZ__9Wb40pw=",
    content: "This is the popover content for Person Three",
  },
  {
    name: "Person Four",
    imageUrl:
      "https://media.istockphoto.com/id/1320751178/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=ZbP6p5pWjS2skfdRHrH_fE_jm6ymX-6LiZ__9Wb40pw=",
    content: "This is the popover content for Person Four",
  },
  {
    name: "Person Five",
    imageUrl:
      "https://media.istockphoto.com/id/1320751178/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=ZbP6p5pWjS2skfdRHrH_fE_jm6ymX-6LiZ__9Wb40pw=",
    content: "This is the popover content for Person Five",
  },
  {
    name: "Person Six",
    imageUrl:
      "https://media.istockphoto.com/id/1320751178/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=ZbP6p5pWjS2skfdRHrH_fE_jm6ymX-6LiZ__9Wb40pw=",
    content: "This is the popover content for Person Six",
  },
  {
    name: "Person Seven",
    imageUrl:
      "https://media.istockphoto.com/id/1320751178/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=ZbP6p5pWjS2skfdRHrH_fE_jm6ymX-6LiZ__9Wb40pw=",
    content: "This is the popover content for Person Seven",
  },
  {
    name: "Person Eight",
    imageUrl:
      "https://media.istockphoto.com/id/1320751178/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=ZbP6p5pWjS2skfdRHrH_fE_jm6ymX-6LiZ__9Wb40pw=",
    content: "This is the popover content for Person Eight",
  },
];

export default function AboutFKNM() {
  return (
    <main className={styles.main}>
      <h2 className={styles.heading1}>
        What is Feeding Kids, Nourishing Minds?
      </h2>
      <div className={styles.cards}>
        <Card className={styles.card}>
          <CardBody>{defaultContent}</CardBody>
        </Card>

        <Card className={styles.card}>
          <CardBody>{defaultContent}</CardBody>
        </Card>
      </div>

      <div className={styles.intro1}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minimeniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </div>

      <h2 className={styles.heading2}>
        About the Feeding Kids, Nourishing Minds Dashboard
      </h2>

      <div className={styles.intro2}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minimeniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      </div>

      <h2 className={styles.heading3}>Meet The Team</h2>

      <div className={styles.accordion}>
        <Accordion variant="splitted">
          <AccordionItem
            className={styles.accordionItem}
            key="1"
            aria-label="Steering Committee"
            title="Steering Committee"
          >
            <div className={styles.popover}>
              {peopleData.map((person, index) => (
                // eslint-disable-next-line react/jsx-key
                <Popover placement="bottom" offset={20} showArrow>
                  <PopoverTrigger key={index} className={styles.popoverTrigger}>
                    <Button>
                      <Image
                        src={person.imageUrl}
                        alt={person.name}
                        className="border border-gray-300 p-2 rounded-full"
                        width={120}
                        height={120}
                        priority
                      />
                      {person.name}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className={styles.popoverContent}>
                    <div className="px-1 py-2">
                      <div className="text-small font-bold">
                        Popover Content
                      </div>
                      <div className="text-tiny">{person.content}</div>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </AccordionItem>
          <AccordionItem
            className={styles.accordionItem}
            key="2"
            aria-label="Research Team"
            title="Research Team"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            className={styles.accordionItem}
            key="3"
            aria-label="Administrative Support"
            title="Administrative Support"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            className={styles.accordionItem}
            key="4"
            aria-label="Website Team"
            title="Website Team"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>

      <div className={styles.seperator}>
        <Separator />
      </div>

      <div className={styles.collabContainer}>
        <p>In collaboration with:</p>
        <div>
          <p>Centre for Child Nutrition</p>
          <a
            href="https://childnutrition.utoronto.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <a
            href="https://cgen.utoronto.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
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
    </main>
  );
}
