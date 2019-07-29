<template>
  <div class="grid" :id="primary.menu">
    <div class="left">
      <PrismicImage :image="primary.image" />
    </div>
    <div class="right">
      <RichText :content="primary.content" className="no-margin-top"/>
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
  margin-top: 150px;
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

<style>
.no-margin-top > * {
  margin-top: 0;
}
</style>