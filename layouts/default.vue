<template>
  <div class="anchor">
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
@use '../style/global.scss';

.anchor {
  position: relative;
  width: 100%;
}

body.modal-open {
  overflow: hidden;
  max-height: 100%;
}


</style>
