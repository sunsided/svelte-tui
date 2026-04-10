<script lang="ts">
  interface Props {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    onchange?: (e: Event) => void;
  }
  
  let { checked = $bindable(false), disabled = false, label = '', onchange }: Props = $props();
</script>

<label class="tui-checkbox" class:disabled>
  <input type="checkbox" bind:checked {disabled} {onchange} />
  <span></span>
  {label}
</label>

<style>
  :global(.tui-checkbox) {
    display: block;
    position: relative;
    cursor: pointer;
    color: white;
    padding-left: 50px;
    user-select: none;
    font-family: "Lucida Console", monospace;
    font-size: inherit;
  }
  :global(.tui-checkbox.disabled) {
    color: rgb(168, 168, 168);
  }
  :global(.tui-checkbox input) {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    top: 0px;
    left: 0px;
    pointer-events: none;
  }
  :global(.tui-checkbox span) {
    position: absolute;
    width: 30px;
    height: 1em;
    cursor: pointer;
    top: 0px;
    left: 0px;
    white-space: nowrap;
  }
  :global(.tui-checkbox input:checked ~ span::after) {
    content: "[√]";
    color: rgb(0, 255, 255);
  }
  :global(.tui-checkbox input:not(:checked) ~ span::after) {
    content: "[ ]";
  }
</style>
