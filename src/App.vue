<template>
  <div id="app">
    <Heading/>
    <About/>
    <Projects/>
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from '@/components/Heading.vue';
import About from '@/components/About.vue';
import Projects from '@/components/Projects/Projects.vue';

export default {
  name: 'app',
  components: {
    Heading,
    About,
    Projects
  }
};
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  color: #2d616e;
}
</style>
