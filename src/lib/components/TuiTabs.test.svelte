<script lang="ts">
  import TuiTabs from "./TuiTabs.svelte";

  interface Tab {
    id: string;
    label: string;
    disabled?: boolean;
  }

  interface Props {
    tabs: Tab[];
    activeTab?: string;
  }

  let { tabs, activeTab }: Props = $props();
  let active = $derived(activeTab || tabs[0]?.id || '');
</script>

<TuiTabs {tabs} bind:activeTab={active}>
  {#snippet children(activeId)}
    Active: {activeId}
  {/snippet}
</TuiTabs>
