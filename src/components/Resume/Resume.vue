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
.res-container {
  width: 100%;
}
.heading-text {
  color: #3a5168;
}
.job-container {
  padding-bottom: 10px;
  border-bottom: 1px solid #3a5168;
}
</style>
