<script lang="ts">
  import TuiButton from "./TuiButton.svelte";

  interface Props {
    text: string;
    disabled?: boolean;
    handleClick?: (e: MouseEvent) => void;
  }

  let { text, disabled = false, handleClick }: Props = $props();
</script>

<TuiButton {disabled} onclick={handleClick}>
  {text}
</TuiButton>
