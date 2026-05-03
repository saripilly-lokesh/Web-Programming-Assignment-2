<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4" >
    <a class='navbar-brand' href="/">AXIOS CRUD Operations</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">HOME</router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link" to="/employee-create">CREATE</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/employee-read">READ</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/employee-update">UPDATE</router-link>
        </li>
        <li class="nav-item">
          <router-link class='nav-link' to="/employee-delete">DELETE</router-link>
        </li>
      </ul>
    </div> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar-nav .router-link-exact-active{
  font-weight:bold;
  color:rgb(223, 222, 222);
}
</style>
