<template>
  <div class="thumbnails full-width">
    <div v-for="(image, index) in images" :key="index" class="nail">
      <span class="overlay">{{ image.alt }}</span>
      <no-ssr :placeholder="image.alt">
        <VuePureLightbox
          :images="imageUrls"
          :thumbnail="image.preview.url"
          :openAtIndex="index" />
      </no-ssr>
    </div>
  </div>
</template>

<script>
import VuePureLightbox from 'vue-pure-lightbox'
import components from '~/components'

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
      this.visible = true
      this.index = index
    }
  }
}
</script>


<style scoped lang="scss">
.thumbnails {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 1.5vw;
  grid-row-gap: 1.5vw;
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.nail {
  position: relative;
}
.overlay {
  position: absolute;
  right: 10px;
  bottom: 10px;
  pointer-events: none;
  font-size: 16px;
  font-family: 'Lucida Calligraphy', sans-serif;
}
</style>

<style lang="scss">
.lightbox {
  background: rgba(0,0,0,1);

  &__element {
    max-height: 80vh;
  }

  &__image img {  
    max-width: calc(100% - 20px);
    width: auto!important;
    max-height: 80vh;
    margin: auto;
    display: block;
  }

  &__thumbnail img {
    border: none;
  }
}
</style>