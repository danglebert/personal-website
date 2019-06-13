<template>
  <div class="single-school">
    <div class="name-time">
      <p class="institution">{{school.institution}}</p>
      <p class="time">{{school.date}}</p>
    </div>
    <div class="details">
      <h3>{{school.title}}</h3>
      <p class="desc">{{school.description}}</p>
      <p class="location">{{school.location}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'School',
  props: ['school']
};
</script>

<style scoped>
.single-school {
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
.institution {
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

.location {
  color: #b63f29;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
