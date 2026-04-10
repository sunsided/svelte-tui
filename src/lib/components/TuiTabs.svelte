<script lang="ts">
  import type { Snippet } from 'svelte';
  
  interface Tab {
    id: string;
    label: string;
    disabled?: boolean;
  }
  
  interface Props {
    tabs: Tab[];
    activeTab?: string;
    children: Snippet<[string]>;
  }
  
  let { tabs, activeTab = $bindable(tabs[0]?.id ?? ''), children }: Props = $props();
</script>

<div>
  <div class="tui-tabs">
    <ul>
      {#each tabs as tab}
        <li>
          <button
            class="tui-tab"
            class:active={activeTab === tab.id}
            class:disabled={tab.disabled}
            type="button"
            onclick={() => { if (!tab.disabled) activeTab = tab.id; }}
          >{tab.label}</button>
        </li>
      {/each}
    </ul>
  </div>
  <div class="tui-tab-contents">
    {@render children(activeTab)}
  </div>
</div>

<style>
  :global(.tui-tabs) {
    background-color: var(--tui-tabs-bg, rgb(0, 0, 168));
    width: 100%;
    padding: 0px 10px 0px 10px;
    box-sizing: border-box;
    font-family: "Lucida Console", monospace;
    font-size: 18px;
  }
  :global(.tui-tabs ul) {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  :global(.tui-tabs ul li) {
    display: inline-block;
  }
  :global(.tui-tab) {
    padding: 2px 10px 0px 10px;
    color: rgb(168, 168, 168);
    cursor: pointer;
    display: block;
    background: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
    user-select: none;
  }
  :global(.tui-tab.active) {
    background-color: rgb(168, 168, 168);
    color: rgb(0, 0, 168);
  }
  :global(.tui-tab.disabled) {
    text-decoration: line-through;
    cursor: not-allowed;
  }
</style>
