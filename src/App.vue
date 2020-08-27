<template>
  <div id="app">
    <el-container class="wrapper">
      <el-header height="auto">
        <router-link class="logo" to="/">
          <img src="./assets/logo.jpg" alt="">
        </router-link>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.logo {
  display: block;
  max-width: 150px;
  margin: 0 auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
olor: #2c3e50;
  margin-top: 60px;
}
</style>
