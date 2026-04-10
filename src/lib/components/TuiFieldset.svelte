<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Props {
    legend?: string;
    children: Snippet;
  }
  
  let { legend, children }: Props = $props();
</script>

<fieldset class="tui-fieldset" class:no-legend={!legend}>
  {#if legend}
    <legend>{legend}</legend>
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
  }
  :global(.tui-fieldset.no-legend) {
    margin-top: 6px;
  }
  :global(.tui-fieldset legend) {
    color: white;
  }
</style>
