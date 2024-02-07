import type { Metadata } from "next";
import { outfit } from "./fonts";
import "./globals.css";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Feeding Kids, Nourishing Minds Dashboard",
  description: "ECE496 Capstone Project",
};

function Separator({ height = 1 }) {
  return (
    <hr
      style={{
        backgroundColor: "white",
        marginBlock: "0.8rem",
        height: height,
        border: "none",
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <Providers>
          <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav>
              <div data-cy="header" className={styles.header}>
                <Link href="/">
                  <div data-cy="header_logo" className={styles.headerLogo}>
                    <Image
                      src="/fknm_logo.png"
                      alt="FKNM Logo"
                      width={70}
                      height={70}
                      priority
                    />
                  </div>
                </Link>
                <Link data-cy="header_title" href="/">
                  <p>Feeding Kids, Nourishing Minds</p>
                </Link>
              </div>

              <div data-cy="nav_bar" className={styles.navigationbar}>
                <div className={styles.navigationbarContent}>
                  <Link
                    data-cy="nav_school_food_programs"
                    href="/school_food_programs/"
                  >
                    <p>School Food Programs</p>
                  </Link>

                  <div
                    data-cy="nav_research"
                    className={styles.researchNavItem}
                  >
                    Research
                    <div
                      data-cy="nav_research_submenu"
                      className={styles.navBarSubMenu}
                    >
                      <Link
                        data-cy="nav_intake_visuals"
                        href="/intake_visuals/"
                      >
                        Intake Visuals
                      </Link>
                      <Separator />
                      <Link
                        data-cy="nav_measurement_tool_assessment"
                        href="/measurement_tool_assessment/"
                      >
                        Measurement Tool Assessment
                      </Link>
                      <Separator />
                      <Link
                        id="nav_sfp_components"
                        href="/sfp_components/"
                      >
                        SFP Components
                      </Link>
                    <Separator />
                    </div>
                  </div>

                  <Link data-cy="nav_news" href="/news/">
                    News
                  </Link>
                  <div
                    data-cy="nav_publications"
                    className={styles.researchNavItem}
                  >
                    Publications
                    <div
                      data-cy="nav_publications_submenu"
                      className={styles.navBarSubMenu}
                    >
                      <Link data-cy="nav_manuscripts" href="/manuscripts/">
                        Manuscripts
                      </Link>
                      <Separator />
                      <Link data-cy="nav_presentations" href="/presentations/">
                        Presentations
                      </Link>
                      <Separator />
                    </div>
                  </div>
                  <Link data-cy="nav_about_fknm" href="/about_fknm/">
                    About FKNM
                  </Link>
                </div>
              </div>
            </nav>

            {children}
          </section>
        </Providers>
      </body>
    </html>
  );
}
