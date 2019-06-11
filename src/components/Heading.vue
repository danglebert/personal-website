<template>
  <div class="heading">
    <transition name="fade" v-on:enter="nameEnter" v-on:before-enter="beforeEnter">
      <h1 v-if="show">Dan Gilbert</h1>
    </transition>
    <transition v-on:enter="descEnter" v-on:before-enter="beforeEnter">
      <h3 v-if="show">Full Stack Software Engineer</h3>
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
      }, 1500);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.heading {
  background-image: url('../assets/background.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
