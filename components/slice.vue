<template>
  <div>
    <Poem :primary="slice.primary" :items="slice.items" v-if="slice.slice_type === 'poem'" />
    <PoeticPhotography :primary="slice.primary" :items="slice.items" v-else-if="slice.slice_type === 'poetic_fotography'" />
    <Gallery :primary="slice.primary" :items="slice.items" v-else-if="slice.slice_type === 'gallery'" />
    <News :primary="slice.primary" :items="slice.items" v-else-if="slice.slice_type === 'news'" />
    <About :primary="slice.primary" :items="slice.items" v-else-if="slice.slice_type === 'about'" />
    <Prices :primary="slice.primary" :items="slice.items" v-else-if="slice.slice_type === 'prices'" />
    <Imprint :primary="slice.primary" :items="slice.items" v-else-if="slice.slice_type === 'imprint'" />
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
    Gallery: () => import('./gallery.vue'),
    News: () => import('./news.vue'),
    About: () => import('./about.vue'),
    Prices: () => import('./prices.vue'),
    Imprint: () => import('./imprint.vue'),
  },
  props: {
    slice: {
      type: Object,
      required: true
    }
  }
}
</script>