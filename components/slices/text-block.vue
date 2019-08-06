<template>
  <RichText :content="text" :className="layout" />
</template>

<script>
import components from '~/components'
import layoutClass from '~/util/layoutClass'

export default {
  name: 'TextBlock',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    }
  },

  computed: {
    text() {
      return this.primary.text
    },
    layout() {
      return layoutClass(this.primary.layout)
    }
  }
}
</script>

<style scoped>
</style>