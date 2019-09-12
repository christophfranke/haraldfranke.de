<template>
  <PrismicImage :image="image" :className="layout" />
</template>

<script>
import components from '~/components'
import layoutClass from '~/util/layoutClass'

export default {
  name: 'FullImage',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    }
  },

  computed: {
    image() {
      return this.primary.image
    },
    layout() {
      return layoutClass(this.primary.layout)
    }
  },
}
</script>

<style lang="scss">
img {
  height: auto;

  &.full-width {
    display: block;
    margin: 0 auto;
    width: calc(80% - 12px);
  }

  &.left-half, &.right-half {
    width: calc(100% - 12px);
    display: block;
    margin: 0 auto;
  }
}


</style>