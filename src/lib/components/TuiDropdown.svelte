<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Props {
    label: string;
    children: Snippet;
  }
  
  let { label, children }: Props = $props();
</script>

<div class="tui-dropdown">
  <span>{label}</span>
  <div class="tui-dropdown-content">
    <ul>
      {@render children()}
    </ul>
  </div>
</div>

<style>
  :global(.tui-dropdown) {
    position: relative;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    font-family: "Lucida Console", monospace;
    font-size: 18px;
  }
  :global(.tui-dropdown-content) {
    display: none;
    position: absolute;
    background-color: rgb(168, 168, 168);
    min-width: 200px;
    padding: 6px;
    z-index: 9;
    color: black;
  }
  :global(.tui-dropdown-content ul) {
    border: 2px black solid;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  :global(.tui-dropdown-content ul li) {
    display: block !important;
    margin: 6px;
  }
  :global(.tui-dropdown-content ul li a:hover) {
    background-color: rgb(0, 168, 0);
  }
  :global(.tui-dropdown:hover > .tui-dropdown-content) {
    display: block;
  }
</style>
