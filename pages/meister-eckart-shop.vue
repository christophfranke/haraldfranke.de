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
  }
}
</script>
