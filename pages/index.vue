<template>
  <div>
    <Navigation />
    <div class="main">
      <div v-for="(slice, index) in slices" :key="index">
        {{ slice.slice_type }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import components from '~/components'

export default {
  name: 'Home',
  components,
  computed: {
    ...mapGetters(['home']),
    slices() {
      return this.$store.getters.slices()
    }
  }
}
</script>

<style lang="scss">
  @import '../style/global';
</style>