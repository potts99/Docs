import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Typist from "react-typist";

const features = [
  {
    title: "Easy to Use",
    imageUrl: "img/docker.svg",
    description: (
      <>
        Want to test it out first? We have docker images available for quick and
        easy deployment. With one click installs coming soon.™
      </>
    ),
  },
  {
    title: "Made for solo or teams",
    imageUrl: "img/undraw_team.svg",
    description: (
      <>
        Peppermint is great for solo use, or for teams and caters for any
        situation. If you feel like a certain feature is lacking then feel free
        to let us know.
      </>
    ),
  },
  {
    title: "Powered by Open-source",
    imageUrl: "img/undraw_dev.svg",
    description: (
      <>
        Feature requests can be made on our Github issues page and contributions
        can be made by devs that find bugs or flaws in our product.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={"Alpha V0.1"}
      description="Peppermint. A ticket management system"
    >
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
              <div className="container">
                <h1 className="hero__title">Welcome to {siteConfig.title}</h1>
                <p className="hero__subtitle">
                  {siteConfig.tagline}
                  <br />
                  <Typist>
                    <span>on premise? </span>
                    <Typist.Backspace count={14} delay={400} />
                    <span>in the cloud? </span>
                    <Typist.Backspace count={15} delay={400} />
                    <span>on a NAS? </span>
                    <Typist.Backspace count={15} delay={400} />
                    <span>
                      All your tickets in the palm of your hand. 
                    </span>
                  </Typist>
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={clsx(
                      "button button--outline button--secondary button--lg",
                      styles.getStarted
                    )}
                    to={useBaseUrl("docs/gettingStarted")}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </header>
          </div>
          <div
            className="col col--6"
            style={{
              marginTop: 75,
              transform: "rotate(5deg)",
              height: 200,
              width: 200,
            }}
          >
            <img src="/img/screenshot_home.png" />
          </div>
        </div>
      </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
