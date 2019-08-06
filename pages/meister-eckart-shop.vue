<template>
  <div>
    <Navigation />
    <RichText :content="page.title" className="full-width" />
    <div class="ec-cart-widget"></div>
    <div id="my-search-17735022"></div>
    <div id="my-categories-17735022"></div>
    <div id="my-store-17735022"></div>
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
  },

  mounted() {
    Ecwid.init()
    xSearch("id=my-search-17735022")
    xCategoriesV2("id=my-categories-17735022")
    xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-17735022")    
  }
}
</script>

<style lang="scss">
@import '../style/global.scss';

html#ecwid_html body#ecwid_body {
  .ec-minicart__icon .icon-default path[stroke] {
    stroke: white !important;
  }

  .ec-size .ec-store {
    * {
      color: white !important;
    }

    a:hover {
      filter: drop-shadow(0px 3px 2px rgba(0,0,0,0.75));    
    }

    .icon-default path[stroke] {
      stroke: white !important;
    }

    .product-details img {
      border: 6px solid #880000;
      border-style: solid !important;
      width: calc(100% - 12px) !important;
    }
     .grid-product__image-wrap {
      border: 6px solid #880000;
    }
  }
}
</style>