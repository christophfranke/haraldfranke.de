<template>
  <div>
    <RichText :content="primary.title" />
    <div v-for="(item, index) in items" :key="index">
      <RichText :content="item.content" />
      <PrismicImage :image="item.image" />
    </div>
  </div>
</template>

<script>
import components from '../components'

export default {
  name: 'Poem',
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
  },
}
</script>