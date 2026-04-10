# svelte-tui

A SvelteKit component library that migrates [TuiCss](https://github.com/vinibiavatti1/TuiCss) to reusable, pluggable and configurable Svelte 5 components. Recreate the retro MS-DOS / Turbo Vision aesthetic in your web apps.

![svelte-tui showcase](https://github.com/user-attachments/assets/c3833f87-8b5a-4dc5-8e38-af52f2425f58)

## Components

| Component        | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `TuiButton`      | Retro-style button with shadow and active state                         |
| `TuiCheckbox`    | ASCII checkbox using `[ ]` / `[√]` characters                           |
| `TuiDivider`     | Horizontal rule (white or black variant)                                |
| `TuiDropdown`    | Hover-activated dropdown menu                                           |
| `TuiFieldset`    | Double-bordered fieldset with optional legend, close/resize buttons     |
| `TuiInput`       | Dark text input that highlights yellow on focus                         |
| `TuiModal`       | Centered modal dialog with overlay and close button                     |
| `TuiNav`         | Fixed top navigation bar                                                |
| `TuiPanel`       | Blue panel with optional header                                         |
| `TuiProgressBar` | Progress bar with optional label / indeterminate mode                   |
| `TuiRadio`       | ASCII radio button using `( )` / `(•)` characters                       |
| `TuiSideNav`     | Slide-in side navigation panel                                          |
| `TuiStatusBar`   | Fixed bottom status bar with shortcut key support                       |
| `TuiTable`       | Table with optional hover and stripe styles                             |
| `TuiTabs`        | Tab strip with active tab slot content                                  |
| `TuiTextarea`    | Yellow-on-inherit resizable textarea                                    |
| `TuiWindow`      | Floating double-border window with TV-style title, close/resize buttons |

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
  import { TuiButton, TuiWindow, TuiInput, TuiModal } from 'svelte-tui';
  let name = $state('');
  let showModal = $state(false);
</script>

<TuiWindow title="Login" closable resizable>
  <TuiInput bind:value={name} placeholder="Username" />
  <TuiButton onclick={() => (showModal = true)}>Login</TuiButton>
</TuiWindow>

<TuiModal bind:open={showModal} title="Welcome">
  <p>Hello, {name}!</p>
  <TuiButton onclick={() => (showModal = false)}>OK</TuiButton>
</TuiModal>
```

A full Turbo Vision desktop demo is available at `/turbo-vision` in the development server.

## Theming

All colors are driven by CSS custom properties defined in `theme.css`. Override them in your own stylesheet to customise the look:

```css
:root {
  --tui-button-bg: rgb(168, 0, 0); /* red buttons */
  --tui-window-bg: rgb(0, 168, 0); /* green windows */
  --tui-nav-bg: rgb(0, 0, 168); /* blue nav bar */
}
```

### Available CSS variables

| Variable                  | Default              | Controls                  |
| ------------------------- | -------------------- | ------------------------- |
| `--tui-button-bg`         | `rgb(0, 168, 0)`     | Button background         |
| `--tui-button-color`      | `black`              | Button text colour        |
| `--tui-button-active-bg`  | `rgb(0, 168, 168)`   | Button active background  |
| `--tui-window-bg`         | `rgb(0, 0, 168)`     | Window background         |
| `--tui-panel-bg`          | `rgb(0, 0, 168)`     | Panel background          |
| `--tui-input-bg`          | `rgb(0, 0, 0)`       | Input background          |
| `--tui-input-color`       | `white`              | Input text colour         |
| `--tui-input-focus-bg`    | `rgb(255, 255, 0)`   | Input focused background  |
| `--tui-textarea-color`    | `rgb(255, 255, 0)`   | Textarea text colour      |
| `--tui-progress-track-bg` | `rgb(0, 168, 168)`   | Progress bar track        |
| `--tui-progress-bg`       | `rgb(0, 255, 255)`   | Progress bar fill         |
| `--tui-nav-bg`            | `rgb(168, 168, 168)` | Navigation bar background |
| `--tui-statusbar-bg`      | `rgb(168, 168, 168)` | Status bar background     |
| `--tui-tabs-bg`           | `rgb(0, 0, 168)`     | Tabs strip background     |
| `--tui-sidenav-bg`        | `rgb(0, 168, 168)`   | Side nav background       |

### `TuiWindow` props

| Prop        | Type         | Default | Description                              |
| ----------- | ------------ | ------- | ---------------------------------------- |
| `title`     | `string`     | —       | Centered legend/title text               |
| `fullWidth` | `boolean`    | `false` | Stretch to 100% width                    |
| `noShadow`  | `boolean`    | `false` | Remove drop shadow                       |
| `closable`  | `boolean`    | `false` | Show close `[■]` button (top-right)      |
| `resizable` | `boolean`    | `false` | Show resize `[↕]` button (top-left)      |
| `onclose`   | `() => void` | —       | Callback fired when close button clicked |

### `TuiFieldset` props

| Prop           | Type         | Default | Description                              |
| -------------- | ------------ | ------- | ---------------------------------------- |
| `legend`       | `string`     | —       | Legend text                              |
| `legendCenter` | `boolean`    | `false` | Center-align the legend                  |
| `closable`     | `boolean`    | `false` | Show close `[■]` button (top-right)      |
| `resizable`    | `boolean`    | `false` | Show resize `[↕]` button (top-left)      |
| `onclose`      | `() => void` | —       | Callback fired when close button clicked |

### `TuiModal` props

| Prop      | Type                 | Default | Description                  |
| --------- | -------------------- | ------- | ---------------------------- |
| `open`    | `boolean` (bindable) | `false` | Whether the modal is visible |
| `title`   | `string`             | —       | Modal window title           |
| `onclose` | `() => void`         | —       | Callback fired on close      |

## Development

This project uses **Yarn** as its package manager. Prefer using task commands over direct `yarn` invocations when available.

```bash
yarn install       # install dependencies
yarn dev           # start showcase app on http://localhost:5173
yarn build         # build library to dist/
yarn check         # type-check with svelte-check
yarn lint          # lint with ESLint + Prettier
yarn test          # run component tests with Vitest
```
