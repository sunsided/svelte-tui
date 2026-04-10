<script lang="ts">
  import { onMount } from 'svelte';
  import TuiProgressBar from '$lib/components/TuiProgressBar.svelte';
  import TuiStatusBar from '$lib/components/TuiStatusBar.svelte';
  import TuiPanel from '$lib/components/TuiPanel.svelte';

  // Boot sequence visibility states
  let showPnpInit = $state(false);
  let showPrimaryMaster = $state(false);
  let showPrimarySlave = $state(false);
  let showSecondaryDevices = $state(false);
  let showVirusMessage = $state(false);

  // Memory test progress (0–100)
  let memProgress = $state(0);
  let memDone = $state(false);

  onMount(() => {
    // Animate memory test over ~600 ms
    const memInterval = setInterval(() => {
      memProgress += 5;
      if (memProgress >= 100) {
        memProgress = 100;
        memDone = true;
        clearInterval(memInterval);
      }
    }, 30);

    // Reveal boot sessions (timing mirrors the original TuiCss demo, scaled for visibility)
    setTimeout(() => { showPnpInit = true; }, 1800);
    setTimeout(() => { showPrimaryMaster = true; }, 2600);
    setTimeout(() => { showPrimarySlave = true; }, 3200);
    setTimeout(() => { showSecondaryDevices = true; }, 4000);
    setTimeout(() => { showVirusMessage = true; }, 5500);

    return () => clearInterval(memInterval);
  });
</script>

<div class="bios-screen">

  <!-- ── Logo row ─────────────────────────────────────────────── -->
  <div class="bios-header">

    <!-- Award Medallion badge (left, ~40×40 equivalent) -->
    <TuiPanel>
      <div class="award-badge">
        <div class="award-star">✦</div>
        <div class="award-name">Award</div>
        <div class="award-sub">Medallion</div>
      </div>
    </TuiPanel>

    <!-- BIOS manufacturer logo (right, ~200×150 equivalent) -->
    <TuiPanel header="AWARD SOFTWARE, INC.">
      <pre class="bios-logo-ascii"> ____  _  ___  ____
|  _ \| |/ _ \/ ___|
| |_) | | | | \___ \
|  _ &lt;| | |_| |___) |
|_| \_\_|\___/|____/</pre>
      <div class="bios-logo-sub">MEDALLION BIOS</div>
    </TuiPanel>

  </div>

  <!-- ── BIOS header text ──────────────────────────────────────── -->
  <div class="bios-body">

    <p>
      Award Medallion BIOS v6.0, An Energy Star Ally<br>
      Copyright (C) 1984-2001, Award Software, Inc.
    </p>

    <p>ASUS P4T533-C ACPI BIOS Revision 1007 Beta 001</p>

    <div class="bios-line">
      Intel(R) Pentium(R) 4 2800 MHz Processor
    </div>
    <div class="bios-line mem-test-line">
      Memory Test :&nbsp;&nbsp;&nbsp;
      {#if memDone}
        <span>262144K OK</span>
      {:else}
        <span class="mem-bar"><TuiProgressBar value={memProgress} /></span>
      {/if}
    </div>

    <!-- Session 1: PnP init -->
    {#if showPnpInit}
      <p class="boot-session">
        Award Plug and Play BIOS Extension v1.0A<br>
        Initialize Plug and Play Cards...<br>
        PNP init Completed
      </p>
    {/if}

    <!-- Session 2: Primary Master -->
    {#if showPrimaryMaster}
      <p class="boot-session">
        Detecting Primary Master .....: MAXTOR 6L040J2
      </p>
    {/if}

    <!-- Session 3: Primary Slave -->
    {#if showPrimarySlave}
      <p class="boot-session">
        Detecting Primary Slave ......: ASUS CD-S520/A
      </p>
    {/if}

    <!-- Session 4: Secondary devices -->
    {#if showSecondaryDevices}
      <p class="boot-session">
        Detecting Secondary Master ...: Skip<br>
        Detecting Secondary Slave ....: None
      </p>
    {/if}

    <!-- Session 5: Surprise! -->
    {#if showVirusMessage}
      <p class="boot-session boot-virus">
        Found virus! The PC cannot be started. I'm Sorry :(
      </p>
    {/if}

  </div>

  <!-- ── Status bar ────────────────────────────────────────────── -->
  <TuiStatusBar>
    <li>Press <strong>DEL</strong> to enter SETUP, <strong>Alt+F2</strong> to enter EZ flash utility</li>
    <li class="bios-sb-right">08/20/2002-1850E/ICH2/W627-P4T533-C</li>
  </TuiStatusBar>

</div>

<style>
  /* ── Page container ─────────────────────────────────────────── */
  .bios-screen {
    background: black;
    color: white;
    min-height: 100vh;
    padding: 2px 8px 36px;
    font-family: "Lucida Console", monospace;
    font-size: 18px;
    box-sizing: border-box;

    /* Theme overrides for child components */
    --tui-panel-bg: black;
    --tui-statusbar-bg: black;
    --tui-progress-track-bg: rgb(0, 0, 168);
    --tui-progress-bg: rgb(0, 255, 255);
  }

  /* ── Logo row ─────────────────────────────────────────────── */
  .bios-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 8px;
  }

  /* Award Medallion badge */
  .award-badge {
    text-align: center;
    padding: 2px 8px;
    min-width: 70px;
    line-height: 1.5;
  }

  .award-star {
    font-size: 24px;
    color: rgb(255, 215, 0);
  }

  .award-name {
    font-weight: bold;
    letter-spacing: 2px;
  }

  .award-sub {
    font-size: 13px;
    color: rgb(168, 168, 168);
  }

  /* BIOS logo on the right */
  .bios-logo-ascii {
    font-family: "Lucida Console", monospace;
    font-size: 13px;
    color: rgb(0, 255, 255);
    margin: 0;
    line-height: 1.3;
  }

  .bios-logo-sub {
    text-align: center;
    color: rgb(255, 255, 0);
    font-size: 14px;
    margin-top: 4px;
    letter-spacing: 2px;
  }

  /* ── Body text ────────────────────────────────────────────── */
  .bios-body p,
  .bios-line {
    margin: 0 0 2px;
    line-height: 1.6;
  }

  .mem-test-line {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .mem-bar {
    display: inline-block;
    vertical-align: middle;
  }

  .boot-session {
    margin: 8px 0 0;
    line-height: 1.6;
  }

  .boot-virus {
    color: rgb(255, 85, 85);
    margin-top: 16px;
  }

  /* Right-align the BIOS date string in the status bar */
  :global(.bios-sb-right) {
    float: right;
  }
</style>
