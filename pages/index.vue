<template>
  <div class="main">
    <RichText :content="page.title" className="full-width" />
    <template v-for="(slice, index) in slices">
      <Slice :slice="slice" :key="index" />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import components from '~/components'

export default {
  name: 'Page',
  components,
  computed: {
    page() {
      return this.$store.getters.home
    },
    slices() {
      return this.$store.getters.slices()
    },
  }
}
</script>

<style lang="scss">
@import '../style/global.scss';
</style>