# svelte-tui

A SvelteKit component library that migrates [TuiCss](https://github.com/vinibiavatti1/TuiCss) to reusable, pluggable and configurable Svelte 5 components. Recreate the retro MS-DOS / Turbo Vision aesthetic in your web apps.

![svelte-tui showcase](https://github.com/user-attachments/assets/c3833f87-8b5a-4dc5-8e38-af52f2425f58)

## Components

| Component | Description |
|-----------|-------------|
| `TuiButton` | Retro-style button with shadow and active state |
| `TuiCheckbox` | ASCII checkbox using `[ ]` / `[√]` characters |
| `TuiDivider` | Horizontal rule (white or black variant) |
| `TuiDropdown` | Hover-activated dropdown menu |
| `TuiFieldset` | Double-bordered fieldset with optional legend |
| `TuiInput` | Dark text input that highlights yellow on focus |
| `TuiNav` | Fixed top navigation bar |
| `TuiPanel` | Blue panel with optional header |
| `TuiProgressBar` | Progress bar with optional label / indeterminate mode |
| `TuiRadio` | ASCII radio button using `( )` / `(•)` characters |
| `TuiSideNav` | Slide-in side navigation panel |
| `TuiStatusBar` | Fixed bottom status bar |
| `TuiTable` | Table with optional hover and stripe styles |
| `TuiTabs` | Tab strip with active tab slot content |
| `TuiTextarea` | Yellow-on-inherit resizable textarea |
| `TuiWindow` | Floating window with title bar and drop shadow |

## Installation

```bash
npm install svelte-tui
```

## Usage

Import the theme CSS once (e.g. in your root layout):

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import 'svelte-tui/theme.css';
</script>
```

Then use any component:

```svelte
<script>
  import { TuiButton, TuiWindow, TuiInput } from 'svelte-tui';
  let name = $state('');
</script>

<TuiWindow title="Login">
  <TuiInput bind:value={name} placeholder="Username" />
  <TuiButton onclick={() => console.log(name)}>Login</TuiButton>
</TuiWindow>
```

## Theming

All colors are driven by CSS custom properties defined in `theme.css`. Override them in your own stylesheet to customise the look:

```css
:root {
  --tui-button-bg: rgb(168, 0, 0);   /* red buttons */
  --tui-window-bg: rgb(0, 168, 0);   /* green windows */
  --tui-nav-bg:    rgb(0, 0, 168);   /* blue nav bar */
}
```

### Available CSS variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--tui-button-bg` | `rgb(0, 168, 0)` | Button background |
| `--tui-button-color` | `black` | Button text colour |
| `--tui-button-active-bg` | `rgb(0, 168, 168)` | Button active background |
| `--tui-window-bg` | `rgb(0, 0, 168)` | Window background |
| `--tui-panel-bg` | `rgb(0, 0, 168)` | Panel background |
| `--tui-input-bg` | `rgb(0, 0, 0)` | Input background |
| `--tui-input-color` | `white` | Input text colour |
| `--tui-input-focus-bg` | `rgb(255, 255, 0)` | Input focused background |
| `--tui-textarea-color` | `rgb(255, 255, 0)` | Textarea text colour |
| `--tui-progress-track-bg` | `rgb(0, 168, 168)` | Progress bar track |
| `--tui-progress-bg` | `rgb(0, 255, 255)` | Progress bar fill |
| `--tui-nav-bg` | `rgb(168, 168, 168)` | Navigation bar background |
| `--tui-statusbar-bg` | `rgb(168, 168, 168)` | Status bar background |
| `--tui-tabs-bg` | `rgb(0, 0, 168)` | Tabs strip background |
| `--tui-sidenav-bg` | `rgb(0, 168, 168)` | Side nav background |

## Development

```bash
npm install
npm run dev        # start showcase app on http://localhost:5173
npm run build      # build library to dist/
npm run check      # type-check with svelte-check
npm run lint       # lint with ESLint + Prettier
```
