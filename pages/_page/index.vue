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
    slug() {
      return this.$router.currentRoute.params.page
    },
    page() {
      return this.$store.getters.page(this.slug)
    },
    slices() {
      return this.$store.getters.slices(this.slug)
    },
  },

  asyncData({ params, store, error }) {
    if (!store.getters.page(params.page)) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss">
@import '../../style/global.scss';
</style>