<template>
  <div id="app">
    <Navigator/>
    <Heading/>
    <About/>
    <Projects/>
    <Contact/>
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from '@/components/Heading.vue';
import About from '@/components/About.vue';
import Projects from '@/components/Projects/Projects.vue';
import Contact from '@/components/Contact.vue';
import Navigator from '@/components/Navigator.vue';

export default {
  name: 'app',
  components: {
    Heading,
    About,
    Projects,
    Contact,
    Navigator
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
a {
  text-decoration: none;
  color: inherit;
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
