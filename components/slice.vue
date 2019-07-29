<template>
  <div>
    <Poem :primary="slice.primary" :items="slice.items" v-if="slice.slice_type === 'poem'" />
    <PoeticPhotography :primary="slice.primary" :items="slice.items" v-else-if="slice.slice_type === 'poetic_fotography'" />
    <span v-else>
      {{ slice.slice_type }}
    </span>
  </div>
</template>

<script>
import components from '../components'

export default {
  name: 'Slice',
  components: {
    ...components,
    Poem: () => import('./poem.vue'),
    PoeticPhotography: () => import('./poetic-photography.vue'),
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  }
}
</script>