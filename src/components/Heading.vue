<template>
  <div class="heading">
    <h1>Dan Gilbert</h1>
    <h3>Full Stack Software Engineer</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 0;
  color: white;
  font-size: 4em;
  text-shadow: 2px 2px #ff0000;
}
h3 {
  margin: 0;
  font-size: 2em;
  text-shadow: 1px 1px white;
}

.heading {
  background-image: url('../assets/background.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
