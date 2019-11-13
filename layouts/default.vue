<template>
  <div>
    <transition name="page">
      <div class="toolbar" v-show="shopVisible">
        <div class="ec-cart-widget"></div>
        <div id="my-search-17735022"></div>
      </div>
    </transition>

    <Navigation />
    <nuxt/>

    <transition name="page">
      <div class="shop-and-book" v-show="shopVisible">
        <div class="book">
          <iframe type="text/html" width="336" height="550" frameborder="0" allowfullscreen style="max-width:100%" src="https://lesen.amazon.de/kp/card?asin=B07VH5Q2FG&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_4ygtDbNS7NE1X" ></iframe>
          <img src="/amazon-logo.png" class="amazon-logo">
          <br><a :href="pdf.url" download target="_blank" v-if="pdf.url && pdf.label">{{ pdf.label }}</a>
          <br><span class="donation">Ich freue mich über eine <a href="#" @click.prevent="openModal">Spende</a></span>
        </div>
        <div class="shop">
          <div id="my-store-17735022"></div>
        </div>
      </div>
    </transition>

    <div class="modal" v-if="isModalOpen">
      <div class="modal__backdrop" @click="closeModal">
        <div class="modal__window">
          <RichText :content="$store.getters.shop.donation_modal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import components from '~/components'
import PrismicDOM from 'prismic-dom'
import linkResolver from '~/util/linkResolver'


export default {
  components,

  data() {
    return {
      isModalOpen: false
    }
  },

  computed: {
    shopVisible() {
      return this.$route.name === 'meister-eckart-shop'
    },

    pdf() {
      return {
        url: this.$store.getters.shop.die_lehren_meister_eckarts_pdf && this.$store.getters.shop.die_lehren_meister_eckarts_pdf.url,
        label: this.$store.getters.shop.pdf_download_label && this.$store.getters.shop.pdf_download_label[0].text
      }
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

  mounted() {
    if (process.browser) {
      try {
        Ecwid.init()
        xSearch("id=my-search-17735022")
        xCategoriesV2("id=my-categories-17735022")
        xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-17735022")
      } catch(err) {
        this.$sentry.captureException(err);
      }

      console.log(this.$store.getters.shop)
    }
  }
}
</script>


<style lang="scss">
@import '../style/global.scss';

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
  }

  &__window {
    max-height: 80vh;
    min-height: 250px;
    width: 60vw;
    overflow-y: auto;
    background: rgb(255, 255, 255);
    padding: 20px;
    color: black;
  }
}

.shop-and-book {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
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

.amazon-logo {
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translateX(-50%);
  width: 130px;
  pointer-events: none;
  border: none;
}

.toolbar {
  position: absolute;
  min-width: 20vw;
}

#my-search-17735022 {
  margin-top: 20px;
  clear: both;
  width: 100%;
}

.donation a {
  font-size: 20px;
}

body.modal-open {
  overflow:hidden;
  max-height: 100%;
}


html#ecwid_html body#ecwid_body {
  .ec-minicart__icon .icon-default path[stroke] {
    stroke: white !important;
  }

  .ec-size .ec-store {
    .form-control--secondary * {
      color: $background-color !important;
    }

    * {
      color: white !important;
    }

    a:hover {
      filter: drop-shadow(0px 3px 2px rgba(0,0,0,0.75));    
    }

    .form-control {
      background: rgba(0, 0, 0, 0.05) !important;
      &--radio, &--checkbox {
        background: transparent !important;
      }
    }

    .icon-default path[stroke] {
      stroke: white !important;
    }

    .product-details img {
      border: 6px solid #880000;
      border-style: solid !important;
      width: calc(100% - 12px) !important;
    }
     .grid-product__image-wrap {
      border: 6px solid #880000;
    }
  }
}
</style>