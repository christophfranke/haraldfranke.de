<template>
  <div>
    <RichText :content="primary.title" />
    <RichText :content="primary.content" />
  </div>
</template>

<script>
import components from '../components'

export default {
  name: 'Prices',
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

