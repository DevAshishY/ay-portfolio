<script setup lang="ts">
import { ref } from 'vue'

interface Role {
  title: string
  points: string[]
}

interface Job {
  period: string
  duration: string
  company: string
  location: string
  roles: Role[]
}

const jobs: Job[] = [
  {
    period: 'APR 2024 – PRESENT',
    duration: '2+ Years',
    company: 'BJS Distribution & Storage & Couriers Pvt. Ltd.',
    location: 'Delhi, India',
    roles: [
      {
        title: 'Frontend Lead',
        points: [
          'Lead frontend architecture using React and modern UI component libraries for scalable web applications.',
          'Mentor frontend developers and conduct code reviews to maintain engineering quality and consistency.',
          'Drive technical decisions, establish coding standards, and improve development workflows across the team.',
          'Implement CI/CD pipelines to support faster, more reliable deployments.',
          'Partner with stakeholders to deliver maintainable, high-performance user experiences aligned with business goals.',
        ],
      },
    ],
  },
  {
    period: 'JAN 2022 – APR 2024',
    duration: '2 years 3 months',
    company: 'J&F India Pvt. Ltd.',
    location: 'Noida',
    roles: [
      {
        title: 'Frontend Developer (React)',
        points: [
          'Built modular and maintainable React applications using reusable component-based architecture.',
          'Collaborated with UX designers and stakeholders to deliver responsive, mobile-first web solutions.',
          'Implemented application state management using Redux for predictable and scalable frontend behavior.',
          'Developed user interfaces optimised for usability, performance, and cross-device consistency.',
          'Translated complex business requirements into clear digital workflows and frontend solutions.',
        ],
      },
    ],
  },
  {
    period: 'SEP 2015 – JUN 2021',
    duration: '5 years 9 months',
    company: 'J&F India Pvt. Ltd.',
    location: 'Noida',
    roles: [
      {
        title: 'Frontend Developer',
        points: [
          'Developed rich, interactive user interfaces using HTML, CSS, and JavaScript.',
          'Delivered 100+ web projects successfully and on schedule across multiple business requirements.',
          'Ensured cross-browser compatibility and improved website performance and usability.',
          'Debugged and resolved frontend issues efficiently across a wide range of projects.',
          'Supported production-ready releases through consistent testing, issue resolution, and optimization.',
        ],
      },
    ],
  },
]

const openRoles = ref<Record<string, boolean>>({})

function toggleRole(key: string) {
  openRoles.value[key] = !openRoles.value[key]
}

function isOpen(key: string): boolean {
  return openRoles.value[key] ?? false
}
</script>

<template>
  <section class="exp-section">
    <div class="container">
      <h2 class="section-title">Work Experience</h2>
      <span class="section-underline"></span>

      <div class="timeline">
        <div v-for="(job, ji) in jobs" :key="ji" class="timeline-row">
          <!-- Left: date -->
          <div class="timeline-date">
            <span class="tl-period">{{ job.period }}</span>
            <span class="tl-duration">{{ job.duration }}</span>
          </div>

          <!-- Dot + line -->
          <div class="timeline-line">
            <div class="tl-dot"></div>
            <div v-if="ji < jobs.length - 1" class="tl-connector"></div>
          </div>

          <!-- Right: details -->
          <div class="timeline-content">
            <h3 class="company-name">{{ job.company }}</h3>
            <span class="company-location">{{ job.location }}</span>

            <div v-for="(role, ri) in job.roles" :key="ri" class="role-block">
              <button
                class="role-toggle"
                @click="toggleRole(`${ji}-${ri}`)"
                :aria-expanded="isOpen(`${ji}-${ri}`)"
              >
                <span class="toggle-arrow">{{ isOpen(`${ji}-${ri}`) ? '∨' : '›' }}</span>
                <span class="role-title">{{ role.title }}</span>
              </button>
              <transition name="accordion">
                <div v-if="isOpen(`${ji}-${ri}`)" class="role-points">
                  <p v-for="(pt, pi) in role.points" :key="pi" class="role-point">{{ pt }}</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.exp-section {
  padding: var(--section-pad);
}

.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-row {
  display: grid;
  grid-template-columns: 220px 40px 1fr;
}

/* Date col */
.timeline-date {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 20px;
  padding-top: 4px;
  gap: 4px;
}

.tl-period {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent);
  font-family: var(--font-mono);
  text-align: right;
}

.tl-duration {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  text-align: right;
}

/* Timeline dot + line */
.timeline-line {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tl-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  margin-top: 6px;
  box-shadow: 0 0 12px var(--accent);
}

.tl-connector {
  flex: 1;
  width: 2px;
  background: rgba(245, 158, 11, 0.3);
  min-height: 60px;
}

/* Content col */
.timeline-content {
  padding-left: 20px;
  padding-bottom: 56px;
}

.company-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.company-location {
  display: block;
  font-size: 0.8rem;
  color: var(--text-label);
  font-family: var(--font-mono);
  margin-bottom: 14px;
}

.role-block {
  margin-bottom: 4px;
}

.role-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  width: 100%;
  text-align: left;
}

.toggle-arrow {
  font-size: 1rem;
  color: var(--accent);
  width: 16px;
  font-family: var(--font-mono);
}

.role-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.role-points {
  margin-top: 10px;
  margin-left: 26px;
  overflow: hidden;
}

.role-point {
  font-size: 0.88rem;
  line-height: 1.75;
  color: var(--text-muted);
  font-family: var(--font-mono);
  margin-bottom: 8px;
  padding-left: 16px;
  border-left: 2px solid rgba(255, 255, 255, 0.07);
}

/* Accordion animation */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.35s ease, opacity 0.25s ease;
  max-height: 800px;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

@media (max-width: 640px) {
  .timeline-row {
    grid-template-columns: 1fr;
    margin-bottom: 32px;
  }
  .timeline-date {
    align-items: flex-start;
    padding-right: 0;
    margin-bottom: 12px;
  }
  .timeline-line { display: none; }
  .timeline-content {
    padding-left: 16px;
    padding-bottom: 0;
    border-left: 2px solid rgba(245, 158, 11, 0.3);
  }
}
</style>
