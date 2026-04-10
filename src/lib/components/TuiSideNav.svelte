<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Props {
    open?: boolean;
    right?: boolean;
    children: Snippet;
  }
  
  let { open = false, right = false, children }: Props = $props();
</script>

<div class="tui-sidenav" class:active={open} class:right>
  <ul>
    {@render children()}
  </ul>
</div>

<style>
  :global(.tui-sidenav) {
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: var(--tui-sidenav-bg, rgb(0, 168, 168));
    min-width: 200px;
    box-shadow: 10px 10px black !important;
    padding: 6px;
    z-index: 10;
    height: 100%;
    display: none;
    box-sizing: border-box;
    font-family: "Lucida Console", monospace;
    font-size: 18px;
  }
  :global(.tui-sidenav.right) {
    left: initial;
    right: 0px;
  }
  :global(.tui-sidenav.active) {
    display: block !important;
  }
  :global(.tui-sidenav ul) {
    margin-top: 20px;
    border: 2px black solid;
    padding: 0;
    list-style: none;
  }
  :global(.tui-sidenav ul li) {
    display: block;
    margin: 6px;
  }
  :global(.tui-sidenav ul li a) {
    display: block;
    user-select: none;
    color: inherit;
    text-decoration: none;
  }
  :global(.tui-sidenav ul li:hover) {
    background-color: rgb(255, 255, 0);
  }
</style>
