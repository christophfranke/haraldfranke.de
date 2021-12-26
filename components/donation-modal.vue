<template>
  <transition name="fade">
    <div class="modal" v-if="isOpen">
      <div class="modal__backdrop" @click="$emit('close')">
        <div class="modal__window" @click.stop>
          <RichText :content="$store.getters.shop.donation_modal" />
          <span class="modal__x" @click="$emit('close')">x</span>
        </div>
      </div>
    </div>
  </transition>	
</template>

<script>
import components from '~/components'

export default {
	name: 'DonationModal',
	components,
	props: {
		isOpen: {
			type: Boolean,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/global.scss';

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