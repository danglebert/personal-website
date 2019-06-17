<template>
  <transition v-on:enter="enter" v-on:before-enter="beforeEnter">
    <div v-if="show" class="nav-container">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Navigator',
  data() {
    return {
      show: false
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      Velocity(el, { opacity: 1, right: 10 }, { duration: 1500 });
      done();
    }
  },
  created() {
    setTimeout(() => {
      this.show = true;
    }, 1000);
  }
};
</script>


<style scoped>
.nav-container {
  color: #ef775c;
  position: fixed;
  top: 25%;
  right: -1000px; /*starting point until animation (line 25) kicks in*/
  height: 300px;
  width: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

a {
  opacity: 0.9;
  background-color: #2d616e;
  height: 25%;
  padding-top: 25%;
  border: 1px solid #ef775c;
  border-top: 0;
  font-size: 1.2em;
}
a:hover {
  opacity: 1;
  background-color: teal;
}
a:first-child {
  border-top: 1px solid #ef775c;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
a:last-child {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

@media only screen and (max-width: 800px) {
  .nav-container {
    display: none;
  }
}
</style>
