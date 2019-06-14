<template>
  <div id="heading" v-on:scroll="handleScroll">
    <transition name="fade" v-on:enter="enter" v-on:before-enter="beforeEnter">
      <h1 id="name" v-if="show">Dan Gilbert</h1>
    </transition>
    <transition v-on:enter="enter" v-on:before-enter="beforeEnter">
      <h3 id="title" style="color:#3A5168" v-if="show">Full Stack Software Engineer</h3>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      show: false,
      removed: false
    };
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      if (el.id === 'name') el.style.bottom = '55%';
      else el.style.top = '55%';
    },
    enter(el, done) {
      if (el.id === 'name')
        Velocity(el, { opacity: 1, bottom: '50%' }, { duration: 750 });
      else Velocity(el, { opacity: 1, top: '50%' }, { duration: 750 });
      done();
    },
    handleScroll() {
      const parallax = document.getElementById('heading');
      const offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + 'px';

      const removed = this.removed;
      if (!this.removed && offset > 1000) {
        const name = document.getElementById('name');
        const title = document.getElementById('title');
        name.hidden = true;
        title.hidden = true;
        this.removed = true;
      }

      if (this.removed && offset < 1000) {
        const name = document.getElementById('name');
        const title = document.getElementById('title');
        name.hidden = false;
        title.hidden = false;
        this.removed = false;
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    setTimeout(() => {
      this.show = true;
    }, 500);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
#heading {
  background-image: url('../assets/background.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: -1;
}
#name {
  margin: 0;
  color: white;
  font-size: 5em;
  text-shadow: 1px 1.5px #b63f29;
  position: fixed;
}
#title {
  margin: 0;
  font-size: 2.5em;
  text-shadow: 1px 1px white;
  position: fixed;
}
</style>
