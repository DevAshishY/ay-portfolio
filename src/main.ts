import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 📌 ROUTING NOTES:
// - Router is defined in `src/router/index.ts` using createRouter + createWebHistory
// - Routes map URL paths to Vue components (views)
// - Use <RouterView /> in App.vue to render matched route component
// - Use <RouterLink to="/path"> for navigation (replaces <a href>)
// - Nested routes: define `children` inside a parent route
// - Route params: `/user/:id` → access via `route.params.id`
// - Navigation guards: `router.beforeEach()` for auth/permission checks
// - Lazy loading: `component: () => import('./views/MyView.vue')` for code splitting
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
