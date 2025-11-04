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
      return this.$store.getters.shop
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../style/global.scss' as *;

.grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .item {
    margin-top: 50px;
    width: 33%;

    @media (max-width: 1000px) {
      width: 50%;
    }

    @media (max-width: 700px) {
      width: 100%;
    }
  }
}
</style>
