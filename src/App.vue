<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import { getEpisodes } from '@/api'

export default {
  name: 'App',
  data() {
    return {
      episodes: []
    }
  },
  async mounted() {
    await this.loadData();
    console.log(this.episodes);
  },
  methods: {
    async loadData() {
      const data = await getEpisodes();
      this.episodes = data.results;
    }
  }
}
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
