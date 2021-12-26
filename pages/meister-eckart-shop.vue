<template>
  <div>
    <RichText :content="page.title" className="full-width" />
    <component
      v-for="book in page.books"
      :is="book.amazon_integration.url ? 'AmazonBook' : 'AmazonBook'"
      :key="book.pdf_download.url"
      :book="book"
    />
  </div>
</template>

<script>
import components from '~/components'

export default {
  name: 'Shop',
  components,

  computed: {    
    page() {
      console.log(this.$store.getters.shop)
      return this.$store.getters.shop
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';


</style>