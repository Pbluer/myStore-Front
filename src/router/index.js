import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/cadastro',
    name:'Cadastro',
    component: () => import('@/views/Home/CadastroView.vue')
  },
  {
    path:'/detalhe/:id',
    name:'detalhe',
    component: () => import('@/views/Detalhe/detalheView.vue')
  }
/*   {
    path: '/about',
    name: 'about',   
    component: () => import('../views/AboutView.vue')
  } */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
