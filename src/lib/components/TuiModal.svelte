<script lang="ts">
  import type { Snippet } from 'svelte';
  import TuiWindow from './TuiWindow.svelte';

  interface Props {
    open?: boolean;
    title?: string;
    onclose?: () => void;
    children: Snippet;
  }

  let { open = $bindable(false), title, onclose, children }: Props = $props();

  function close() {
    open = false;
    onclose?.();
  }
</script>

{#if open}
  <div
    class="tui-overlap"
    role="button"
    tabindex="0"
    aria-label="Close dialog"
    onclick={close}
    onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') close(); }}
  ></div>
  <div class="tui-modal">
    <TuiWindow {title} closable onclose={close}>
      {@render children()}
    </TuiWindow>
  </div>
{/if}

<style>
  :global(.tui-overlap) {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 100;
    background: transparent;
  }
  :global(.tui-modal) {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
  }
</style>
