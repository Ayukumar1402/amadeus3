import React, {useMemo, useState} from 'react';
import styles from './styles.module.css';

export interface BuilderField {
  id: string;
  label: string;
  placeholder: string;
  /** Shown under the field as a hint, e.g. "3-letter IATA code" */
  hint?: string;
  /** Uppercases input as the agent types — most Amadeus tokens are uppercase */
  uppercase?: boolean;
}

interface CommandBuilderProps {
  title: string;
  /** Template string using {fieldId} placeholders, e.g. "SS{seats}{class}{line}" */
  template: string;
  fields: BuilderField[];
  note?: string;
}

/**
 * A small, reusable form that assembles a live Amadeus command string from
 * agent input. Designed as a generic component (template + fields) so
 * contributors can add a builder to a new topic page purely from MDX,
 * without writing new React code.
 */
export default function CommandBuilder({
  title,
  template,
  fields,
  note,
}: CommandBuilderProps): React.ReactElement {
  const initial = Object.fromEntries(fields.map((f) => [f.id, '']));
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [copied, setCopied] = useState(false);

  const command = useMemo(() => {
    let out = template;
    for (const field of fields) {
      const raw = values[field.id] ?? '';
      const val = raw.trim() || field.placeholder;
      out = out.split(`{${field.id}}`).join(val);
    }
    return out;
  }, [values, template, fields]);

  const allFilled = fields.every((f) => values[f.id]?.trim());

  const handleChange = (id: string, uppercase: boolean | undefined, val: string) => {
    setValues((prev) => ({...prev, [id]: uppercase ? val.toUpperCase() : val}));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // clipboard API unavailable
    }
  };

  return (
    <div className={`${styles.builder} fade-section`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Command builder</span>
        <h4 className={styles.title}>{title}</h4>
      </div>

      <div className={styles.fields}>
        {fields.map((field) => (
          <label key={field.id} className={styles.fieldLabel}>
            {field.label}
            <input
              className={styles.input}
              type="text"
              placeholder={field.placeholder}
              value={values[field.id]}
              onChange={(e) => handleChange(field.id, field.uppercase, e.target.value)}
            />
            {field.hint && <span className={styles.hint}>{field.hint}</span>}
          </label>
        ))}
      </div>

      <div className={styles.readout}>
        <code className={styles.readoutCode}>{command}</code>
        <button
          type="button"
          className={styles.copyBtn}
          onClick={handleCopy}
          disabled={!allFilled}
          aria-label="Copy generated command">
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      {!allFilled && (
        <p className={styles.placeholderNote}>
          Showing placeholder values — fill every field for the exact command.
        </p>
      )}
      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}
