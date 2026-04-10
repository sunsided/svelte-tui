<script lang="ts">
  interface Props {
    dark?: boolean;
  }
  
  let { dark = false }: Props = $props();
</script>

<hr class:tui-black-divider={dark} class:tui-divider={!dark} />

<style>
  :global(.tui-divider) {
    border-bottom: 2px solid rgb(255, 255, 255);
    display: block;
    border-top: none;
    border-left: none;
    border-right: none;
  }
  :global(.tui-black-divider) {
    border-bottom: 2px solid rgb(0, 0, 0);
    display: block;
    border-top: none;
    border-left: none;
    border-right: none;
  }
</style>
