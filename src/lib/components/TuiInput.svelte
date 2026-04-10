<script lang="ts">
  interface Props {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: string;
    onchange?: (e: Event) => void;
    oninput?: (e: Event) => void;
  }
  
  let { value = $bindable(''), placeholder = '', disabled = false, type = 'text', onchange, oninput }: Props = $props();
</script>

<input
  class="tui-input"
  class:disabled
  {type}
  {value}
  {placeholder}
  {disabled}
  {onchange}
  {oninput}
/>

<style>
  :global(.tui-input) {
    background-color: var(--tui-input-bg, rgb(0, 0, 0));
    color: var(--tui-input-color, white);
    outline: 0;
    border: none;
    border-radius: 0px;
    font-family: "Lucida Console", monospace;
    font-size: inherit;
    padding: 1px 4px;
    width: 200px;
  }
  :global(.tui-input:focus) {
    background-color: var(--tui-input-focus-bg, rgb(255, 255, 0)) !important;
    color: black !important;
  }
  :global(.tui-input.disabled) {
    background-color: rgb(168, 168, 168);
    color: black;
    cursor: not-allowed;
  }
</style>
