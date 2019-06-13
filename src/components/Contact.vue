<template>
  <div class="contact-container">
    <h1>Contact</h1>
    <div class="contact-content">
      <div class="email-container">
        <h3>Drop a Line</h3>
        <p>Have an idea that you would like me to work on? Just want to have a conversation? Shoot me an email at this address and I will get back shortly!</p>
        <a href="mailto:daniel.gilbert0051@gmail.com?Subject=Hello%20There" target="_top">
          <p>Daniel.gilbert0051@gmail.com</p>
        </a>
      </div>
      <div class="network-container">
        <h3>My Networks</h3>
        <p>You can check out some more of my work here.</p>
        <a class="single-network" target="_blank" href="https://www.linkedin.com/in/d-gilbert/">
          <i class="fab fa-linkedin fa-3x net-icon"></i>
          <p style="margin: 0 0 0 15px">linkedin.com/in/d-gilbert</p>
        </a>
        <a class="single-network" target="_blank" href="https://www.github.com/danglebert/">
          <i class="fab fa-github-square fa-3x net-icon"></i>
          <p style="margin: 0 0 0 15px">github.com/danglebert</p>
        </a>
      </div>
    </div>
    <p id="footer">Website created with Vue.js by yours truly :)</p>
  </div>
</template>

<script>
export default {
  name: 'Contact'
};
</script>

<style scoped>
h1 {
  margin: 0;
  color: white;
  font-size: 4em;
  text-shadow: 2px 2px 7px black;
  padding: 20px 0 30px 0;
}
h3 {
  font-size: 2.5em;
}
p {
  font-size: 1.5em;
}
a {
  text-decoration: none;
  color: #ef775c;
  font-size: 1.3em;
  margin: 5px 0 0 0;
}
a:hover {
  color: #ef915c;
}
a:hover .net-icon {
  color: #ef915c;
}

.contact-container {
  background-image: linear-gradient(to right, #2d616e, #3a5168);
  height: 500px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: white;
  padding: 30px 0 0 0;
}
.contact-content {
  display: flex;
  justify-content: space-evenly;
}
.email-container {
  width: 35%;
  text-align: start;
}
.network-container {
  display: flex;
  flex-direction: column;
  width: 35%;
  text-align: start;
}
.single-network {
  display: flex;
  align-items: center;
}

.net-icon {
  color: #ef775c;
}

#footer {
  position: relative;
  top: 100px;
  font-size: 1em;
  margin: 0;
}
</style>
