import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Tables from '@/views/Tables.vue'
import Billing from '@/views/Billing.vue'
import VirtualReality from '@/views/VirtualReality.vue'
import Profile from '@/views/Profile.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import EditPage from '@/views/Edit.vue'

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
  },
  {
    path: '/billing',
    name: 'Billing',
    component: Billing,
  },
  {
    path: '/virtual-reality',
    name: 'Virtual Reality',
    component: VirtualReality,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    component: SignIn,
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: SignUp,
  },
  {
    path: '/edit',
    name: 'Edit',
    component: EditPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})

export default router
