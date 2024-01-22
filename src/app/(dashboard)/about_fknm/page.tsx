/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import styles from "./page.module.css";
import Image from "next/image";

// eslint-disable-next-line react/prop-types
function Separator({ height = 3 }) {
  return (
    <hr
      style={{
        backgroundColor: "#002253",
        marginInline: "10rem",
        marginBlock: "4rem",
        height: height,
        border: "none",
      }}
    />
  );
}

export default function AboutFKNM() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>What is Feeding Kids, Nourishing Minds?</p>
      <div className={styles.header}></div>
      <div className={styles.impactsInfo}>
        <p className={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimeniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimeniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimeniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimeniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minimeniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <Separator />
      <div>
        <p className={styles.title}>About the Feeding Kids, Nourishing Minds Dashboard</p>
      </div>

      <Separator />
      {/* New section with profile photo bubbles */}
      <div className={styles.profileContainer}>
        <div className={styles.profileBubble}>
          {/* Image for the first profile */}
          <div className={styles.circularImage}>
            <Image
              src="https://media.istockphoto.com/id/1320751178/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=ZbP6p5pWjS2skfdRHrH_fE_jm6ymX-6LiZ__9Wb40pw="
              alt="Profile 1"
              width={120}
              height={120}
              priority
            />
          </div>
          {/* Dark blue first and last name label */}
          <div className={styles.profileLabel}>John Doe</div>
        </div>
        <div className={styles.profileBubble}>
          {/* Image for the second profile */}
          <div className={styles.circularImage}>
            <Image
              src="https://media.istockphoto.com/id/1320751178/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=ZbP6p5pWjS2skfdRHrH_fE_jm6ymX-6LiZ__9Wb40pw="
              alt="Profile 2"
              width={120}
              height={120}
              priority
            />
          </div>
          {/* Dark blue first and last name label */}
          <div className={styles.profileLabel}>Jane Smith</div>
        </div>
        <div className={styles.profileBubble}>
          {/* Image for the third profile */}
          <div className={styles.circularImage}>
            <Image
              src="https://media.istockphoto.com/id/1320751178/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=ZbP6p5pWjS2skfdRHrH_fE_jm6ymX-6LiZ__9Wb40pw="
              alt="Profile 3"
              width={120}
              height={120}
              priority
            />
          </div>
          {/* Dark blue first and last name label */}
          <div className={styles.profileLabel}>Sam Johnson</div>
        </div>
      </div>

      <Separator />

      <div className={styles.collabContainer}>
        <p>In collaboration with:</p>
        <div>
          <p>Centre for Child Nutrition</p>
          <a href="https://childnutrition.utoronto.ca/" target="_blank" rel="noreferrer">
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
          <a href="https://cgen.utoronto.ca/" target="_blank" rel="noreferrer">
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
