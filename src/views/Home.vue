<template>
  <section class="home">
    <header class="tite">
      <h1>Welcomse to Rick and Morty UNIVERSE!</h1>
      <p>Choose what you want to know about:</p>
    </header>
    <el-row>
      <el-col :span="8" v-for="item in scheme" :key="item" style="padding: 0 20px">
        <el-card>
          <router-link :to="`/list/${item}`">
            {{ item.toUpperCase() }}
          </router-link>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      scheme: ['character', 'location', 'episode']
    }
  }
}
</script>

<style scoped>
.tite {
  text-align: center;
}
select {
  display: block;
  position: relative;
  font-size: 14px;
  display: inline-block;
  -webkit-appearance: none;
  background-color: #FFF;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
}
select:focus {
  border-color: #409EFF;
}
</style>