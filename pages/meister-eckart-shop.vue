<template>
  <div>
    <RichText :content="page.title" className="full-width" />
    <div class="grid">
      <component
        v-for="book in page.books"
        :is="book.amazon_integration.url ? 'AmazonBook' : 'BookWithImage'"
        :key="book.pdf_download.url"
        :book="book"
        class="item"
      />
    </div>
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

.grid {
  display: flex;
  justify-content: space-around;

  .item {
    width: 33%;
  }
}
</style>