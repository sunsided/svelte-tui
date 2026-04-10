<script lang="ts">
  interface Props {
    group?: string;
    disabled?: boolean;
    label?: string;
    name?: string;
    value?: string;
    onchange?: (e: Event) => void;
  }
  
  let { group = $bindable(''), disabled = false, label = '', name = '', value = '', onchange }: Props = $props();
</script>

<label class="tui-radio" class:disabled>
  <input type="radio" {name} {value} bind:group {disabled} {onchange} />
  <span></span>
  {label}
</label>

<style>
  :global(.tui-radio) {
    display: block;
    position: relative;
    cursor: pointer;
    color: white;
    padding-left: 30px;
    user-select: none;
    font-family: "Lucida Console", monospace;
  }
  :global(.tui-radio.disabled) {
    color: rgb(168, 168, 168);
  }
  :global(.tui-radio input) {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    top: 0px;
    left: 0px;
    pointer-events: none;
  }
  :global(.tui-radio span) {
    position: absolute;
    width: 10px;
    height: 10px;
    cursor: pointer;
    top: 0px;
    left: 0px;
  }
  :global(.tui-radio input:checked ~ span::after) {
    content: "(•)";
    color: rgb(0, 255, 255);
  }
  :global(.tui-radio input:not(:checked) ~ span::after) {
    content: "( )";
  }
</style>
