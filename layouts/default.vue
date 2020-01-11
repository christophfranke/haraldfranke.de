<template>
  <div>
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
@import '../style/global.scss';

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
  overflow: hidden;
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
      border: 6px solid $image-border-color;
      border-style: solid !important;
      width: calc(100% - 12px) !important;
    }
     .grid-product__image-wrap {
      border: 6px solid $image-border-color;
    }
  }
}
</style>