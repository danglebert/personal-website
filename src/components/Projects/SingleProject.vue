<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="card">
        <v-img class="image" v-bind:src="project.image" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{project.name}}</h3>
            <div>{{project.description}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'SingleProject',
  props: ['project']
};
</script>

<style scoped>
.card {
  width: 300px;
}
.image {
  height: 300px;
}
</style>
