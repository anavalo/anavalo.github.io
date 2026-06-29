# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal portfolio site for Tasos Tsournos at www.tsournos.com. Single-page site styled as a CRT terminal with a green phosphor (dark) / amber phosphor (light) theme. Deployed to GitHub Pages via `nuxt generate` (static HTML export).

## Commands

- `npm run dev` — dev server on localhost:3000 (opens browser automatically)
- `npm run generate` — static build to `.output/public` (symlinked as `dist/`)
- `npm run preview` — preview the generated static build locally

No test runner or linter is configured.

## Architecture

**Nuxt 3** static site with a single page (`pages/index.vue`), one layout (`layouts/default.vue`), and four components (`Card`, `Avatar`, `Button`, `ThemeChoice`).

### Styling

- SCSS with two theme palettes toggled via `@nuxtjs/color-mode` (classes `.dark-mode` / `.light-mode` on `:root`)
- `assets/variables.scss` — CSS custom properties: fonts, color palettes (green/amber), spacing scale
- `assets/mixins.scss` — responsive breakpoint mixins (`phone-small`, `phone`, `tablet`, `desktop`, `portrait`) and typography mixins (`display`, `prompt`, `mono-body`, `mono-label`). Auto-injected into every component via `nuxt.config.ts` `additionalData`.
- `assets/global.scss` — resets, scanline/vignette/flicker CRT effects, global keyframes (`blink`, `type-in`, `crt-flicker`)
- Fonts: VT323 (display headings) and JetBrains Mono (body/UI), loaded from Google Fonts

### CRT Terminal Design

The `Card` component renders a macOS-style terminal window chrome (traffic-light dots, title bar with `tasos@tsournos:~`). The index page content appears inside the terminal "screen" area with a sequential line-by-line boot animation controlled by the `booted` ref and CSS animation delays. The boot animation plays once per session (tracked via `sessionStorage`). All animations respect `prefers-reduced-motion`.

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/nuxtjs.yml`) which runs `nuxt generate` and deploys the `dist/` directory to GitHub Pages. The `CNAME` file maps to `www.tsournos.com`.

## Formatting

Prettier with single quotes, trailing commas (es5), 2-space indent, semicolons.
