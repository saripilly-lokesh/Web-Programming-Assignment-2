<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4" >
    <a class='navbar-brand' href="/">AXIOS CRUD Operations</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/employee-create">CREATE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/employee-read">READ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/employee-update">UPDATE</a> 
        </li>
        <li class="nav-item">
          <a class='nav-link' href="/employee-delete">DELETE</a>
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
</style>
