import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'



import store from './store.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/protected',
      name: 'protected',
      component: () => import('./views/Protected.vue'),
      beforeEnter(to, from, next) {
        if (store.getters.isAuth) {// sprawdzanie czy zalogowany
          next();
        } else {

          alert("Musisz się zalogować");
          next({ name: 'login' });

        }

      }
    },
    {
      path: '/silnik',
      name: 'silnik',
      component: () => import('./views/Usterki/Silnik.vue')
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import('./views/Pracownik/panel.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Pracownik/admin.vue')
    },
    {
      path: '/pracc',
      name: 'pracc',
      component: () => import('./views/Pracownik/pracc.vue')
    },
    {
      path: '/add_silnik',
      name: 'add_silnik',
      component: () => import('./views/Pracownik/add_silnik.vue')
    },

  ]
})
