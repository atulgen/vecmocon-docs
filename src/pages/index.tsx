import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <img
              src="/img/logo.png"
              alt="Vecmocon Technologies Logo"
              className={styles.logo}
            />
            <h1 className="hero__title">Vecmocon ERP Implementation</h1>
            <p className="hero__subtitle">
              Complete Digital Transformation Guide for EV Technology Excellence
            </p>
            <p>Helping you prepare for an electric future</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs">
                📖 Start Reading Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProjectOverview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <h2>About This Project</h2>
            <p>
              Comprehensive ERPNext implementation documentation covering 150+ business processes
              across 9 departments for Vecmocon's complete digital transformation.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>150+</div>
                <div className={styles.statLabel}>Processes Mapped</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>9</div>
                <div className={styles.statLabel}>Departments</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Complete ERPNext Implementation Guide for Vecmocon Technologies - EV Parts Manufacturing Digital Transformation">
      <HomepageHeader />
      <main>
        <ProjectOverview />
      </main>
    </Layout>
  );
}
