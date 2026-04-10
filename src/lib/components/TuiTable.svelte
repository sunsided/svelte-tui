<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Props {
    hovered?: boolean;
    striped?: boolean;
    children: Snippet;
  }
  
  let { hovered = false, striped = false, children }: Props = $props();
</script>

<table class="tui-table" class:hovered class:striped-cyan={striped}>
  {@render children()}
</table>

<style>
  :global(.tui-table) {
    border: 2px solid rgb(168, 168, 168);
    padding: 5px;
    border-collapse: collapse;
    color: white;
    font-family: "Lucida Console", monospace;
    font-size: 18px;
  }
  :global(.tui-table tbody tr td) {
    border-right: 2px solid rgb(168, 168, 168);
    padding: 0px 2px;
  }
  :global(.tui-table thead) {
    background-color: inherit;
    color: rgb(255, 255, 0);
    text-align: center;
  }
  :global(.tui-table.hovered tbody tr:hover) {
    background-color: rgb(0, 255, 255) !important;
    color: black;
  }
  :global(.tui-table.striped-cyan tbody tr:nth-child(even)) {
    background-color: rgb(0, 168, 168);
  }
</style>
