<template>
  <div id="contact">
    <h1>Contact</h1>
    <div class="contact-content">
      <div class="email-container">
        <h3>Drop a Line</h3>
        <p>Have an idea that you would like help with? Just want to have a conversation? Shoot me an email at this address and I will get back shortly!</p>
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
  color: #ef775c;
  font-size: 1.3em;
  margin: 5px 0 0 0;
}
a:hover,
a:hover .net-icon {
  color: #ef915c;
}

#contact {
  background-image: linear-gradient(to right, #2d616e, #3a5168);
  height: 500px;
  color: white;
  padding: 30px 0 0 0;
  border-top: 1px solid #999;
  box-shadow: 2px 2px 10px black;
  position: relative;
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
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 1px;
  font-size: 1em;
  margin: 0;
}

@media (max-width: 850px) {
  a {
    font-size: 1em;
  }
}

@media (max-width: 750px) {
  h1 {
    padding: 0 0 10px 0;
  }
  h3 {
    font-size: 2em;
  }
  p {
    font-size: 1.2em;
  }
  #contact {
    height: 100%;
  }
  .contact-content {
    flex-direction: column;
    align-items: center;
  }
  .email-container {
    width: 90%;
    height: 40%;
  }
  .network-container {
    width: 90%;
    height: 40%;
  }
}

@media (max-height: 500px) {
  #contact {
    height: 150%;
  }
}
</style>
