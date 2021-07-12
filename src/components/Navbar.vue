<template>
 <nav>
   <v-toolbar>
     <v-app-bar-nav-icon @click="onClick()"></v-app-bar-nav-icon>
   <v-toolbar-title class="grey--text">
     <span class="font-weight-light">Baker's</span>
     <span>Towing</span>
     <v-icon></v-icon>
   </v-toolbar-title>
     <v-spacer></v-spacer>
     <v-btn icon v-show="!isLogged" to="/login">
       Login
     </v-btn>
     <v-text-field v-show="searchOn" v-model="search" placeholder="search"></v-text-field>
     <v-btn icon @click="searchOn = !searchOn">
       <v-icon>mdi-magnify</v-icon>
     </v-btn>
     
   </v-toolbar>
   <v-navigation-drawer v-model="toggleNavbar" app class="grey lighten-4">
     <v-list nav rounded>
       <v-list-item link to="/">
         <v-list-item-content>
           <v-list-item-title>Home</v-list-item-title>
         </v-list-item-content>
       </v-list-item>
       <v-list-item link v-show="!isLogged">
         <v-list-item-content>
           <v-list-item-title>About</v-list-item-title>
         </v-list-item-content>
       </v-list-item>
       <v-list-item link v-show="!isLogged">
         <v-list-item-content>
           <v-list-item-title>Contact Us</v-list-item-title>
         </v-list-item-content>
       </v-list-item>
       <v-list-item link v-show="isLogged" to="/vehicles">
         <v-list-item-content>
           <v-list-item-title>Vehicles</v-list-item-title>
         </v-list-item-content>
       </v-list-item>
       <v-list-item link v-show="isAdmin" to="/admin">
         <v-list-item-content>
           <v-list-item-title>Admin</v-list-item-title>
         </v-list-item-content>
       </v-list-item>
       <v-list-item link v-show="isLogged">
         <v-list-item-content>
           <v-list-item-title @click="logout">Logout</v-list-item-title>
         </v-list-item-content>
       </v-list-item>
     </v-list>
   </v-navigation-drawer>
 </nav>
</template>

<script>
import { auth } from '@/firebase'
  export default {
    name: 'Navbar',
    data() {
      return {
        toggleNavbar: false,
        isLogged: false,
        isAdmin: false,
        search: '',
        searchOn: false,
      }
    },
    mounted() {
      if(auth.currentUser){
        this.isLogged = true
        console.log('Is logged in')
      }
    },
    methods: {
      onClick() {
        this.toggleNavbar = !this.toggleNavbar
      },
      logout(){
        auth.signOut().then(() => {
          confirm('Are you sure you want to logout?')
          this.$router.push('/home')
          this.isLogged = false
        })
      },
    }
  }
</script>
