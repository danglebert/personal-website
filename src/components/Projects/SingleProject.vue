<template>
  <v-layout class="full-card">
    <a target="_blank" :href="project.link">
      <v-card class="card-content" :hover="true">
        <v-img class="image" v-bind:src="project.image" :contain="true" aspect-ratio="fixed"></v-img>
        <v-divider class="divider"/>
        <v-card-title primary-title>
          <div class="text-content">
            <h3 class="headline mb-0">{{project.name}}</h3>
            <div>{{project.description}}</div>
          </div>
        </v-card-title>
      </v-card>
    </a>
  </v-layout>
</template>

<script>
export default {
  name: 'SingleProject',
  props: ['project']
};
</script>

<style scoped>
.full-card {
  width: 500px;
  border-radius: 10px;
  border: 0.5px solid #999;
  box-shadow: 0.5px 0.5px 10px #999;
}
.card-content {
  border-radius: 10px;
  width: 100%;
}
.image {
  height: 350px;
  width: 100%;
  border: 10px solid white;
}
.divider {
  position: relative;
  z-index: 1;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.15);
}
.text-content {
  width: 100%;
  text-align: center;
  color: #3a5168;
}

@media (max-width: 500px) {
  .full-card {
    width: 365px;
  }
}
</style>
