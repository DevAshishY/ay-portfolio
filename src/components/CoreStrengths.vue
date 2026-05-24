<script setup lang="ts">
// CoreStrengths highlights UI expertise as the primary speciality
const strengths = [
  {
    icon: '🎨',
    title: 'UI / UX Engineering',
    tag: 'PRIMARY STRENGTH',
    tagColor: '#f59e0b',
    description:
      '10+ years crafting pixel-perfect, accessible, and delightful user interfaces across 100+ web projects. Deep expertise in responsive layouts, design systems, interaction design, component libraries, and cross-browser consistency. Fluent in translating Figma/Adobe XD designs into flawless production UI.',
    highlights: [
      '100+ production web projects delivered',
      'Design-to-code with zero compromise on fidelity',
      'Reusable component & design system architecture',
      'Accessibility (WCAG) & cross-browser expertise',
    ],
    featured: true,
  },
  {
    icon: '⚡',
    title: 'Performance Optimisation',
    tag: 'SPECIALITY',
    tagColor: '#22c55e',
    description:
      'Expert in frontend performance — code splitting, lazy loading, bundle analysis, Core Web Vitals, and critical rendering path optimisation.',
    highlights: [],
    featured: false,
  },
  {
    icon: '🏗️',
    title: 'Scalable Architecture',
    tag: 'SPECIALITY',
    tagColor: '#3b82f6',
    description:
      'Proven track record building scalable micro-frontend systems and leading technical decisions on React & Vue.js architectures for enterprise platforms.',
    highlights: [],
    featured: false,
  },
  {
    icon: '🤖',
    title: 'AI-Powered Development',
    tag: 'GROWING EDGE',
    tagColor: '#a855f7',
    description:
      'Daily user of Antigravity, Cursor, OnUp AI, GitHub Copilot and ChatGPT to accelerate UI development, code reviews, and prototype generation.',
    highlights: [],
    featured: false,
  },
  {
    icon: '👥',
    title: 'Team Leadership',
    tag: 'LEADERSHIP',
    tagColor: '#ec4899',
    description:
      'Frontend Lead at BJS — mentoring developers, establishing coding standards, conducting code reviews, and driving engineering quality across the team.',
    highlights: [],
    featured: false,
  },
]
</script>

<template>
  <section class="strengths-section">
    <div class="container">
      <h2 class="section-title">Core Strengths</h2>
      <span class="section-underline"></span>

      <!-- Featured UI card — full width, accented -->
      <div class="featured-card">
        <div class="featured-left">
          <div class="featured-icon">🎨</div>
          <div class="featured-meta">
            <span class="featured-tag">PRIMARY STRENGTH</span>
            <h3 class="featured-title">UI / UX Engineering</h3>
            <p class="featured-desc">
              10+ years crafting pixel-perfect, accessible, and delightful user interfaces
              across 100+ web projects. Deep expertise in responsive layouts, design systems,
              interaction design, component libraries, and cross-browser precision.
              Fluent in translating Figma & Adobe Photoshop designs into flawless production UI.
            </p>
          </div>
        </div>
        <div class="featured-right">
          <div class="highlights-label">KEY HIGHLIGHTS</div>
          <ul class="highlights-list">
            <li class="highlight-item">
              <span class="hi-dot"></span>
              <span>100+ production web projects delivered on time</span>
            </li>
            <li class="highlight-item">
              <span class="hi-dot"></span>
              <span>NPM package architecture — published reusable libraries for Angular &amp; React</span>
            </li>
            <li class="highlight-item">
              <span class="hi-dot"></span>
              <span>Design-to-code with zero compromise on fidelity</span>
            </li>
            <li class="highlight-item">
              <span class="hi-dot"></span>
              <span>Reusable component &amp; design system architecture</span>
            </li>
            <li class="highlight-item">
              <span class="hi-dot"></span>
              <span>Accessibility (WCAG) and cross-browser mastery</span>
            </li>
            <li class="highlight-item">
              <span class="hi-dot"></span>
              <span>Strong grasp of Adobe Photoshop for design collaboration</span>
            </li>
          </ul>
        </div>
        <!-- Decorative glow -->
        <div class="featured-glow"></div>
      </div>

      <!-- Other strength cards grid -->
      <div class="strength-grid">
        <div
          v-for="s in strengths.filter(x => !x.featured)"
          :key="s.title"
          class="strength-card"
        >
          <div class="sc-top">
            <span class="sc-icon">{{ s.icon }}</span>
            <span class="sc-tag" :style="{ color: s.tagColor, borderColor: s.tagColor + '44', background: s.tagColor + '11' }">
              {{ s.tag }}
            </span>
          </div>
          <h4 class="sc-title">{{ s.title }}</h4>
          <p class="sc-desc">{{ s.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.strengths-section {
  padding: var(--section-pad);
}

/* ─── Featured UI Card ─── */
.featured-card {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 40px 44px;
  border: 1px solid rgba(245, 158, 11, 0.35);
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    rgba(245, 158, 11, 0.06) 0%,
    rgba(139, 92, 246, 0.04) 100%
  );
  margin-bottom: 24px;
  overflow: hidden;
}

.featured-glow {
  position: absolute;
  top: -60px;
  left: -60px;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.featured-left {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.featured-icon {
  font-size: 2.8rem;
  line-height: 1;
}

.featured-meta {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.featured-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--accent);
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.35);
  padding: 3px 12px;
  border-radius: 999px;
  font-family: var(--font-mono);
  align-self: flex-start;
}

.featured-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.featured-desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

/* Right highlights */
.featured-right {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  padding-left: 40px;
}

.highlights-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-label);
  font-family: var(--font-mono);
}

.highlights-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.88rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  line-height: 1.5;
}

.hi-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  margin-top: 6px;
  box-shadow: 0 0 6px var(--accent);
}

/* ─── Other cards ─── */
.strength-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.strength-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 26px;
  background: var(--bg-card);
  border: 1px solid var(--bg-card-border);
  border-radius: 12px;
  transition: border-color 0.2s, transform 0.2s;
}

.strength-card:hover {
  border-color: rgba(245, 158, 11, 0.2);
  transform: translateY(-2px);
}

.sc-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sc-icon {
  font-size: 1.6rem;
  line-height: 1;
}

.sc-tag {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 2px 10px;
  border-radius: 999px;
  border: 1px solid;
  font-family: var(--font-mono);
}

.sc-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
}

.sc-desc {
  font-size: 0.84rem;
  line-height: 1.7;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

@media (max-width: 768px) {
  .featured-card {
    grid-template-columns: 1fr;
    padding: 28px 24px;
  }
  .featured-right {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-left: 0;
    padding-top: 24px;
  }
}
</style>
