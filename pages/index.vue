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

<style lang="scss">
  @import '../style/global';
</style>