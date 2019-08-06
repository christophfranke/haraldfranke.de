<template>
  <img :src="image.url" v-if="image.url" :class="className">
</template>

<script>
  import PrismicDOM from 'prismic-dom'

  export default {
    name: 'PrismicImage',
    props: {
      image: {
        type: Object,
        required: true,
      },
      className: {
        type: String,
        default: ''
      }
    },
  }
</script>
