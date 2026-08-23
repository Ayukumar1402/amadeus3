import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

interface FlapHeaderProps {
  text: string;
  eyebrow?: string;
  icon?: string;
}

/**
 * Signature element: renders a heading as individual split-flap tiles
 * that flip into place on mount, like a departure board locking a
 * destination. Used once per topic page as the H1 so it reads as
 * intentional, not decorative repetition.
 */
export default function FlapHeader({text, eyebrow, icon}: FlapHeaderProps): React.ReactElement {
  const chars = text.toUpperCase().split('');
  const iconUrl = useBaseUrl(icon || '');

  return (
    <div className={styles.wrapper}>
      {(eyebrow || icon) && (
        <div className={styles.eyebrowRow}>
          {icon && <img src={iconUrl} alt="" aria-hidden="true" className={styles.icon} />}
          {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        </div>
      )}
      <h1 className="flap-header">
        <span className="flap-header__row">
          {chars.map((char, i) => (
            <span
              key={`${char}-${i}`}
              className="flap-char"
              style={{animationDelay: `${i * 28}ms`}}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
}
