import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 📌 ROUTING NOTES:
// - Router is defined in `src/router/index.ts` using createRouter + createWebHistory
// - Routes map URL paths to Vue components (views)
// - Use <RouterView /> in App.vue to render matched route component
// - Use <RouterLink to="/path"> for navigation (replaces <a href>)
// - Nested routes: define `children` inside a parent route
// - Route params: `/user/:id` → access via `route.params.id`
// - Navigation guards: `router.beforeEach()` for auth/permission checks
// - Lazy loading: `component: () => import('./views/MyView.vue')` for code splitting

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
