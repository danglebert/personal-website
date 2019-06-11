<template>
  <div id="app">
    <Heading/>
  </div>
</template>

<script>
// @ is an alias to /src
import Heading from '@/components/Heading.vue';

export default {
  name: 'app',
  components: {
    Heading
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
#nav {
  height: 10%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.home {
  background-image: url('./assets/background.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
