<template>
  <div id="about">
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

<style scoped>
#about {
  padding: 15px 10% 0 10%;
  background-color: #dfe4eb;
  border-top: 1px solid #999;
  box-shadow: 2px 2px 10px black;
}
h1 {
  font-size: 4em;
  text-shadow: 1px 1.5px white;
  padding: 20px 0 30px 0;
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
  border: 1px solid #3a5168;
  box-shadow: 1px 1px 5px #3a5168;
}
</style>
