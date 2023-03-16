import CounterBody from "../views/CounterBody.vue";
import NotFound from "../views/NotFound.vue";
import HomeComp from "../components/HomeComp.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
     {
        path: '/',
        name: 'Home',
        component: HomeComp
      },
      {
        path: '/counter',
        name: 'CounterBody',
        component: CounterBody
      },
      {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
      }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;