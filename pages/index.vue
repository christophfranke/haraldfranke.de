<template>
  <div>
    <Navigation />
    <div class="main">
      <div v-for="(slice, index) in slices" :key="index">
        <Slice :slice="slice" />
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import components from '../components'

export default {
  name: 'Home',
  components,
  computed: {
    ...mapGetters(['home', 'slices']),
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 20px;
  line-height: 32px;
  background-color: rgb(155, 155, 155);
  color: white;
}

form input{
  color: black;
}

img{
  border: 6px solid #880000;
  width: calc(80% - 12px);
  height: auto;
  margin-bottom: 50px;
}

h1 {
  margin-top: 150px;
  margin-bottom: 50px;
}

hr {
  margin-top: 80px;
}

p {
  margin: 40px 0;
}

p:first-child {
  margin-top: 0;
}

.main {
  max-width: 1000px;
  width: 80vw;
  margin: auto;
}

#nav ul li a{
  padding-right: 10px;
  border-right: 1px solid white;
  margin-left: 10px;
  font-size: 0.75em;
}

#nav ul li a:hover{
  text-shadow: none;
  text-decoration: underline;
}

</style>