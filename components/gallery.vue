<template>
  <div :id="primary.menu">
    <RichText :content="primary.title" />

    <div class="thumbnails">
      <div v-for="(preview, index) in previewImages" :key="index" class="nail">
        <no-ssr placeholder="Loading...">
          <VuePureLightbox
            :images="imageUrls"
            :thumbnail="preview.url"
            :openAtIndex="index" />
        </no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import VuePureLightbox from 'vue-pure-lightbox'
import components from '../components'

export default {
  name: 'Gallery',
  components: {
    ...components,
    VuePureLightbox
  },
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
      console.log('hallo', index)
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
  justify-content: flex-start;
}
.nail {
  min-width: 150px;
  width: 20%;
}
</style>

<style>
.nail img {
  border: none;
}
</style>