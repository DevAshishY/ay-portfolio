<script setup lang="ts">
interface BlogPost {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  cover: string
  link: string
  platform: string
}

const posts: BlogPost[] = [
  {
    title: 'Build Independently. Deploy as NPM. Plug into React.',
    excerpt:
      'How I used Vite to publish frontend feature modules as NPM packages and seamlessly connect them to a central React application — a practical micro-frontend pattern for enterprise teams.',
    date: 'May 24, 2026',
    readTime: '8 min read',
    tags: ['React', 'Vite', 'NPM', 'Architecture', 'JavaScript'],
    cover: '/blog-npm-cover.png',
    link: 'https://medium.com/@ashishyadav2758/how-i-built-a-scalable-npm-package-architecture-with-vite-and-plugged-it-into-a-central-react-app-d900d2def99b',
    platform: 'Medium',
  },
]
</script>

<template>
  <section id="blog" class="blog-section">
    <div class="container">
      <h2 class="section-title">Blog</h2>
      <span class="section-underline"></span>

      <div class="blog-grid">
        <a
          v-for="post in posts"
          :key="post.title"
          :href="post.link"
          target="_blank"
          rel="noopener noreferrer"
          class="blog-card"
        >
          <!-- Cover image -->
          <div class="blog-cover">
            <img :src="post.cover" :alt="post.title" class="cover-img" />
            <span class="platform-badge">{{ post.platform }}</span>
          </div>

          <!-- Content -->
          <div class="blog-body">
            <!-- Tags -->
            <div class="blog-tags">
              <span v-for="tag in post.tags" :key="tag" class="blog-tag">{{ tag }}</span>
            </div>

            <h3 class="blog-title">{{ post.title }}</h3>
            <p class="blog-excerpt">{{ post.excerpt }}</p>

            <div class="blog-meta">
              <span class="meta-date">{{ post.date }}</span>
              <span class="meta-dot">·</span>
              <span class="meta-read">{{ post.readTime }}</span>
              <span class="read-link">Read on Medium →</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-section {
  padding: var(--section-pad);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
}

/* Card */
.blog-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--bg-card-border);
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}

.blog-card:hover {
  transform: translateY(-6px);
  border-color: rgba(245, 158, 11, 0.35);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

/* Cover */
.blog-cover {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.blog-card:hover .cover-img {
  transform: scale(1.04);
}

.platform-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  font-family: var(--font-mono);
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
}

/* Body */
.blog-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  flex: 1;
}

/* Tags */
.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.blog-tag {
  font-size: 0.72rem;
  font-family: var(--font-mono);
  font-weight: 600;
  color: var(--accent);
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.25);
  padding: 2px 10px;
  border-radius: 999px;
}

/* Title */
.blog-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.45;
}

/* Excerpt */
.blog-excerpt {
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--text-muted);
  font-family: var(--font-mono);
  flex: 1;
}

/* Meta row */
.blog-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.meta-date,
.meta-read,
.meta-dot {
  font-size: 0.78rem;
  color: var(--text-label);
  font-family: var(--font-mono);
}

.read-link {
  margin-left: auto;
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--accent);
  font-weight: 600;
  transition: opacity 0.2s;
}

.blog-card:hover .read-link {
  opacity: 0.75;
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
