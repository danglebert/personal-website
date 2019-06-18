<template>
  <div id="projects">
    <h1>Projects</h1>
    <p>
      Liking this website? Check out the source code
      <a
        target="_blank"
        href="https://github.com/danglebert/personal-website"
      >here</a>.
    </p>
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
  font-size: 4em;
  text-shadow: 1px 1.5px white;
  padding: 20px 0 10px 0;
}
p {
  font-size: 1.1em;
  padding-bottom: 10px;
}
a {
  color: #b63f29;
}
a:hover {
  color: #ef775c;
}

#projects {
  width: 100%;
  background-color: #f1f3f6;
  padding: 15px 5% 0 5%;
  border-top: 1px solid #999;
  box-shadow: 3px 3px 10px #3b3b3b;
}
.projects-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.single-proj-cont {
  padding: 10px 10px 50px 10px;
}

@media (max-width: 750px) {
  .single-proj-cont {
    padding: 5px 0px 20px 0px;
  }
}
</style>
