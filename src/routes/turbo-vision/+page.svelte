<script lang="ts">
  import TuiNav from '$lib/components/TuiNav.svelte';
  import TuiSideNav from '$lib/components/TuiSideNav.svelte';
  import TuiWindow from '$lib/components/TuiWindow.svelte';
  import TuiModal from '$lib/components/TuiModal.svelte';
  import TuiStatusBar from '$lib/components/TuiStatusBar.svelte';
  import TuiProgressBar from '$lib/components/TuiProgressBar.svelte';
  import TuiButton from '$lib/components/TuiButton.svelte';
  import TuiInput from '$lib/components/TuiInput.svelte';
  import TuiDropdown from '$lib/components/TuiDropdown.svelte';
  import TuiTextarea from '$lib/components/TuiTextarea.svelte';
  import TuiTable from '$lib/components/TuiTable.svelte';
  import TuiDivider from '$lib/components/TuiDivider.svelte';

  let sideNavOpen = $state(false);
  let modalOpen = $state(false);
  let progress = $state(72);
  let searchText = $state('');
</script>

<!-- Turbo Vision-style desktop: teal background -->
<div class="tv-desktop">

  <!-- Side navigation (hamburger menu) -->
  <TuiSideNav bind:open={sideNavOpen}>
    <li><a href="#!"><span class="tv-key">O</span>pen <span class="tv-shortcut">Ctrl+O</span></a></li>
    <li><a href="#!">OS Shell</a></li>
    <li><a href="#!"><span class="tv-key">C</span>opy <span class="tv-shortcut">Ctrl+C</span></a></li>
    <li><a href="#!"><span class="tv-key">P</span>aste <span class="tv-shortcut">Ctrl+V</span></a></li>
    <li><a href="#!">C<span class="tv-key">u</span>t <span class="tv-shortcut">Ctrl+X</span></a></li>
    <li class="tv-divider"></li>
    <li><a href="#!">Insert</a></li>
    <li><a href="#!">Delete</a></li>
    <li><a href="#!">Go...</a></li>
    <li class="tv-divider"></li>
    <li><a href="#!"><span class="tv-key">S</span>earch <span class="tv-shortcut">Ctrl+P</span></a></li>
    <li class="tv-divider"></li>
    <li><a href="#!">Exit <span class="tv-shortcut">F10</span></a></li>
  </TuiSideNav>

  <!-- Top menu bar -->
  <TuiNav>
    <li>
      <button
        class="tv-hamburger"
        type="button"
        onclick={() => (sideNavOpen = !sideNavOpen)}
      >≡</button>
    </li>
    <li>
      <TuiDropdown label="File">
        <li><a href="#!"><span class="tv-key">N</span>ew</a></li>
        <li><a href="#!"><span class="tv-key">O</span>pen… <span class="tv-shortcut">F3</span></a></li>
        <li><a href="#!"><span class="tv-key">S</span>ave <span class="tv-shortcut">F2</span></a></li>
        <li><a href="#!">S<span class="tv-key">a</span>ve as…</a></li>
        <li class="tv-divider"></li>
        <li><a href="#!"><span class="tv-key">Q</span>uit <span class="tv-shortcut">F10</span></a></li>
      </TuiDropdown>
    </li>
    <li>
      <TuiDropdown label="Edit">
        <li><a href="#!">Undo <span class="tv-shortcut">Ctrl+Z</span></a></li>
        <li><a href="#!">Redo <span class="tv-shortcut">Ctrl+Y</span></a></li>
        <li class="tv-divider"></li>
        <li><a href="#!">Cut <span class="tv-shortcut">Ctrl+X</span></a></li>
        <li><a href="#!">Copy <span class="tv-shortcut">Ctrl+C</span></a></li>
        <li><a href="#!">Paste <span class="tv-shortcut">Ctrl+V</span></a></li>
      </TuiDropdown>
    </li>
    <li>
      <TuiDropdown label="View">
        <li><a href="#!">Next <span class="tv-shortcut">F6</span></a></li>
        <li><a href="#!">Previous <span class="tv-shortcut">Alt+F6</span></a></li>
        <li class="tv-divider"></li>
        <li><a href="#!">Tile</a></li>
        <li><a href="#!">Cascade</a></li>
      </TuiDropdown>
    </li>
    <li>
      <TuiDropdown label="Help">
        <li><a href="#!">Index <span class="tv-shortcut">F1</span></a></li>
        <li><a href="#!">About</a></li>
      </TuiDropdown>
    </li>
  </TuiNav>

  <!-- Desktop content area -->
  <div class="tv-content">

    <!-- Editor window -->
    <TuiWindow title="MYAPP.CPP" fullWidth noShadow closable resizable>
      <TuiTextarea rows={10} cols={80} value={`#include <iostream>\nusing namespace std;\n\nint main()\n{\n    cout << "Hello, Turbo Vision!";\n    return 0;\n}`} />
    </TuiWindow>

    <!-- Info row: two side-by-side windows -->
    <div class="tv-row">
      <!-- Search window -->
      <TuiWindow title="Search">
        <p>Find: <TuiInput bind:value={searchText} placeholder="search..." /></p>
        <TuiButton onclick={() => (modalOpen = true)}>Find Next</TuiButton>
      </TuiWindow>

      <!-- Progress window -->
      <TuiWindow title="Build Status" closable>
        <p>Compiling…</p>
        <TuiProgressBar value={progress} showLabel />
        <p style="margin-top: 8px;">
          <TuiButton onclick={() => { progress = progress < 100 ? progress + 10 : 0; }}>
            {progress < 100 ? 'Step' : 'Reset'}
          </TuiButton>
        </p>
      </TuiWindow>

      <!-- Log table window -->
      <TuiWindow title="Error Log" resizable>
        <TuiTable hovered>
          <thead>
            <tr><th>Line</th><th>Message</th></tr>
          </thead>
          <tbody>
            <tr><td>12</td><td>Warning: unused var</td></tr>
            <tr><td>34</td><td>Error: missing ;</td></tr>
            <tr><td>57</td><td>Note: implicit cast</td></tr>
          </tbody>
        </TuiTable>
        <TuiDivider />
        <p>3 messages</p>
      </TuiWindow>
    </div>

  </div>

  <!-- Modal dialog -->
  <TuiModal bind:open={modalOpen} title="Search Result">
    <p>No more occurrences of</p>
    <p style="color: rgb(0, 255, 255);">"{searchText || '(empty)'}"</p>
    <p>found in document.</p>
    <TuiDivider />
    <div style="text-align: center; margin-top: 8px;">
      <TuiButton onclick={() => (modalOpen = false)}>OK</TuiButton>
    </div>
  </TuiModal>

  <!-- Status bar -->
  <TuiStatusBar>
    <li><a href="#!"><span class="tv-key">F1</span> Help</a></li>
    <li><a href="#!"><span class="tv-key">F2</span> Save</a></li>
    <li><a href="#!"><span class="tv-key">F3</span> Open</a></li>
    <li><a href="#!"><span class="tv-key">Alt+F9</span> Compile</a></li>
    <span class="tui-statusbar-divider"></span>
    <li><a href="#!"><span class="tv-key">F10</span> Menu</a></li>
  </TuiStatusBar>

</div>

<style>
  .tv-desktop {
    background-color: rgb(0, 168, 168);
    min-height: 100vh;
    font-family: "Lucida Console", monospace;
    font-size: 18px;
    color: white;
    box-sizing: border-box;
  }

  .tv-content {
    padding: 38px 0 28px;
  }

  .tv-row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px 10px;
    align-items: flex-start;
  }

  /* Red accent for shortcut key letters (TV style) */
  :global(.tv-key) {
    color: rgb(255, 85, 85);
    font-weight: bold;
  }

  :global(.tv-shortcut) {
    float: right;
    margin-left: 16px;
    color: rgb(168, 168, 168);
  }

  :global(.tv-divider) {
    border-top: 1px solid rgb(0, 0, 0);
    margin: 4px 6px;
    list-style: none;
  }

  :global(.tv-hamburger) {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    color: rgb(168, 0, 0);
    padding: 1px 3px;
    outline: 0;
  }

  :global(.tv-hamburger:hover) {
    background-color: rgb(0, 168, 0);
    color: black;
  }
</style>
