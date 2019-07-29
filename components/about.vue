<template>
  <div class="grid">
    <div class="left">
      <PrismicImage :image="primary.image" />
    </div>
    <div class="right">
      <RichText :content="primary.content" />
    </div>
  </div>
</template>

<script>
import components from '../components'

export default {
  name: 'About',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.left {
  grid-column: 1;
}
.right {
  grid-column: 2;
}
</style>