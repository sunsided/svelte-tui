<script lang="ts">
  interface Props {
    value?: number;
    max?: number;
    indeterminate?: boolean;
    showLabel?: boolean;
  }
  
  let { value = 0, max = 100, indeterminate = false, showLabel = false }: Props = $props();
  
  let percentage = $derived(Math.min(100, Math.max(0, (value / max) * 100)));
</script>

<div class="tui-progress-bar">
  {#if indeterminate}
    <div class="tui-indeterminate"></div>
  {:else}
    <div class="tui-progress" style="width: {percentage}%"></div>
  {/if}
  {#if showLabel && !indeterminate}
    <span class="tui-progress-label">{Math.round(percentage)}%</span>
  {/if}
</div>

<style>
  :global(.tui-progress-bar) {
    display: block;
    position: relative;
    height: 20px;
    width: 200px;
    background-color: var(--tui-progress-track-bg, rgb(0, 168, 168));
    overflow: hidden;
  }
  :global(.tui-progress) {
    position: absolute;
    left: 0px;
    background-color: var(--tui-progress-bg, rgb(0, 255, 255));
    height: 100%;
    display: inline-block;
  }
  :global(.tui-indeterminate) {
    position: absolute;
    left: 0px;
    background-color: var(--tui-progress-bg, rgb(0, 255, 255));
    height: 20px;
    width: 20px;
    display: inline-block;
    animation: indeterminate 1s backwards infinite linear;
  }
  :global(.tui-progress-label) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
  }
  @keyframes indeterminate {
    from { margin-left: -10%; }
    to { margin-left: 100%; }
  }
</style>
