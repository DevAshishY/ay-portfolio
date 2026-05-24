<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const roles = ['AI Frontend Engineer', 'Frontend Lead', 'React / Vue.js Expert', '10+ Years Experience']
const displayedRole = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
let timer: ReturnType<typeof setTimeout>

function typeEffect() {
  const current = roles[roleIndex.value]
  if (!current) return
  if (!isDeleting.value) {
    displayedRole.value = current.slice(0, charIndex.value + 1)
    charIndex.value++
    if (charIndex.value === current.length) {
      isDeleting.value = true
      timer = setTimeout(typeEffect, 1800)
      return
    }
  } else {
    displayedRole.value = current.slice(0, charIndex.value - 1)
    charIndex.value--
    if (charIndex.value === 0) {
      isDeleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
    }
  }
  timer = setTimeout(typeEffect, isDeleting.value ? 60 : 90)
}

onMounted(() => { typeEffect() })
onUnmounted(() => { clearTimeout(timer) })
</script>

<template>
  <section class="hero">
    <div class="container hero-inner">
      <!-- Left: Avatar -->
      <div class="hero-visual">
        <div class="avatar-wrapper">
          <div class="avatar-glow"></div>
          <img src="/ashish-avatar.png" alt="Ashish Kumar" class="avatar-img" />
        </div>
      </div>

      <!-- Right: Bio -->
      <div class="hero-bio">
        <p class="hero-greeting">Hi, I am</p>
        <h1 class="hero-name">Ashish Kumar</h1>
        <p class="hero-role">
          <span>{{ displayedRole }}</span><span class="cursor">|</span>
        </p>

        <div class="hero-meta">
          <div class="meta-item">
            <span class="meta-label">EXPERIENCE</span>
            <span class="meta-value">10+ Years</span>
          </div>
          <div class="meta-divider"></div>
          <div class="meta-item">
            <span class="meta-label">CURRENT ROLE</span>
            <span class="meta-value">Frontend Lead @ BJS</span>
          </div>
        </div>

        <div class="hero-expertise">
          <span class="expertise-label">EXPERTISE</span>
          <p class="expertise-text">
            Solution-driven frontend engineer specialising in React, Next.js,
            and Vue.js. Building scalable, high-performance AI-powered web
            applications with modern UI architecture and design systems.
          </p>
        </div>

        <div class="hero-connect">
          <span class="connect-label">CONNECT</span>
          <div class="social-icons">
            <a
              href="https://www.linkedin.com/in/ashishyadav2758/"
              target="_blank"
              class="social-icon social-linkedin"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/DevAshishY"
              target="_blank"
              class="social-icon social-github"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a
              href="mailto:ashishyadav2758@gmail.com"
              class="social-icon social-email"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}

.hero-greeting {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.hero-name {
  font-size: clamp(2.4rem, 4vw, 3.4rem);
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 14px;
}

.hero-role {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 32px;
  min-height: 2rem;
}

.cursor {
  display: inline-block;
  animation: blink 1s step-end infinite;
  color: var(--accent);
}

@keyframes blink { 50% { opacity: 0; } }

/* Meta row */
.hero-meta {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 28px;
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--text-label);
  font-family: var(--font-mono);
}

.meta-value {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
  font-family: var(--font-mono);
}

.meta-divider {
  width: 1px;
  height: 36px;
  background: rgba(255, 255, 255, 0.15);
}

/* Expertise */
.hero-expertise { margin-bottom: 28px; }

.expertise-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--text-label);
  font-family: var(--font-mono);
  margin-bottom: 8px;
}

.expertise-text {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-muted);
  font-family: var(--font-mono);
  max-width: 480px;
}

/* Connect */
.connect-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--text-label);
  font-family: var(--font-mono);
  margin-bottom: 12px;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
}

.social-icon:hover {
  opacity: 0.85;
  transform: translateY(-2px);
}

.social-linkedin { background: #0077b5; }
.social-github   { background: #333; }
.social-email    { background: #374151; border: 1px solid rgba(255,255,255,0.1); }

/* Avatar */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-wrapper {
  position: relative;
  width: 420px;
  height: 420px;
}

.avatar-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 70%, var(--purple-glow) 0%, transparent 70%);
  filter: blur(40px);
  z-index: 0;
}

.avatar-img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

@media (max-width: 768px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .avatar-wrapper { width: 260px; height: 260px; }
  .hero-meta { justify-content: center; }
  .expertise-text { margin: 0 auto; }
  .social-icons { justify-content: center; }
}
</style>
