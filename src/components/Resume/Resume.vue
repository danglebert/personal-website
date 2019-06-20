<template>
  <div class="res-container">
    <h1 class="heading-text">Work Experience</h1>
    <div class="job-container">
      <div v-bind:key="job.id" v-for="job in jobs">
        <Job v-bind:job="job"/>
      </div>
    </div>
    <h1 class="heading-text">Education</h1>
    <div class="school-container" v-bind:key="school.id" v-for="school in education">
      <School v-bind:school="school"/>
    </div>
    <p>
      You can click
      <a href="../../resume.pdf" download="Daniel-Gilbert-Resume">here</a> to download a copy of my resume.
    </p>
  </div>
</template>

<script>
import Job from './Job';
import School from './School';
import { jobs, education } from '../../data/resume.js';
export default {
  name: 'Resume',
  components: {
    Job,
    School
  },
  data() {
    return {
      jobs,
      education
    };
  }
};
</script>

<style scoped>
a {
  color: #b63f29;
}

a:hover {
  color: #ef775c;
}

p {
  margin: 0;
  padding-bottom: 5px;
}

.res-container {
  width: 100%;
}
.heading-text {
  color: #3a5168;
  padding: 20px 0 20px 0;
}
.job-container {
  padding-bottom: 10px;
  border-bottom: 1px solid #3a5168;
}

@media only screen and (max-width: 800px) {
  .heading-text {
    text-align: center;
  }
}
</style>
