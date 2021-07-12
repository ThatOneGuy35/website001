<template>
  <div class="loginForm">
    
  <v-form>
      <v-container>
          <v-row cols="2"  justify-center>
              <v-col>
                  <v-text-field v-model="username" label="Username" placeholder="username" outlined></v-text-field>
                  <v-text-field v-model="password" label="Password" placeholder="password" outlined></v-text-field>
                  <v-btn @click="login">Login</v-btn>
              </v-col>
          </v-row>
      </v-container>
  </v-form>
  
</div>

</template>

<script>
export default {
    name: 'Login',
    data: function() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
      login() {
        this.$store.dispatch('login', {
          email: this.username,
          password: this.password
        })
      }
    },

}
</script>

<style>
  .loginForm {
    display: flex;
    justify-content: center;
    align-items: center;

  }
</style>

