<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function scrollToBlog() {
  if (route.path === '/') {
    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    })
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-inner">
      <RouterLink to="/" class="nav-brand">ASHISH /></RouterLink>
      <ul class="nav-links">
        <li>
          <RouterLink to="/" :class="{ active: route.path === '/' }">HOME</RouterLink>
        </li>
        <li>
          <a href="#" class="blog-link" @click.prevent="scrollToBlog">BLOG</a>
        </li>
        <li>
          <RouterLink to="/contact" :class="{ active: route.path === '/contact' }">CONTACT</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 0;
}

.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: opacity 0.2s;
}

.nav-brand:hover {
  opacity: 0.8;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 32px;
}

.nav-links a {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--accent);
}

.blog-link {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
}

.blog-link:hover {
  color: var(--accent);
}
</style>
