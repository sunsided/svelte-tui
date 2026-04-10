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
  {#if title}
    <div class="tui-window-title"><span>{title}</span></div>
  {/if}
  {#if resizable}
    <button class="tui-fieldset-button tui-fieldset-button-left" type="button">↕</button>
    <button class="tui-resize-handle" type="button" tabindex="-1" aria-hidden="true"></button>
  {/if}
  {#if closable}
    <button class="tui-fieldset-button" onclick={onclose} type="button">■</button>
  {/if}
  <div class="tui-window-content">
    {@render children()}
  </div>
</div>

<style>
  :global(.tui-window) {
    background-color: var(--tui-window-bg, rgb(0, 0, 168));
    border: 6px white double;
    padding: 12px;
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
  /* Title sits on the top border line — the span background creates a gap only
     where the text is, so the rest of the top border remains fully visible. */
  :global(.tui-window-title) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    transform: translateY(-50%);
    line-height: 1;
    user-select: none;
    pointer-events: none;
  }
  :global(.tui-window-title span) {
    background-color: var(--tui-window-bg, rgb(0, 0, 168));
    padding: 0 6px;
    display: inline-block;
    line-height: 1.4;
  }
  :global(.tui-window-content) {
    padding: 4px 0;
  }
  /* Close / resize corner buttons – same top-border alignment as the title */
  :global(.tui-fieldset-button) {
    position: absolute;
    top: 0;
    right: 8px;
    color: white;
    background-color: var(--tui-window-bg, rgb(0, 0, 168));
    z-index: 2;
    border: none;
    cursor: pointer;
    outline: 0;
    padding: 0 2px;
    user-select: none;
    font-family: inherit;
    font-size: inherit;
    transform: translateY(-50%);
    line-height: 1.4;
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
    left: 8px !important;
  }
  :global(.tui-fieldset-text) {
    position: absolute;
    bottom: 0px;
    left: 16px;
    color: white;
    background-color: var(--tui-window-bg, rgb(0, 0, 168));
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
  /* Resize handle positioned at bottom-right corner */
  :global(.tui-resize-handle) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
    background-color: transparent;
    z-index: 2;
    border: none;
    cursor: nwse-resize;
    outline: 0;
    padding: 0;
    user-select: none;
  }
  :global(.tui-resize-handle:active) {
    background-color: transparent;
  }
</style>
