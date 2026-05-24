<script setup lang="ts">
const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    period: 'Completed',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Arts (BA)',
    institution: 'CSJM University, Kanpur',
    period: '2009 – 2012',
    icon: '📜',
  },
]
</script>

<template>
  <section class="education-section">
    <div class="container">
      <h2 class="section-title">Education</h2>
      <span class="section-underline"></span>

      <div class="edu-grid">
        <div v-for="edu in education" :key="edu.degree" class="edu-card">
          <div class="edu-icon">{{ edu.icon }}</div>
          <div class="edu-body">
            <h3 class="edu-degree">{{ edu.degree }}</h3>
            <p class="edu-institution">{{ edu.institution }}</p>
            <span class="edu-period">{{ edu.period }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  padding: var(--section-pad);
}

.edu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.edu-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 28px;
  background: var(--bg-card);
  border: 1px solid var(--bg-card-border);
  border-radius: 12px;
  transition: border-color 0.2s;
}

.edu-card:hover {
  border-color: rgba(245, 158, 11, 0.3);
}

.edu-icon {
  font-size: 2rem;
  flex-shrink: 0;
  line-height: 1;
  margin-top: 2px;
}

.edu-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.edu-degree {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
}

.edu-institution {
  font-size: 0.88rem;
  color: var(--accent);
  font-family: var(--font-mono);
}

.edu-period {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}
</style>
