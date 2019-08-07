<template>
  <div>
    <RichText :content="page.title" className="full-width" />
  </div>
</template>

<script>
import components from '~/components'

export default {
  name: 'Shop',
  components,

  computed: {    
    page() {
      return this.$store.getters.shop
    }
  },

  mounted() {
    if (process.browser) {
      // this will resize the shop to the needed dimensions when initialized before in hidden mode
      // otherwise shop layout will look broken
      window.dispatchEvent(new Event('resize'));
    }
  }
}
</script>
