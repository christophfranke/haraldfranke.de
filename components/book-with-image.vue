<template>
  <div class="book">
    <PrismicImage :image="book.image" class="cover" />
    <br><a :href="url" download target="_blank" v-if="url && label">{{ label }}</a>
    <br><span class="donation">Ich freue mich über eine <a href="#" @click.prevent="openModal">Spende</a></span>

    <DonationModal :isOpen="isModalOpen" @close="closeModal" />
  </div>
</template>

<script>
import components from '~/components'

export default {
	name: 'BookWithImage',
	components,
	props: {
		book: {
			type: Object,
			required: true
		}
	},

  data() {
    return {
      isModalOpen: false
    }
  },

  methods: {
    openModal() {
      this.isModalOpen = true
      document.body.classList.add('modal-open')
    },
    closeModal() {
      this.isModalOpen = false
      document.body.classList.remove('modal-open')
    }    
  },

  computed: {  	
  	label () {
  		console.log(this.book)
  		return this.book.pdf_download_label1[0]?.text
  	},
  	url () {
  		return this.book.pdf_download.url
  	},
  }
}
</script>

<style lang="scss" scoped>
.book {
  max-width: 336px;
}

.cover {
	width: 100%;
	height: auto;
	border: none;
}
</style>