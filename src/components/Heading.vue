<template>
  <div id="home" v-on:scroll="handleScroll">
    <transition v-on:enter="enter" v-on:before-enter="beforeEnter">
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
      hidden: false
    };
  },
  methods: {
    animStart(el) {
      if (el.id === 'name') el.style.bottom = '55%';
      else el.style.top = '55%';
    },
    animEnd(el, sufWidth) {
      const nameParams = sufWidth
        ? { opacity: 1, bottom: '50%' }
        : { opacity: 1 };
      const titleParams = sufWidth
        ? { opacity: 1, top: '50%' }
        : { opacity: 1 };

      if (el.id === 'name') Velocity(el, nameParams, { duration: 750 });
      else Velocity(el, titleParams, { duration: 750 });
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      if (window.innerWidth > 750) this.animStart(el);
    },
    enter(el, done) {
      if (window.innerWidth > 750) this.animEnd(el, true);
      else this.animEnd(el, false);
    },
    handleScroll() {
      const parallax = document.getElementById('home');
      const offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * 0.7 + 'px';

      if (!this.hidden && offset > 1000) {
        const name = document.getElementById('name');
        const title = document.getElementById('title');
        name.hidden = true;
        title.hidden = true;
        this.hidden = true;
      }

      if (this.hidden && offset < 1000) {
        const name = document.getElementById('name');
        const title = document.getElementById('title');
        name.hidden = false;
        title.hidden = false;
        this.hidden = false;
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
#home {
  background-image: url('../assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
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
  bottom: 50%;
}
#title {
  margin: 0;
  font-size: 2.5em;
  text-shadow: 1px 1px white;
  position: fixed;
  top: 50%;
}

@media (max-width: 750px) {
  #home {
    z-index: 0;
  }
  #name {
    font-size: 4.5em;
    position: relative;
    bottom: 0px !important;
  }
  #title {
    width: 83vw;
    position: relative;
    top: 0px !important;
  }
}
</style>
