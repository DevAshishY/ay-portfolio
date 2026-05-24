<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-shell">
    <!-- Viewport glow borders -->
    <div class="glow-top"></div>
    <div class="glow-bottom"></div>
    <div class="glow-left"></div>
    <div class="glow-right"></div>

    <NavBar />
    <RouterView />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #121212;
  --bg-card: rgba(255, 255, 255, 0.02);
  --bg-card-border: rgba(255, 255, 255, 0.08);
  --text-primary: #ffffff;
  --text-muted: #a1a1aa;
  --text-label: #6b7280;
  --accent: #f59e0b;
  --accent-dim: rgba(245, 158, 11, 0.15);
  --purple: #8b5cf6;
  --purple-glow: rgba(139, 92, 246, 0.3);
  --blue-glow: rgba(59, 130, 246, 0.3);
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --max-w: 1100px;
  --section-pad: 100px 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.app-shell {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Viewport neon border glows */
.glow-top,
.glow-bottom,
.glow-left,
.glow-right {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
}

.glow-top {
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--purple), var(--blue-glow), transparent);
  box-shadow: 0 0 20px 4px var(--purple-glow);
}

.glow-bottom {
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--blue-glow), var(--purple), transparent);
  box-shadow: 0 0 20px 4px var(--blue-glow);
}

.glow-left {
  top: 0;
  left: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, transparent, var(--purple), transparent);
  box-shadow: 0 0 20px 4px var(--purple-glow);
}

.glow-right {
  top: 0;
  right: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, transparent, var(--blue-glow), transparent);
  box-shadow: 0 0 20px 4px var(--blue-glow);
}

/* Shared utility */
.container {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 32px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.section-underline {
  display: block;
  width: 48px;
  height: 3px;
  background: var(--accent);
  border-radius: 2px;
  margin: 0 auto 56px;
}
</style>
