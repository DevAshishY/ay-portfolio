<script setup lang="ts">
// Skills data from real resume + Vue stack requested by user
const skills = {
  'FRONT END': [
    { name: 'HTML5',       color: '#e34f26' },
    { name: 'CSS3',        color: '#264de4' },
    { name: 'JavaScript',  color: '#f7df1e' },
    { name: 'TypeScript',  color: '#3178c6' },
    { name: 'React',       color: '#61dafb' },
    { name: 'Next.js',     color: '#ffffff' },
    { name: 'Angular',     color: '#dd0031' },
    { name: 'Redux',       color: '#764abc' },
    { name: 'SCSS',        color: '#cd6799' },
    { name: 'Responsive Design', color: '#06b6d4' },
  ],
  'VUE STACK': [
    { name: 'Vue.js',  color: '#42b883' },
    { name: 'Nuxt.js', color: '#00dc82' },
    { name: 'Pinia',   color: '#ffd859' },
    { name: 'VueX',    color: '#42b883' },
  ],
  'BACK END': [
    { name: 'Node.js',  color: '#339933' },
    { name: 'Express',  color: '#aaaaaa' },
    { name: 'Python',   color: '#3776ab' },
    { name: 'MySQL',    color: '#4479a1' },
    { name: 'MongoDB',  color: '#47a248' },
  ],
  'TOOLS & DELIVERY': [
    { name: 'Git',                    color: '#f05032' },
    { name: 'Bitbucket',              color: '#2684ff' },
    { name: 'NPM Architecture',       color: '#cb3837' },
    { name: 'CI/CD',                  color: '#22c55e' },
    { name: 'Agile',                  color: '#f59e0b' },
    { name: 'Scrum',                  color: '#f59e0b' },
    { name: 'Code Review',            color: '#8b5cf6' },
    { name: 'Adobe Photoshop',        color: '#31a8ff' },
    { name: 'Technical Mentorship',   color: '#ec4899' },
  ],
  'AI TOOLS': [
    { name: 'Antigravity',      color: '#a855f7' },
    { name: 'Cursor',           color: '#ffffff' },
    { name: 'OnUp AI',          color: '#f97316' },
    { name: 'GitHub Copilot',   color: '#24292e' },
    { name: 'ChatGPT',          color: '#10a37f' },
    { name: 'Claude',           color: '#d97706' },
    { name: 'v0 by Vercel',     color: '#000000' },
  ],
}

const courses = [
  { title: 'Generative AI for Developers',       provider: 'Google Cloud Skills Boost',     tag: 'AI / ML',         color: '#4285f4' },
  { title: 'Prompt Engineering for Developers',  provider: 'DeepLearning.AI & OpenAI',      tag: 'AI Tools',        color: '#10a37f' },
  { title: 'AI-Powered Frontend Development',    provider: 'Frontend Masters',              tag: 'Frontend + AI',   color: '#cc0000' },
  { title: 'Building AI Applications with React',provider: 'Vercel / Next.js Community',    tag: 'React + AI',      color: '#ffffff' },
  { title: 'GitHub Copilot for Engineers',       provider: 'GitHub Learning Lab',           tag: 'AI Tools',        color: '#24292e' },
  { title: 'Intro to Large Language Models',     provider: 'Google via Coursera',           tag: 'LLM Fundamentals',color: '#ea4335' },
]
</script>

<template>
  <section class="skills-section">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <span class="section-underline"></span>

      <div class="skill-groups">
        <div v-for="(items, category) in skills" :key="category" class="skill-group">
          <div class="group-header">
            <div class="group-bar"></div>
            <span class="group-title">{{ category }}</span>
          </div>
          <div class="skill-pills">
            <div v-for="skill in items" :key="skill.name" class="skill-pill">
              <span class="skill-dot" :style="{ background: skill.color }"></span>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- AI & Frontend Courses -->
      <div class="courses-header">
        <div class="group-bar"></div>
        <h3 class="courses-title">AI &amp; Frontend Courses</h3>
      </div>
      <div class="courses-grid">
        <div v-for="course in courses" :key="course.title" class="course-card">
          <div
            class="course-tag"
            :style="{ background: course.color + '22', color: course.color, borderColor: course.color + '44' }"
          >{{ course.tag }}</div>
          <h4 class="course-title">{{ course.title }}</h4>
          <p class="course-provider">{{ course.provider }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: var(--section-pad);
}

.skill-groups {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.skill-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.group-header {
  display: flex;
  align-items: center;
  gap: 14px;
}

.group-bar {
  width: 4px;
  height: 26px;
  background: var(--accent);
  border-radius: 2px;
}

.group-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.08em;
  font-family: var(--font-mono);
}

.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid var(--bg-card-border);
  border-radius: 999px;
  background: var(--bg-card);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-primary);
  transition: border-color 0.2s, background 0.2s;
  cursor: default;
}

.skill-pill:hover {
  border-color: rgba(245, 158, 11, 0.3);
  background: rgba(245, 158, 11, 0.05);
}

.skill-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.skill-name {
  color: var(--text-muted);
}

/* ── AI & Frontend Courses ── */
.courses-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 56px;
  margin-bottom: 24px;
}

.courses-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.08em;
  font-family: var(--font-mono);
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.course-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 22px;
  background: var(--bg-card);
  border: 1px solid var(--bg-card-border);
  border-radius: 10px;
  transition: border-color 0.2s, transform 0.2s;
}

.course-card:hover {
  border-color: rgba(245, 158, 11, 0.25);
  transform: translateY(-2px);
}

.course-tag {
  align-self: flex-start;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid;
  font-family: var(--font-mono);
}

.course-title {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
}

.course-provider {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}
</style>
