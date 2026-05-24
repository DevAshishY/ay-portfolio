<script setup lang="ts">
// ContactView — uses real contact details from resume
</script>

<template>
  <main class="contact-page">
    <div class="container">
      <h2 class="section-title">Contact</h2>
      <span class="section-underline"></span>

      <div class="contact-grid">
        <!-- Get In Touch -->
        <div class="contact-card">
          <div class="card-header">
            <div class="card-bar"></div>
            <h3 class="card-title">Get In Touch</h3>
          </div>
          <p class="card-desc">Reach out for projects, collaborations, or business inquiries.</p>

          <div class="contact-items">
            <a href="mailto:ashishyadav2758@gmail.com" class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m2 7 10 7 10-7"/>
                </svg>
              </div>
              <div class="contact-info">
                <span class="contact-value">ashishyadav2758@gmail.com</span>
              </div>
            </a>

            <a href="tel:+918826166899" class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17l.92-.08z"/>
                </svg>
              </div>
              <div class="contact-info">
                <span class="contact-value">+91 88261 66899</span>
                <span class="contact-note">Delhi, India – 110096</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Social Links -->
        <div class="contact-card">
          <div class="card-header">
            <div class="card-bar"></div>
            <h3 class="card-title">Social Links</h3>
          </div>
          <p class="card-desc">Connect on LinkedIn or explore projects on GitHub.</p>

          <div class="social-grid">
            <a
              href="https://www.linkedin.com/in/ashishyadav2758/"
              target="_blank"
              class="social-btn social-btn--full"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
              <span class="social-handle">ashishyadav2758</span>
            </a>

            <a
              href="https://github.com/DevAshishY"
              target="_blank"
              class="social-btn social-btn--full"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>GitHub</span>
              <span class="social-handle">DevAshishY</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.contact-card {
  background: var(--bg-card);
  border: 1px solid var(--bg-card-border);
  border-radius: 12px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-bar {
  width: 3px;
  height: 22px;
  background: var(--accent);
  border-radius: 2px;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent);
}

.card-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  line-height: 1.6;
}

/* Contact items */
.contact-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--bg-card-border);
  text-decoration: none;
  transition: border-color 0.2s;
}

.contact-item:hover {
  border-color: rgba(245, 158, 11, 0.3);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-muted);
  flex-shrink: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-value {
  font-size: 0.9rem;
  color: var(--text-primary);
  font-family: var(--font-mono);
}

.contact-note {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

/* Social grid - full-width buttons */
.social-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--bg-card-border);
  color: var(--text-muted);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  transition: border-color 0.2s, color 0.2s;
}

.social-btn:hover {
  border-color: rgba(245, 158, 11, 0.3);
  color: var(--text-primary);
}

.social-handle {
  margin-left: auto;
  font-size: 0.78rem;
  color: var(--text-label);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
