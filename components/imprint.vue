<template>
  <div>
    <RichText :content="primary.title" />
    <RichText :content="primary.content" />
    <div class="grid">
      <div class="left">
        <RichText :content="primary.address" />
      </div>
      <div class="right">
        <RichText :content="primary.legal" />
      </div>
    </div>
  </div>
</template>

<script>
import components from '../components'

export default {
  name: 'Imprint',
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