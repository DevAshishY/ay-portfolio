<script setup lang="ts">
interface Project {
  num: string
  name: string
  description: string
  tech: string[]
  link: string
  bg: string
}

const projects: Project[] = [
  {
    num: '01',
    name: 'DMS Portal',
    description:
      'Large-scale Distribution Management System built as micro-frontend modules at BJS Distribution. Covers HR management, driver fines, leave management, payroll generation, order tracking, invoicing and more — serving 400+ internal users daily.',
    tech: ['React', 'TypeScript', 'Ant Design', 'Python', 'FastAPI', 'MySQL', 'Redux'],
    link: 'https://dms.bjshomedelivery.com/',
    bg: '#3b0764',
  },
  {
    num: '02',
    name: 'J&F India — jf.ag',
    description:
      'Built and maintained the corporate web platform for J&F India Pvt. Ltd. — a global BIM & structural engineering company with 400+ engineers across 5 international offices and 1,000+ reference projects. Delivered a responsive, multi-language (English/Deutsch) frontend with service showcases, project portfolios, and lead generation flows.',
    tech: ['Angular', 'TypeScript', 'JavaScript', 'CSS3', 'Redux'],
    link: 'https://www.jf.ag/',
    bg: '#0a1628',
  },
  {
    num: '03',
    name: 'E-Commerce Dashboard',
    description:
      'Full-featured admin dashboard for an online store with real-time sales analytics, inventory management, order processing, and customer management modules.',
    tech: ['Vue.js', 'Pinia', 'Node.js', 'MongoDB', 'Chart.js'],
    link: '#',
    bg: '#052e16',
  },
  {
    num: '04',
    name: 'Task Management App',
    description:
      'A collaborative project management tool with kanban boards, task assignments, due dates, priority labels, and team activity feeds built with real-time sync.',
    tech: ['Vue.js', 'WebSocket', 'Node.js', 'PostgreSQL'],
    link: '#',
    bg: '#0c1a2e',
  },
]

function getTechColor(tech: string): string {
  const map: Record<string, string> = {
    'Vue.js':      '#42b883',
    'React':       '#61dafb',
    'Angular':     '#dd0031',
    'Next.js':     '#ffffff',
    'JavaScript':  '#f7df1e',
    'TypeScript':  '#3178c6',
    'CSS3':        '#264de4',
    'Redux':       '#764abc',
    'Ant Design':  '#1677ff',
    'Python':      '#3776ab',
    'FastAPI':     '#009688',
    'Pinia':       '#ffd859',
    'Node.js':     '#339933',
    'Express':     '#aaaaaa',
    'MongoDB':     '#47a248',
    'MySQL':       '#4479a1',
    'PostgreSQL':  '#336791',
    'Chart.js':    '#ff6384',
    'WebSocket':   '#f59e0b',
  }
  return map[tech] || '#6b7280'
}
</script>

<template>
  <section class="projects-section">
    <div class="container">
      <h2 class="section-title">My Work</h2>
      <span class="section-underline"></span>

      <div class="projects-list">
        <div
          v-for="(project, i) in projects"
          :key="project.num"
          class="project-row"
          :class="{ 'project-row--reverse': i % 2 === 1 }"
        >
          <!-- Mock image -->
          <div class="project-visual" :style="{ background: project.bg }">
            <span class="project-label">{{ project.name.toUpperCase() }}</span>
          </div>

          <!-- Details -->
          <div class="project-details">
            <span class="project-num">{{ project.num }}</span>
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            <div class="tech-list">
              <span
                v-for="t in project.tech"
                :key="t"
                class="tech-badge"
                :style="{ '--tc': getTechColor(t) }"
              >{{ t }}</span>
            </div>
            <a :href="project.link" class="project-link">View project →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: var(--section-pad);
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.project-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 60px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;
}

.project-row:last-child {
  border-bottom: none;
}

.project-row--reverse {
  direction: rtl;
}

.project-row--reverse > * {
  direction: ltr;
}

/* Visual */
.project-visual {
  border-radius: 12px;
  aspect-ratio: 16/10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.project-label {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.5);
  font-family: var(--font-mono);
}

/* Number watermark */
.project-num {
  position: absolute;
  font-size: 6rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.04);
  right: 0;
  top: -16px;
  font-family: var(--font-sans);
  line-height: 1;
  pointer-events: none;
}

/* Details */
.project-details {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.project-desc {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
  padding: 4px 0;
}

.tech-badge::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--tc, #6b7280);
}

.project-link {
  font-size: 0.9rem;
  color: var(--text-muted);
  text-decoration: none;
  font-family: var(--font-mono);
  transition: color 0.2s;
  align-self: flex-start;
}

.project-link:hover {
  color: var(--accent);
}

@media (max-width: 768px) {
  .project-row {
    grid-template-columns: 1fr;
    gap: 24px;
    direction: ltr;
  }
  .project-row--reverse {
    direction: ltr;
  }
}
</style>
