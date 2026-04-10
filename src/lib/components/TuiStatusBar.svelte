<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Props {
    children: Snippet;
  }
  
  let { children }: Props = $props();
</script>

<div class="tui-statusbar">
  <ul>
    {@render children()}
  </ul>
</div>

<style>
  :global(.tui-statusbar) {
    width: 100%;
    background-color: var(--tui-statusbar-bg, rgb(168, 168, 168));
    padding: 0px 1px;
    left: 0px;
    bottom: 0px;
    z-index: 9;
    position: fixed;
    box-sizing: border-box;
    font-family: "Lucida Console", monospace;
    font-size: 18px;
  }
  :global(.tui-statusbar ul) {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  :global(.tui-statusbar ul li) {
    display: inline-block;
    margin-left: 10px;
    padding: 2px 3px;
  }
  :global(.tui-statusbar ul li:active) {
    background-color: rgb(0, 0, 168);
    color: white;
  }
  :global(.tui-statusbar ul li a) {
    user-select: none;
    color: inherit;
    text-decoration: none;
  }
</style>
