<template>
  <article>
    <el-card
        class="card"
        shadow="hover"
        :body-style="{
          display: 'flex',
          flexDirection: 'column'
        }">
        <figure class="meta">
          <img class="photo" :src="item.image" :alt="item.name">
          <figcaption>
            <h3 class="title" :title="item.name">{{ item.name }}</h3>
          </figcaption>
        </figure>
        <ul class="info">
          <!-- Character info -->
          <template v-if="$route.params.type === 'character'">
            <li><b>Location:</b> {{ item.location.name }}</li>
            <li><b>Species:</b> {{ item.species }}</li>
            <li><b>Status:</b> {{ item.status }}</li>
          </template>

          <!-- Location info -->
          <template v-if="$route.params.type === 'location'">
            <li><b>Name:</b> {{ item.name }}</li>
            <li><b>Dimension:</b> {{ item.dimension }}</li>
            <li><b>Type:</b> {{ item.type }}</li>
          </template>

          <!-- Episode info -->
          <template v-if="$route.params.type === 'episode'">
            <li><b>Episode:</b> {{ item.episode }}</li>
            <li><b>Air date:</b> {{ item.air_date }}</li>
          </template>
        </ul>
        <el-button class="button">See details</el-button>
      </el-card>
  </article>
</template>

<script>
import {
  EPISODE_DEFAULT_IMG,
  LOCATION_DEFAULT_IMG
} from '@/utils/constants';

export default {
  name: 'ListCard',
  props: {
    rawItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    item() {
      const images = {
        character: this.rawItem.image,
        location: LOCATION_DEFAULT_IMG,
        episode: EPISODE_DEFAULT_IMG
      }

      return {
        image: images[this.$route.params.type],
        ...this.rawItem
      }
    }
  }
}
</script>

<style scoped>
.card {
  height: 100%;
}
.card /deep/ .el-card__body {
  height: 100%;
  box-sizing: border-box;
}
.meta {
  margin: -20px -20px 0;
}
.photo {
  display: block;
}
.title {
  margin: 0;
  padding: 15px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border-bottom: 2px solid lightgrey;
}
.info {
  margin: 20px 0;
  padding: 0 0 0 20px;
}
.info li {
  margin-bottom: 10px;
}
.button {
  width: 100%;
  margin-top: auto;
}
</style>