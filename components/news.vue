<template>
  <div :id="primary.menu">
    <RichText :content="primary.title" />
    <div class="grid">
      <div class="left">
        <RichText :content="primary.text" />
      </div>
      <div class="right">
        <PrismicImage :image="primary.image" />
      </div>
    </div>
  </div>
</template>

<script>
import components from '../components'

export default {
  name: 'News',
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
  grid-template-columns: 1fr 1fr 1fr;
}

.left {
  grid-column-start: 1;
  grid-column-end: 3;
}
.right {
  grid-column: 3;
}
</style>