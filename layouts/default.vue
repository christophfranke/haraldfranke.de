<template>
  <div>
    <transition name="page">
      <div class="toolbar" v-show="shopVisible">
        <div class="ec-cart-widget"></div>
        <div id="my-search-17735022"></div>
      </div>
    </transition>

    <Navigation />
    <nuxt/>

    <transition name="page">
      <div class="shop" v-show="shopVisible">
        <div id="my-categories-17735022"></div>
        <div id="my-store-17735022"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import components from '~/components'


export default {
  components,
  computed: {
    shopVisible() {
      return this.$route.name === 'meister-eckart-shop'
    }
  },

  mounted() {
    if (process.browser) {    
      Ecwid.init()
      xSearch("id=my-search-17735022")
      xCategoriesV2("id=my-categories-17735022")
      xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-17735022")
    }
  }
}
</script>


<style lang="scss">
@import '../style/global.scss';

.toolbar {
  position: absolute;
  min-width: 20vw;
}

#my-search-17735022 {
  margin-top: 20px;
  clear: both;
  width: 100%;
}


html#ecwid_html body#ecwid_body {
  .ec-minicart__icon .icon-default path[stroke] {
    stroke: white !important;
  }

  .ec-size .ec-store {
    .form-control--secondary * {
      color: $background-color !important;
    }

    * {
      color: white !important;
    }

    a:hover {
      filter: drop-shadow(0px 3px 2px rgba(0,0,0,0.75));    
    }

    .form-control {
      background: rgba(0, 0, 0, 0.05) !important;
      &--radio, &--checkbox {
        background: transparent !important;
      }
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