<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Props {
    children: Snippet;
  }
  
  let { children }: Props = $props();
</script>

<nav class="tui-nav">
  <ul>
    {@render children()}
  </ul>
</nav>

<style>
  :global(.tui-nav) {
    width: 100%;
    background-color: var(--tui-nav-bg, rgb(168, 168, 168));
    padding: 0px 2px;
    z-index: 9;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    color: black;
    font-family: "Lucida Console", monospace;
    font-size: 18px;
    box-sizing: border-box;
  }
  :global(.tui-nav ul) {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  :global(.tui-nav ul li) {
    display: inline-block;
    margin-left: 10px;
    padding: 1px 3px;
  }
  :global(.tui-nav ul li a) {
    display: block;
    user-select: none;
    color: inherit;
    text-decoration: none;
  }
  :global(.tui-nav ul li:hover) {
    background-color: rgb(0, 168, 0);
  }
</style>
