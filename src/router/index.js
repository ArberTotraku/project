import {createRouter , createWebHistory} from 'vue-router'


import Home from '../views/Home.vue'
import About from '../views/About.vue'
const router = createRouter(
    {
        history:createWebHistory(),
        routes: [
            {
                path: '/',
                component: Home
            },
            {
                path: '/about',
                component: About
            },
            {
                path: '/team',
                component: () => import('../components/Team.vue')
            },
            
            {
                path: '/weather',
                component: () => import('../components/Weather.vue')
            },
            {
                path: '/contact',
                component: () => import('../components/Contact.vue')
            },
            {
                path: '/todo',
                component: () => import('../components/Todo.vue')
            },
            {
                path: '/location',
                component: () => import('../components/LocationDisplay.vue')
            },
            {
                path: '/budget',
                component: () => import('../components/BudgetTracker.vue')
            },
            {
                path: '/settings',
                component: () => import('../components/Settings.vue')
            }
        ]
    }
)

export default router;