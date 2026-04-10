<script lang="ts">
  import TuiButton from '$lib/components/TuiButton.svelte';
  import TuiWindow from '$lib/components/TuiWindow.svelte';
  import TuiInput from '$lib/components/TuiInput.svelte';
  import TuiCheckbox from '$lib/components/TuiCheckbox.svelte';
  import TuiRadio from '$lib/components/TuiRadio.svelte';
  import TuiProgressBar from '$lib/components/TuiProgressBar.svelte';
  import TuiFieldset from '$lib/components/TuiFieldset.svelte';
  import TuiTextarea from '$lib/components/TuiTextarea.svelte';
  import TuiTable from '$lib/components/TuiTable.svelte';
  import TuiDivider from '$lib/components/TuiDivider.svelte';
  import TuiDropdown from '$lib/components/TuiDropdown.svelte';
  import TuiTabs from '$lib/components/TuiTabs.svelte';

  let checked = $state(false);
  let inputVal = $state('Hello TUI');
  let progress = $state(60);
  let radioGroup = $state('');
  
  const tabs = [
    { id: 'buttons', label: 'Buttons' },
    { id: 'inputs', label: 'Inputs' },
    { id: 'layout', label: 'Layout' },
  ];
  let activeTab = $state('buttons');
</script>

<div style="font-family: 'Lucida Console', monospace; font-size: 18px; background: black; color: white; min-height: 100vh; padding: 20px;">
  <h1 style="color: rgb(0, 255, 255);">svelte-tui Component Showcase</h1>
  <p><a href="/turbo-vision" style="color: rgb(0, 255, 255);">→ Turbo Vision Demo</a></p>
  <p><a href="/startup" style="color: rgb(0, 255, 255);">→ BIOS / PC Startup Demo</a></p>
  
  <TuiTabs {tabs} bind:activeTab>
    {#snippet children(active)}
      {#if active === 'buttons'}
        <div style="padding: 20px; background: rgb(0, 0, 168);">
          <h2>Buttons</h2>
          <TuiButton>Click Me</TuiButton>
          &nbsp;
          <TuiButton disabled>Disabled</TuiButton>
          &nbsp;
          <TuiButton onclick={() => alert('Hello!')}>Alert</TuiButton>
        </div>
      {:else if active === 'inputs'}
        <div style="padding: 20px; background: rgb(0, 0, 168);">
          <h2>Form Inputs</h2>
          <p>Text Input:</p>
          <TuiInput bind:value={inputVal} placeholder="Type here..." />
          <p>Value: {inputVal}</p>
          
          <p>Checkbox:</p>
          <TuiCheckbox bind:checked label="Check me" />
          <p>Checked: {checked}</p>
          
          <p>Radio:</p>
          <TuiRadio name="color" value="blue" label="Blue" bind:group={radioGroup} />
          <TuiRadio name="color" value="green" label="Green" bind:group={radioGroup} />
          
          <p>Textarea:</p>
          <TuiTextarea rows={3} cols={30} />
        </div>
      {:else if active === 'layout'}
        <div style="padding: 20px; background: rgb(0, 0, 168);">
          <h2>Layout</h2>
          <TuiFieldset legend="Settings">
            <p>Some settings content</p>
          </TuiFieldset>
          
          <TuiWindow title="My Window">
            <p>Window content goes here</p>
            <TuiProgressBar value={progress} showLabel />
          </TuiWindow>
          
          <TuiDivider />
          
          <TuiTable hovered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Item 1</td><td>100</td></tr>
              <tr><td>Item 2</td><td>200</td></tr>
              <tr><td>Item 3</td><td>300</td></tr>
            </tbody>
          </TuiTable>
          
          <TuiDropdown label="Menu ▼">
            <li><button type="button">Option 1</button></li>
            <li><button type="button">Option 2</button></li>
            <li><button type="button">Option 3</button></li>
          </TuiDropdown>
        </div>
      {/if}
    {/snippet}
  </TuiTabs>
</div>
