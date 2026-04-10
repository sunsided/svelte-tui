<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Props {
    header?: string;
    children: Snippet;
  }
  
  let { header, children }: Props = $props();
</script>

<div class="tui-panel">
  {#if header}
    <div class="tui-panel-header">{header}</div>
  {/if}
  <div class="tui-panel-content">
    {@render children()}
  </div>
</div>

<style>
  :global(.tui-panel) {
    background-color: var(--tui-panel-bg, rgb(0, 0, 168));
    display: inline-block;
    color: white;
    box-shadow: 10px 10px black;
    font-family: "Lucida Console", monospace;
    font-size: 18px;
  }
  :global(.tui-panel-header) {
    padding-top: 2px;
    display: block;
    background: white;
    text-align: center;
    color: black;
  }
  :global(.tui-panel-content) {
    padding: 12px;
  }
</style>
