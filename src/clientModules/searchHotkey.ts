/**
 * Global Cmd/Ctrl+K hotkey that focuses the search box, so an agent on a
 * live call never has to reach for the mouse to find a command. Runs only
 * in the browser (Docusaurus client modules execute on both server and
 * client, so everything is guarded behind a `document` check).
 */
if (typeof document !== 'undefined') {
  document.addEventListener('keydown', (event: KeyboardEvent) => {
    const isMetaK = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
    if (!isMetaK) return;

    const input = document.querySelector<HTMLInputElement>(
      'input[type="search"], input.navbar__search-input, #search_input_react',
    );
    if (input) {
      event.preventDefault();
      input.focus();
      input.select?.();
    }
  });
}

export default (): void => {};
