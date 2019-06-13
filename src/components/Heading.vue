<template>
  <div class="heading">
    <transition name="fade" v-on:enter="nameEnter" v-on:before-enter="beforeEnter">
      <h1 v-if="show">Dan Gilbert</h1>
    </transition>
    <transition v-on:enter="descEnter" v-on:before-enter="beforeEnter">
      <h3 style="color:#3A5168" v-if="show">Full Stack Software Engineer</h3>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      show: false
    };
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
    },
    nameEnter(el, done) {
      Velocity(el, { opacity: 1 }, { duration: 1500 });
      done();
    },
    descEnter(el, done) {
      setTimeout(() => {
        Velocity(el, { opacity: 1 }, { duration: 1500 });
      }, 3500);
      done();
    }
  },
  created() {
    setTimeout(() => {
      this.show = true;
    }, 500);
  }
};
</script>

<style scoped>
@keyframes introName {
  0% {
    top: -500px;
  }
  100% {
    top: 0px;
  }
}

h1 {
  margin: 0;
  color: white;
  font-size: 4em;
  text-shadow: 1px 1.5px #b63f29;
  animation-name: introName;
  animation-duration: 3s;
  position: relative;
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
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
