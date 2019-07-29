<template>
  <div>
    <RichText :content="primary.title" />
    <RichText :content="primary.title" />
    <div class="thumbnails">
      <PrismicImage
        v-for="(preview, index) in previewImages"
        :key="index"
        :image="preview"
        @click="show(index)" />
    </div>
    <no-ssr placeholder="Loading...">
    </no-ssr>
  </div>
</template>

<script>
import components from '../components'

export default {
  name: 'Gallery',
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
  data() {
    return {
      visible: false,
      index: 0
    }
  },

  computed: {
    images() {
      return this.items.map(item => item.image)
    },
    imageUrls() {
      return this.images.map(image => image.url)
    },
    previewImages() {
      return this.items.map(item => item.image.preview)
    }
  },

  methods: {
    show(index) {
      this.visible = true
      this.index = index
    }
  }
}
</script>

<style scoped>
.thumbnails {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.thumbnails img {
  width: 15%;
  min-width: 125px;
}
</style>