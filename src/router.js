import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./components/Home')
const Template = () => import('./components/Template')
const TOS  = () => import('./components/TOS')
const News = () => import('./components/News')

const Login = () => import('./components/Login')
const Register = () => import('./components/Register')
const Activate = () => import('./components/Activate')
const LostPassword = () => import('./components/LostPassword')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: "home", component: Home },
        { path: '/template', name: "template", component: Template },
        { path: '/tos', name: "tos", component: TOS },
        { path: '/news', name: "news", component: News },
        { path: '/login', name: "login", component: Login },
        { path: '/register', name: "register", component: Register },
        { path: '/activate', name: "activate", component: Activate },
        { path: '/lost-password', name: "lost-password", component: LostPassword }
    ],
})

export default router