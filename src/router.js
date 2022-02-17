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
      path: '/chat',
      name: 'chat',
      component: () => import('./views/Chat/chat.vue')
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
      component: () => import('./views/Pracownik/admin.vue'),
      beforeEnter(to, from, next) {
        if (store.getters.isAuth) {// sprawdzanie czy zalogowany
          next();
        } else {

          alert("Musisz się zalogować");
          next({ name: 'panel' });

        }

      }
    },
   

    {
      path: '/pracc',
      name: 'pracc',
      component: () => import('./views/Pracownik/pracc.vue'),
      beforeEnter(to, from, next) {
        if (store.getters.isAuth) {// sprawdzanie czy zalogowany
          next();
        } else {

          alert("Musisz się zalogować");
          next({ name: 'panel' });

        }

      }
    },
    
    {
      path: '/add_silnik',
      name: 'add_silnik',
      component: () => import('./views/Pracownik/add_usterki/add_silnik.vue')
    },
    {
      path: '/add_detailing',
      name: 'add_detailing',
      component: () => import('./views/Pracownik/add_usterki/add_detailing.vue')
    },
    {
      path: '/add_elektronika',
      name: 'add_elektronika',
      component: () => import('./views/Pracownik/add_usterki/add_elektronika.vue')
    },
    {
      path: '/add_uklad',
      name: 'add_uklad',
      component: () => import('./views/Pracownik/add_usterki/add_uklad.vue')
    },
    {
      path: '/add_zawieszenie',
      name: 'add_zawieszenie',
      component: () => import('./views/Pracownik/add_usterki/add_zawieszenie.vue')
    },

   
    {
      path: '/auto_detailing',
      name: 'auto_detailing',
      component: () => import('./views/Usterki/auto_detailing.vue')
    },

    {
      path: '/zawieszenie',
      name: 'zawieszenie',
      component: () => import('./views/Usterki/Zawieszenie.vue')
    },
    {
      path: '/uklad',
      name: 'uklad',
      component: () => import('./views/Usterki/Uklad.vue')
    },

    {
      path: '/elektronika',
      name: 'elektronika',
      component: () => import('./views/Usterki/Elektronika.vue')
    },

    {
      path: '/logowanie_admin',
      name: 'logowanie_admin',
      component: () => import('./views/Pracownik/logowanie_admin.vue')
    },

    {
      path: '/logowanie_pracownik',
      name: 'logowanie_pracownik',
      component: () => import('./views/Pracownik/logowanie_pracownik.vue')
    },

    {
      path: '/odpowiedz',
      name: 'odpowiedz',
      component: () => import('./views/Pracownik/odpowiedz.vue')
    },
    

    {
      path: '/silnik_accept',
      name: 'silnik_accept',
      component: () => import('./views/accept/silnik_accept.vue')
    },

    {
      path: '/przekierwoanie',
      name: 'przekierwoanie',
      component: () => import('./views/Pracownik/przekierwoanie.vue')
    },

    {
      path: '/przekierwoanie_2',
      name: 'przekierwoanie_2',
      component: () => import('./views/Pracownik/przekierwoanie_2.vue')
    },
    {
      path: '/detailing_accept',
      name: 'detailing_accept',
      component: () => import('./views/accept/detailing_accept.vue'),
      beforeEnter(to, from, next) {
        if (store.getters.isAuth) {// sprawdzanie czy zalogowany
          next();
        } else {

          alert("Musisz się zalogować");
          next({ name: 'panel' });

        }

      }
    },

    {
      path: '/detailing_accept',
      name: 'detailing_accept',
      component: () => import('./views/accept/detailing_accept.vue'),
      beforeEnter(to, from, next) {
        if (store.getters.isAuth) {// sprawdzanie czy zalogowany
          next();
        } else {

          alert("Musisz się zalogować");
          next({ name: 'panel' });

        }

      }
    },

    {
      path: '/elektronika_accept',
      name: 'elektronika_accept',
      component: () => import('./views/accept/elektronika_accept.vue'),
      beforeEnter(to, from, next) {
        if (store.getters.isAuth) {// sprawdzanie czy zalogowany
          next();
        } else {

          alert("Musisz się zalogować");
          next({ name: 'panel' });

        }

      }
    },

    {
      path: '/uklad_accept',
      name: 'uklad_accept',
      component: () => import('./views/accept/uklad_accept.vue'),
      beforeEnter(to, from, next) {
        if (store.getters.isAuth) {// sprawdzanie czy zalogowany
          next();
        } else {

          alert("Musisz się zalogować");
          next({ name: 'panel' });

        }

      }
    },

    {
      path: '/zawieszenie_accept',
      name: 'zawieszenie_accept',
      component: () => import('./views/accept/zawieszenie_accept.vue'),
      beforeEnter(to, from, next) {
        if (store.getters.isAuth) {// sprawdzanie czy zalogowany
          next();
        } else {

          alert("Musisz się zalogować");
          next({ name: 'panel' });

        }

      }
    },

    {
      path: '/admin_pracownicy',
      name: 'admin_pracownicy',
      component: () => import('./views/admin/admin_pracownicy.vue'),
      beforeEnter(to, from, next) {
        if (store.getters.isAuth) {// sprawdzanie czy zalogowany
          next();
        } else {

          alert("Musisz się zalogować");
          next({ name: 'panel' });

        }

      }
    },

    {
      path: '/admin_uzytkownicy',
      name: 'admin_uzytkownicy',
      component: () => import('./views/admin/admin_uzytkownicy.vue'),
      beforeEnter(to, from, next) {
        if (store.getters.isAuth) {// sprawdzanie czy zalogowany
          next();
        } else {

          alert("Musisz się zalogować");
          next({ name: 'panel' });

        }

      }
    },
    

  ]
})
