# Contributing to Amadeus KB

This knowledge base only stays useful if the agents using it keep correcting and extending it.
You do **not** need to know how to code to contribute — every topic page is a plain Markdown
file with a couple of import lines at the top.

## Quick fixes (typo, wrong command, outdated syntax)

1. Open the page on the live site and click **Edit this page** at the bottom.
2. GitHub opens an editor in your browser — no local setup needed.
3. Make your change and describe what you fixed in a couple of sentences.
4. Click **Propose changes**. This opens a pull request (PR) automatically.
5. A maintainer reviews it, and once it's confirmed, it goes live.

## Adding a new topic, or filling in a "Help wanted" page

1. Fork this repository and clone it, or use GitHub's web editor for small additions.
2. Copy the shape of an existing full page — `docs/pnr-creation/index.mdx` is the reference
   example. Every topic page follows this structure:
   - Front matter (`sidebar_position`, `title`, `description`).
   - A `<FlapHeader>` with an eyebrow and the topic title.
   - A one-line **"When to use this"** summary.
   - A Mermaid flowchart (inside a ` ```mermaid ` code block) showing the step-by-step process.
   - A `<CommandTable>` listing each command, its purpose, an example, and common errors.
   - Optionally, a `<CommandBuilder>` for the one or two commands agents type most often.
   - A **Related topics** list at the bottom, linking to adjacent pages.
3. If you're adding a brand-new topic folder, also add a `_category_.json` file inside it
   (copy one from an existing topic folder and update the `label` and `position`).
4. Open a pull request. Use the PR template — it asks which topic you touched, what changed,
   and how you verified the command syntax (a training manual, your own terminal, a supervisor).

## Style guide

- **Plain language.** Spell out acronyms the first time they appear on a page.
- **Every command needs a real example**, not just the bare syntax.
- **Never include real PNR data, customer names, card numbers, or anything else identifiable.**
  All examples must use invented names, fake locators, and placeholder card numbers.
- **Note uncertainty.** If you're not 100% sure a command is current, say so in the page
  (see the "Draft content" callouts already on several pages) rather than presenting it as
  verified fact.
- **Keep flowcharts to one screen.** If a process needs more than ~8 steps, it probably belongs
  on two linked pages instead of one sprawling diagram.

## Review process

- At least one maintainer reviews every PR before merge.
- For command-syntax corrections, reviewers will ask how you confirmed the change (a live
  terminal, official Amadeus documentation, a training resource) — this keeps the knowledge
  base trustworthy as it grows.
- Small typo fixes are usually merged within a day or two; new topic pages may take longer
  since they need a full read-through.

## Reporting a problem without writing a fix yourself

Not everyone has time to write the correction. If you've hit a wrong or missing command during
a call, [open an issue](../../issues/new) describing what you saw and what actually worked —
someone else can turn it into a PR.

## Code of conduct

This project follows the [Code of Conduct](./CODE_OF_CONDUCT.md). Be respectful — this is a
shared tool that other agents rely on mid-call.
