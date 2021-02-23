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
            <header className={clsx("heroBanner", styles.heroBanner)}>
              <div className="container">
                <h1 className="hero_title">{siteConfig.title} 🍵</h1>
                <h3 className="hero_subtitle">
                  {siteConfig.tagline}
                  <br />
                  <Typist>
                    <span>on premise? </span>
                    <Typist.Backspace count={14} delay={400} />
                    <span>in the cloud? </span>
                    <Typist.Backspace count={15} delay={400} />
                    <span>on a NAS? </span>
                    <Typist.Backspace count={15} delay={400} />
                    <span>All your tickets in the palm of your hand.</span>
                  </Typist>
                </h3>
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
            className="col col--6 logo"
            style={{
              transform: "rotate(5deg)",
            }}
          >
            <img src="/img/logo.png" />
          </div>
        </div>
      </div>
      <main className="main-container">
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
      <div className="container">
        <div class="row">
          <div class="col col--6">
            <h1>Want to see it in action?</h1>
            <p>Login: admin@admin.com & 1234</p>
            <p>
              We have a ready to go demo which can be accessed using the link
              below.
            </p>
            <a href="https://demo.pmint.dev/" target="_blank">
              <button class="button button--primary">Demo</button>
            </a>
          </div>
          <div class="col col--6 ">
            <div
              style={{
                transform: "rotate(-5deg)",
                marginBottom: 35,
              }}
            >
              <img src="/img/screenshot_home.png" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
