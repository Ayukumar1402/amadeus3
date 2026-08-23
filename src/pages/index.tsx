import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import FlapHeader from '@site/src/components/FlapHeader';
import {topics} from '@site/src/data/topics';
import styles from './index.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <FlapHeader eyebrow="Community-maintained · Open source" text="Amadeus KB" />
        <p className={styles.subtitle}>
          The Amadeus command an agent needs, found in the time it takes a customer to say
          "hello." Built by support agents, corrected by support agents.
          <span className="terminal-cursor" aria-hidden="true" />
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryCta} to="/pnr-creation">
            Start with PNR Creation
          </Link>
          <span className={styles.hotkeyHint}>
            or press <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>K</kbd> to search
          </span>
        </div>
        <div className={`${styles.statsRow} reveal`}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{topics.length}</div>
            <div className={styles.statLabel}>Reservation topics</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>MIT</div>
            <div className={styles.statLabel}>Open source license</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>Live</div>
            <div className={styles.statLabel}>Interactive command builders</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>PR</div>
            <div className={styles.statLabel}>Built for agent contributions</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function WorkflowOverview() {
  const imgSrc = useBaseUrl('/img/workflow-overview.svg');
  return (
    <section className="container">
      <Heading as="h2" className={styles.gridHeading}>
        How it fits together
      </Heading>
      <p className={styles.workflowCaption}>
        The eight topics below aren't independent — this is the shape of a real call. Every
        topic page also has its own step-by-step flowchart for the commands inside it.
      </p>
      <div className={`${styles.workflowFrame} reveal`}>
        <img
          src={imgSrc}
          alt="Flow diagram: PNR Creation leads to Fare and Pricing, then Ticketing, then Reissue and Exchange, then Refunds. Seat Maps and Ancillaries branches off Ticketing. Queue Management runs underneath PNR Creation through Ticketing. Error Codes is a reference usable at any stage."
          className={styles.workflowImg}
        />
      </div>
    </section>
  );
}

function TopicCard({topic, index}: {topic: (typeof topics)[number]; index: number}) {
  const iconSrc = useBaseUrl(topic.icon);
  return (
    <Link
      to={`/${topic.slug}`}
      className="topic-card reveal"
      style={{transitionDelay: `${Math.min(index, 6) * 60}ms`}}>
      <img src={iconSrc} alt="" aria-hidden="true" className={styles.topicIcon} />
      <span className="topic-card__eyebrow">{topic.eyebrow}</span>
      <h3 className="topic-card__title">{topic.title}</h3>
      <p className="topic-card__desc">{topic.description}</p>
      {topic.status === 'help-wanted' && (
        <span className={`status-chip status-chip--error ${styles.chipSpacing}`}>
          Help wanted
        </span>
      )}
      {topic.status === 'complete' && (
        <span className={`status-chip status-chip--valid ${styles.chipSpacing}`}>
          Documented
        </span>
      )}
    </Link>
  );
}

function TopicGrid() {
  return (
    <section className="container">
      <Heading as="h2" className={styles.gridHeading}>
        Browse by topic
      </Heading>
      <div className="topic-grid">
        {topics.map((topic, index) => (
          <TopicCard key={topic.slug} topic={topic} index={index} />
        ))}
      </div>
    </section>
  );
}

function ContributeBanner() {
  return (
    <section className="container">
      <div className={`${styles.contribute} reveal`}>
        <div>
          <h3 className={styles.contributeTitle}>Know a command that's missing?</h3>
          <p className={styles.contributeText}>
            This knowledge base is open source. Every topic is a plain Markdown file — no
            engineering background needed to fix a typo, add an edge case, or write up a whole
            new topic.
          </p>
        </div>
        <Link
          className={styles.secondaryCta}
          href="https://github.com/Ayukumar1402/amadeus2/blob/main/CONTRIBUTING.md">
          Read the contribution guide
        </Link>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Amadeus command lookup for support agents"
      description="An open-source, interactive knowledge base of Amadeus GDS commands for customer service agents.">
      <Hero />
      <main>
        <WorkflowOverview />
        <TopicGrid />
        <ContributeBanner />
      </main>
    </Layout>
  );
}
