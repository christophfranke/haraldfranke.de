<template>
  <div>
    <Navigation />
    <div class="main">
      <RichText :content="page.title" className="full-width" />
      <template v-for="(slice, index) in slices">
        <Slice :slice="slice" :key="index" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import components from '~/components'

export default {
  name: 'Page',
  components,
  computed: {
    ...mapGetters(['home', 'slices']),
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
  },

  mounted() {
    console.log(this.page)
  }
}
</script>

<style lang="scss">
@import '../../style/global';

.main {
  max-width: 1000px;
  width: 80vw;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 2.5vw 1fr;
  grid-row-gap: 50px;
}

.full-width {
  grid-column-start: 1;
  grid-column-end: 4;
}

.left-half {
  grid-column: 1;
}

.right-half {
  grid-column: 3;
}
</style>