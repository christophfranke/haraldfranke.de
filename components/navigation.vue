<template>
  <div class="navigation">
    <a @click="toggleMenu" href="#" class="nav-menu-toggle">
      <img :src="icon" class="menu-icon">
    </a>
    <transition name="fade">
      <nav v-if="visible" @click="closeMenu">
        <ul>
          <li v-for="(entry, index) in navEntries">
            <nuxt-link :to="entry.url" v-html="entry.title"></nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navigation',
  data() {
    return {
      visible: false
    }
  },

  computed: {
    ...mapGetters(['navEntries']),
    icon() {
      return this.visible ? '/close.svg' : '/menu.svg'
    }
  },

  methods: {
    nobreak(s) {
      return s.replace(/ /g, '&nbsp;')
    },
    toggleMenu(e) {
      e.preventDefault()
      this.visible = !this.visible
    },
    closeMenu() {
      this.visible = false;
    },
    selectMenu() {
      this.closeMenu()
    },
  }
}
</script>

<style scoped lang="scss">
@import '../style/global.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .35s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


ul {
  margin: 0;
  padding: 0;
  display: block;
  text-align: center;
}
li {
  text-align: center;
  display: inline;
  padding: 0 25px;
  border-right: 1px solid white;
}
li:first-child {
  padding-left: 0;
}
li:last-child {
  padding-right: 0;
  border-right: 0;
}
li a {
  font-size: 18px;
  text-decoration: none;
  color: white;
  font-weight: normal;
}
a:hover {
  filter: drop-shadow(0px 3px 2px rgba(0,0,0,0.75));
}

.menu-icon {
  width: 35px;
  height: 35px;
  border: none;
}

.nav-menu-toggle {
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline;
  z-index: 11;
}
@media (max-width: 1000px) {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  li {
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
  }
  li a {
    font-size: 36px;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
  }
  nav {
    background-color: adjust-color($background-color, $alpha: -0.1);
  }
}
</style>