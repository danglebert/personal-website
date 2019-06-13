<template>
  <div class="projects-pg">
    <h1>Projects</h1>
    <div class="projects-container">
      <div class="single-proj-cont" v-bind:key="project.id" v-for="project in projects">
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
h1 {
  margin: 0;
  color: white;
  font-size: 4em;
  text-shadow: 2px 2px 7px black;
}
.projects-pg {
  width: 100%;
  background-color: #f1f3f6;
}
.projects-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.single-proj-cont {
  padding: 10px;
}
</style>
