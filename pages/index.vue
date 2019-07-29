<template>
  <div>
    <Slice :slice="slice" v-for="(slice, index) in slices" :key="index" />
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