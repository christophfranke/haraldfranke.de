<template>
  <div class="book">
  	<div class="cover">
	    <iframe type="text/html" width="336" height="550" frameborder="0" allowfullscreen style="max-width:100%" :src="iframe" ></iframe>
    	<img src="/amazon-logo.png" class="amazon-logo" :style="logoStyle" v-if="book.logopositiontop">
	  </div>
    <br><a :href="url" download target="_blank" v-if="url && label">{{ label }}</a>
    <br><span class="donation">Ich freue mich über eine <a href="#" @click.prevent="openModal">Spende</a></span>

	  <DonationModal :isOpen="isModalOpen" @close="closeModal" />
  </div>
</template>

<script>
import components from '~/components'

export default {
  name: 'AmazonBook',
  props: {
  	book: {
  		type: Object,
  		required: true
  	}
  },
  components,

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
  		return this.book.pdf_download_label1[0]?.text
  	},
  	url () {
  		return this.book.pdf_download.url
  	},
  	iframe () {
  		return this.book.amazon_integration?.url
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
.amazon-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  pointer-events: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 8px 16px;

  transition: opacity .2s;
  opacity: 0;
  .cover:hover & {
  	opacity: 1;
  }
}

.donation a {
  font-size: 20px;
}

.book {
	width: 100%;
  position: relative;
  max-width: 336px;
  text-align: center;

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }

  a {
    font-size: 28px;
    display: inline-block;
    margin-top: 10px;  
  }
}
</style>