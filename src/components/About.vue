<template>
  <div class="container">
    <h1>About Me / Resume</h1>
    <div id="img-and-desc">
      <img src="../assets/headshot.jpg">
      <p
        class="text"
      >Placeholder yada yada yada yada yada yada yada yada yada yada yad adyad uashdgfa f hsdufg isdfhgisdfhgois uhdfoi gsdofighs9df ighosidfhgos idfhgo shdfog iishdofig hoasj d oiah fdg iusudhfvk isdjf isdfugh aosdij aisudfi asud h i8u g</p>
    </div>
    <div id="resume">
      <p>Resume Component here</p>
    </div>
  </div>
</template>

<script>
import { jobs, education, projects } from '../data/resume';
export default {
  name: 'About',
  data() {
    return {
      jobs,
      education,
      projects
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 70%;
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
