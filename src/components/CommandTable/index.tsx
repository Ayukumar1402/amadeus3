import React, {useState} from 'react';
import styles from './styles.module.css';

export interface CommandRow {
  command: string;
  purpose: string;
  example: string;
  commonErrors?: string;
}

interface CommandTableProps {
  rows: CommandRow[];
}

function CopyButton({value}: {value: string}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // clipboard API unavailable — fail silently, button still shows the text
    }
  };

  return (
    <button
      type="button"
      className={styles.copyBtn}
      onClick={handleCopy}
      aria-label={`Copy ${value} to clipboard`}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

/**
 * Expandable command reference table. Each row can be clicked to reveal
 * common errors so the default view stays scannable during a live call.
 */
export default function CommandTable({rows}: CommandTableProps): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Command</th>
            <th>Purpose</th>
            <th>Example</th>
            <th aria-label="Expand" />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <React.Fragment key={row.command + i}>
              <tr
                className={styles.row}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <td>
                  <code>{row.command}</code>
                </td>
                <td>{row.purpose}</td>
                <td className={styles.exampleCell}>
                  <code>{row.example}</code>
                  <CopyButton value={row.example} />
                </td>
                <td className={styles.chevronCell}>
                  <span className={openIndex === i ? styles.chevronOpen : styles.chevron}>
                    ▾
                  </span>
                </td>
              </tr>
              {openIndex === i && row.commonErrors && (
                <tr className={`${styles.detailRow} fade-section`}>
                  <td colSpan={4}>
                    <span className="status-chip status-chip--error">Common errors</span>
                    <p className={styles.detailText}>{row.commonErrors}</p>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
