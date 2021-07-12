import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '@/firebase'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import Vehicles from '@/views/Vehicles.vue'
import Admin from '@/views/Admin.vue'
import Vehicle from '@/views/Vehicle.vue'
import editVehicle from '@/views/edit-vehicle.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: "About"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "Login"
    }
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: Vehicles,
    meta: {
      title: "Vehicles",
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'Admin,',
    component: Admin,
    meta: {
      title: "Admin",
      requiresAuthAdmin: true
    }
  },
  {
    path: '/vehicle/:vehicle_id',
    name: 'view-vehicle',
    component: Vehicle,
    meta: {
      title: "Vehicle",
      requiresAuth: true
    }
  },
  {
  path: '/edit_vehicle/:vehicle_id',
  name: 'editVehicle',
  component: editVehicle,
  meta: {
    title: "edit-vehicle",
    requiresAuthAdmin: true
  }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
    }
   else {
    next() // make sure to always call next()!
  }
})




export default router
