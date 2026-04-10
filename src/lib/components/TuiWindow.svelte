<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title?: string;
    fullWidth?: boolean;
    noShadow?: boolean;
    closable?: boolean;
    resizable?: boolean;
    onclose?: () => void;
    children: Snippet;
  }

  let {
    title,
    fullWidth = false,
    noShadow = false,
    closable = false,
    resizable = false,
    onclose,
    children
  }: Props = $props();
</script>

<div class="tui-window" class:tui-full-width={fullWidth} class:tui-no-shadow={noShadow}>
  <fieldset class="tui-fieldset">
    {#if title}
      <legend class="tui-legend-center">{title}</legend>
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
    <div class="tui-window-content">
      {@render children()}
    </div>
  </fieldset>
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
  :global(.tui-window.tui-full-width) {
    width: 100%;
    box-sizing: border-box;
    display: block;
  }
  :global(.tui-window.tui-no-shadow) {
    box-shadow: none !important;
  }
  :global(.tui-window .tui-fieldset) {
    border: 6px white double;
    padding: 12px;
    background-color: inherit;
    margin: 0;
  }
  :global(.tui-window .tui-fieldset legend) {
    color: white;
  }
  :global(.tui-window .tui-legend-center) {
    text-align: center;
    width: 100%;
  }
  :global(.tui-window-content) {
    padding: 4px 0;
  }
  :global(.tui-fieldset-button) {
    position: absolute;
    top: 0px;
    right: 16px;
    color: white;
    background-color: inherit;
    z-index: 2;
    border: none;
    cursor: pointer;
    outline: 0;
    padding: 2px;
    user-select: none;
    font-family: inherit;
    font-size: inherit;
  }
  :global(.tui-fieldset-button::before) {
    content: "[";
  }
  :global(.tui-fieldset-button::after) {
    content: "]";
  }
  :global(.tui-fieldset-button:active) {
    color: rgb(0, 255, 255) !important;
  }
  :global(.tui-fieldset-button-left) {
    right: initial !important;
    left: 16px !important;
  }
  :global(.tui-fieldset-text) {
    position: absolute;
    bottom: 0px;
    left: 16px;
    color: white;
    background-color: inherit;
    z-index: 2;
    padding: 2px;
  }
  :global(.tui-fieldset-text-right) {
    left: initial;
    right: 16px;
  }
  :global(.tui-fieldset-text-top) {
    top: 0px;
    bottom: initial;
  }
</style>
