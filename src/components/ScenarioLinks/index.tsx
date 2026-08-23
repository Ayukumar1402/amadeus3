import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export interface ScenarioLink {
  to: string;
  label: string;
  description: string;
  tag?: string;
}

/**
 * A row of button-style hyperlinks used on topic overview pages to fan out
 * into scenario-specific subpages (e.g. Reissue & Exchange -> GEVR ATC,
 * GEVR without ATC, FTC Redemption, ASC, MCO). Kept as its own component
 * so any topic page can reuse the same pattern instead of hand-rolling
 * markdown links.
 */
export default function ScenarioLinks({links}: {links: ScenarioLink[]}): JSX.Element {
  return (
    <div className={`${styles.grid} reveal`}>
      {links.map((link, index) => (
        <Link
          key={link.to}
          to={link.to}
          className={styles.button}
          style={{transitionDelay: `${Math.min(index, 6) * 50}ms`}}>
          {link.tag && <span className={styles.tag}>{link.tag}</span>}
          <span className={styles.label}>{link.label}</span>
          <span className={styles.desc}>{link.description}</span>
          <span className={styles.arrow} aria-hidden="true">→</span>
        </Link>
      ))}
    </div>
  );
}
