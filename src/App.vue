<template>
  <div class="navbar">
    <NavBar title="Tally World" />
    <div class="routing">
      <router-link to="/">Home</router-link>
      <router-link to="/counter">Counter</router-link>
      <router-link to="/notfound">NotFound</router-link>
    </div>
  </div>
  <router-view />
  <FooterComp footer="Copyright Odufejo Ufoma Ibukunoluwa" />
</template>

<script>
import NavBar from './components/NavBar'
import FooterComp from './components/FooterComp';
import store from './store/index'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp},
  provide() {
    return {
      store
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #313866;
}
.routing {
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  margin: 20px 0;
  
}
a {
  text-decoration: none;
  font-weight: 900;
  color: #fff;
}
</style>
