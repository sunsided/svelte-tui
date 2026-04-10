<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Props {
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    children: Snippet;
  }
  
  let { disabled = false, onclick, children }: Props = $props();
</script>

<button
  class="tui-button"
  class:disabled
  {disabled}
  onclick={disabled ? undefined : onclick}
>
  {@render children()}
</button>

<style>
  :global(.tui-button) {
    display: inline-block;
    outline: 0;
    padding: 1px 10px;
    background-color: var(--tui-button-bg, rgb(0, 168, 0));
    color: var(--tui-button-color, black);
    border: none;
    cursor: pointer;
    text-align: center;
    box-shadow: 10px 10px black;
    border-radius: 0px;
    user-select: none;
    font-family: inherit;
    font-size: inherit;
  }
  :global(.tui-button:active) {
    background-color: var(--tui-button-active-bg, rgb(0, 168, 168)) !important;
    color: black !important;
    box-shadow: none !important;
  }
  :global(.tui-button.disabled) {
    text-decoration: line-through;
    cursor: not-allowed;
  }
</style>
