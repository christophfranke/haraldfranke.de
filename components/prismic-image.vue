<template>
  <img :src="image.url" v-if="image.url">
</template>

<script>
  import PrismicDOM from 'prismic-dom'

  export default {
    name: 'PrismicImage',
    props: {
      image: {
        // type: Array,
        // required: true,
      },
    },
  }
</script>
