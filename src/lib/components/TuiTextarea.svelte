<script lang="ts">
  interface Props {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    rows?: number;
    cols?: number;
    oninput?: (e: Event) => void;
  }
  
  let { value = $bindable(''), placeholder = '', disabled = false, rows = 4, cols = 40, oninput }: Props = $props();
</script>

<textarea
  class="tui-textarea"
  class:disabled
  {rows}
  {cols}
  {placeholder}
  {disabled}
  bind:value
  {oninput}
></textarea>

<style>
  :global(.tui-textarea) {
    background-color: inherit;
    border: none;
    padding: 0px;
    color: var(--tui-textarea-color, rgb(255, 255, 0));
    outline: none;
    font-family: "Lucida Console", monospace;
    font-size: inherit;
    resize: none;
    width: 100%;
    box-sizing: border-box;
  }
  :global(.tui-textarea.disabled) {
    background-color: rgb(168, 168, 168);
    color: black;
    cursor: not-allowed;
  }
</style>
