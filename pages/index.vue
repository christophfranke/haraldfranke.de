<template>
  <div>
    <RichText :content="content" />
  </div>
</template>

<script>
import components from '../components'

export default {
  name: 'Home',
  components,
  computed: {
    content() {
      return this.$store.getters.home
    }
  }
}
</script>