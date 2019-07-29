<template>
  <div class="cms-content" :class="className" v-html="html" />
</template>

<script>
  import PrismicDOM from 'prismic-dom'

  export default {
    name: 'RichText',
    props: {
      content: {
        type: Array,
        required: true,
      },
      className: {
        type: String,
        required: false
      }
    },

    computed: {
      html() {
        return PrismicDOM.RichText.asHtml(this.content)
      },
    },
  }
</script>