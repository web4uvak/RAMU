<template>
  <section class="list-container" v-loading="loading">
    <header class="list-title">
      <el-button
        icon="el-icon-back"
        circle
        @click="$router.go(-1)"></el-button>
      <h2>{{ $route.params.type }}s ({{ info.count }})</h2>
    </header>

    <div class="list">
      <ListCard
        class="list-item"
        v-for="item in list"
        :key="item.id"
        :raw-item="item">
      </ListCard>
    </div>
  </section>
</template>

<script>
import { getData } from '@/api'
import ListCard from '@/components/ListCard'

export default {
  name: 'ListView',
  components: {
    ListCard
  },
  data() {
    return {
      loading: true,
      info: {},
      list: []
    }
  },
  async created() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      const data = await getData(this.$route.params.type);
      this.list = data.results;
      this.info = data.info;
      this.loading = false;
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list-title {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  border-top: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
}
.list-title .el-button {
  margin-right: 15px;
}
.list-item {
  flex: auto;
  max-width: 25%;
  padding: 0 15px;
  margin-bottom: 25px;
  box-sizing: border-box;
}
@media (max-width: 992px) {
  .list-item {
    max-width: 33%;
  }
}
@media (max-width: 768px) {
  .list-item {
    max-width: 50%;
  }
}
@media (max-width: 400px) {
  .list-item {
    max-width: 100%;
  }
}
</style>