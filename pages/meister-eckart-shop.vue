<template>
  <div>
    <RichText :content="page.title" className="full-width" />
    <div class="book">
      <iframe type="text/html" width="336" height="550" frameborder="0" allowfullscreen style="max-width:100%" src="https://lesen.amazon.de/kp/card?asin=B07VH5Q2FG&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_4ygtDbNS7NE1X" ></iframe>
      <img src="/amazon-logo.png" class="amazon-logo">
      <br><a :href="pdf.url" download target="_blank" v-if="pdf.url && pdf.label">{{ pdf.label }}</a>
      <br><span class="donation">Ich freue mich über eine <a href="#" @click.prevent="openModal">Spende</a></span>
    </div>

    <transition name="fade">
      <div class="modal" v-if="isModalOpen">
        <div class="modal__backdrop" @click="closeModal">
          <div class="modal__window" @click.stop>
            <RichText :content="$store.getters.shop.donation_modal" />
            <span class="modal__x" @click="closeModal">x</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import components from '~/components'

export default {
  name: 'Shop',
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
    page() {
      return this.$store.getters.shop
    },

    pdf() {
      return {
        url: this.$store.getters.shop.die_lehren_meister_eckarts_pdf && this.$store.getters.shop.die_lehren_meister_eckarts_pdf.url,
        label: this.$store.getters.shop.pdf_download_label && this.$store.getters.shop.pdf_download_label[0].text
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';
.amazon-logo {
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translateX(-50%);
  width: 130px;
  pointer-events: none;
  border: none;
}

.book {
  position: relative;
  margin-top: 17px;
  margin-right: 20px;
  min-width: 336px;
  text-align: center;

  @media (max-width: 600px) {
    margin: auto;
    margin-bottom: 20px;
  }

  a {
    font-size: 28px;
    display: inline-block;
    margin-top: 10px;  
  }
}

.donation a {
  font-size: 20px;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


.modal {
  &__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  &__window {
    max-height: 80vh;
    min-height: 250px;
    width: 50vw;
    overflow-y: auto;
    padding: 10px 30px 30px 30px;
    background-color: $background-color;
    border: 6px solid $image-border-color;
    position: relative;
    @media (max-width: 650px) {
      width: 80vw;
      margin: 0 10px;
    }
    @media (max-width: 400px) {
      width: 100vw;
      padding: 10px 10px 10px 10px;
      font-size: 18px;
    }
  }

  &__x {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 30px;
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;
    &:hover {
      filter: drop-shadow(0px 3px 2px rgba(0,0,0,0.75));
    }
  }
}
</style>