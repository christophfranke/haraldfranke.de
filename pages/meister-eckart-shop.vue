<template>
  <div>
    <Navigation />
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

  mounted() {
    Ecwid.init()
    xSearch("id=my-search-17735022")
    xCategoriesV2("id=my-categories-17735022")
    xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-17735022")    
  }
}
</script>

<style lang="scss">
  @import '../style/global';
</style>