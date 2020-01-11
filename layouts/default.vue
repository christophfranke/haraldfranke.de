<template>
  <div>
    <Navigation />
    <nuxt/>
  </div>
</template>

<script>
import components from '~/components'
import PrismicDOM from 'prismic-dom'
import linkResolver from '~/util/linkResolver'


export default {
  components
}
</script>


<style lang="scss">
@import '../style/global.scss';

body.modal-open {
  overflow: hidden;
  max-height: 100%;
}


</style>