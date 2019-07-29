<template>
  <div class="main">
    <Slice :slice="slice" v-for="(slice, index) in slices" :key="index" />
    <hr>
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
body {
  background-color: rgb(155, 155, 155);
  color: white;
}

form input{
  color: black;
}

img{
  border: 6px solid #880000;
  width: 80%;
  height: auto;
}

.main {
  max-width: 1280px;
  width: 95vw;
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