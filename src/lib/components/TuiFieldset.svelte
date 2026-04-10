<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    legend?: string;
    legendCenter?: boolean;
    closable?: boolean;
    resizable?: boolean;
    onclose?: () => void;
    children: Snippet;
  }

  let {
    legend,
    legendCenter = false,
    closable = false,
    resizable = false,
    onclose,
    children
  }: Props = $props();
</script>

<fieldset class="tui-fieldset" class:tui-fieldset-no-legend={!legend}>
  {#if legend}
    <legend class:tui-legend-center={legendCenter}>{legend}</legend>
  {/if}
  {#if closable}
    <button class="tui-fieldset-button" onclick={onclose} type="button">
      <span>■</span>
    </button>
  {/if}
  {#if resizable}
    <button class="tui-fieldset-button tui-fieldset-button-left" type="button">
      <span>↕</span>
    </button>
  {/if}
  {@render children()}
</fieldset>

<style>
  :global(.tui-fieldset) {
    border: 6px white double;
    padding: 12px;
    background-color: inherit;
    margin-bottom: 6px;
    color: white;
    font-family: "Lucida Console", monospace;
    font-size: 18px;
    position: relative;
  }
  :global(.tui-fieldset.tui-fieldset-no-legend) {
    margin-top: 6px;
  }
  :global(.tui-fieldset legend) {
    color: white;
  }
  :global(.tui-fieldset .tui-legend-center) {
    text-align: center;
    width: 100%;
  }
</style>
