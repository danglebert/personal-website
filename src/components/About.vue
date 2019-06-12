<template>
  <div class="container">
    <h1>About Me / Resume</h1>
    <div id="img-and-desc">
      <img src="../assets/headshot.jpg">
      <p class="text">
        I am Dan Gilbert, a Software Engineer currently based in New York. I have knowledge in both front and backend technologies and development practices. My technical strengths include
        <span
          style="color: #b63f29"
        >JavaScript, Node, Express, React, Redux, React-Native, Vue, SQL, Sequelize</span> and much more. Besides engineering, I love sports, music, fishing, and building custom computers!
      </p>
    </div>
    <Resume/>
  </div>
</template>

<script>
import Resume from './Resume/Resume';
export default {
  name: 'About',
  components: {
    Resume
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 80%;
  margin: auto;
  margin-top: 15px;
}
h1 {
  margin: 0;
  color: white;
  font-size: 4em;
  text-shadow: 2px 2px 7px black;
}
#img-and-desc {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
}

.text {
  margin: 15px;
  font-size: 1.5em;
  width: 70%;
}

img {
  height: 300px;
  width: 300px;
  border-radius: 200px;
  box-shadow: 0 0 8px black;
}
</style>
