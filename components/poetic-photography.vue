<template>
  <div>
    <RichText :content="primary.title" />
    <RichText :content="primary.text" />
    <div class="grid" v-for="(item, index) in items" :key="index">
      <div class="left">
        <PrismicImage :image="item.image" />
      </div>
      <div class="right">
        <RichText :content="primary.text" />
      </div>
    </div>
    poetische photo
  </div>
</template>

<script>
import components from '../components'

export default {
  name: 'Poem',
  components,
  props: {
    primary: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },

  mounted() {
    console.log(this.primary, this.items)
  }
}
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr ;
}

.left {
  grid-column: 1;
}

.right {
  grid-column: 2;
}
</style>