<template>
  <div class="projects-pg">
    <h1>Projects</h1>
    <div class="projects-container">
      <div v-bind:key="project.id" v-for="project in projects">
        <SingleProject v-bind:project="project"/>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from './SingleProject';
import { projects } from '../../data/resume';
export default {
  name: 'Projects',
  components: {
    SingleProject
  },
  data: function() {
    return {
      projects
    };
  }
};
</script>

<style scoped>
.card {
  width: 300px;
}
.image {
  height: 300px;
}
</style>
