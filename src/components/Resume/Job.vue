<template>
  <div class="single-job">
    <div class="name-time">
      <p class="company">{{job.company}}</p>
      <p class="time">{{job.time}}</p>
    </div>
    <div class="details">
      <h3>{{job.position}}</h3>
      <p class="desc">{{job.description}}</p>
      <div class="loc-link">
        <p>{{job.location}}</p>
        <a :href="job.link" class="link">{{job.link}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Job',
  props: ['job']
};
</script>

<style scoped>
.single-job {
  display: flex;
  justify-content: space-evenly;
  padding-top: 10px;
}
.name-time {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 30px;
  width: 30%;
  text-align: start;
}
.company {
  font-size: 20px;
  font-weight: bold;
}
.time {
  font-size: 18px;
  margin-top: 0;
  color: #b63f29;
}
.details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 30px;
  width: 45%;
}
.desc {
  text-align: start;
  margin: 0;
}

.loc-link {
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #b63f29;
  padding-top: 10px;
  padding-bottom: 10px;
}

.link {
  text-decoration: none;
  color: #b63f29;
}
</style>
