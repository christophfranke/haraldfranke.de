<template>
  <p class="poem" :class="layout">
    <span class="line" v-for="line in lines">{{ line || '&nbsp;' }}</span>
  </p>
</template>

<script>
import components from '~/components'
import layoutClass from '~/util/layoutClass'

export default {
  name: 'Poem',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    }
  },

  computed: {
    lines() {
      return this.primary.text.filter(({ type }) => type === 'paragraph').map(({ text }) => text)
    },
    layout() {
      return layoutClass(this.primary.layout)
    }
  }
}
</script>

<style scoped>
.line {
  text-align: center;
  display: block;
}
</style>