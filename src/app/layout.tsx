import type { Metadata } from "next";
import { outfit } from "./fonts";
import "./globals.css";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
              <div className={styles.header}>
                <Link href="/">
                  <div className={styles.logo}>
                    <Image
                      src="/fknm_logo.png"
                      alt="FKNM Logo"
                      width={70}
                      height={70}
                      priority
                    />
                  </div>
                </Link>
                <Link href="/">
                  <p>Feeding Kids, Nourishing Minds</p>
                </Link>
              </div>

              <div className={styles.navigationbar}>
                <div className={styles.navigationbarContent}>
                  <Link href="/current_programs/">
                    <p>Current Programs</p>
                  </Link>

                  <div className={styles.researchNavItem}>
                    Research
                    <div className={styles.navBarSubMenu}>
                      <Link href="/intake_visuals/">Intake Visuals</Link>
                      <Separator />
                      <Link href="/measurement_tool_assessment/">
                        Measurement Tool Assessment
                      </Link>
                      <Separator />
                    </div>
                  </div>

                  <Link href="/news/">News</Link>
                  <div className={styles.researchNavItem}>
                    Publications
                    <div className={styles.navBarSubMenu}>
                      <Link href="/manuscripts/">Manuscripts</Link>
                      <Separator />
                      <Link href="/presentations/">Presentations</Link>
                      <Separator />
                    </div>
                  </div>
                  <Link href="/about_fknm/">About FKNM</Link>
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
