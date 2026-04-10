<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Props {
    title?: string;
    children: Snippet;
  }
  
  let { title, children }: Props = $props();
</script>

<div class="tui-window">
  {#if title}
    <div class="tui-panel-header">{title}</div>
  {/if}
  <div class="tui-panel-content">
    {@render children()}
  </div>
</div>

<style>
  :global(.tui-window) {
    background-color: var(--tui-window-bg, rgb(0, 0, 168));
    padding: 1px;
    display: inline-block;
    position: relative;
    box-shadow: 10px 10px black;
    color: white;
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
