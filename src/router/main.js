import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Dashboard from '../components/Dashboard'
import NotFound from '../components/NotFound'
import Settings from '../components/Settings'
import Signin from '../components/Signin'
import Signinup from '../components/Signinup'
import MailSignin from '../components/MailSignin'
import GoogleSignin from '../components/GoogleSignin'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: { requiresAuth: true }
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signinup',
      name: 'Signinup',
      component: Signinup
    },
    {
      path: '/mail-signin',
      name: 'MailSignin',
      component: MailSignin
    },
    {
      path: '/google-signin',
      name: 'GoogleSignin',
      component: GoogleSignin
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: {
            redirect: to.fullPath
          }
        })
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})

export default router
