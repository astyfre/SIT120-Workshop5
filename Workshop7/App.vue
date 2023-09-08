<template>
  <div>
    <RegistrationForm @user-registered="onUserRegistered" />
    <GreetingMessage :userData="registeredUser" />
  </div>
</template>

<script>

import GreetingMessage from './components/GreetingMessage.vue'
import RegistrationForm from './components/RegistrationForm.vue'

export default {
  components: {
    GreetingMessage,
    RegistrationForm
  },
  data(){
    return{
      registeredUser: null
    };
  },
  methods:{
    onUserRegistered(userData){
      this.registeredUser = userData;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
