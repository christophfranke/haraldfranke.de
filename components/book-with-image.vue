<template>
  <div class="book">
  	<a :href="book.book_page_link.url" target="_blank" class="link">
	    <PrismicImage :image="book.image" class="cover" />
	    <img src="/amazon-logo.png" class="amazon-logo" :style="logoStyle" v-if="book.logopositiontop">
	  </a>
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
  	logoStyle () {
  		return {
	  		top: `${this.book.logopositiontop}%`
  		}
  	}
  }
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

.book {
  max-width: 336px;
}

.cover {
	width: 100%;
	height: auto;
	border: none;
}

.link {
	display: block;
	position: relative;

	transition: outline .2s;
	outline: 6px solid transparent;
	&:hover {
		outline: 6px solid $image-border-color;
	}
}

.amazon-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  pointer-events: none;
  border: none;

  transition: opacity .2s;
  opacity: 0;
  .link:hover & {
  	opacity: 1;
  }

  @media (hover: none) {
    opacity: 1;
  }
}

</style>