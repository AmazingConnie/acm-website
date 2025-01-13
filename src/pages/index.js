import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src='img/umlacmlogo.png' className={styles.logo}></img>
        <Heading as="h1" className={styles.site_title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.site_title}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="discord-button button button--secondary button--lg"
            to="https://discord.gg/xVyR6J9ZMF">
            Discord
          </Link>
          <div class={styles.divider}></div>
          <Link
            className="button button--secondary button--lg "
            to="https://github.com/UML-Association-For-Computing-Machinery">
            Github
          </Link>
        </div>
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
