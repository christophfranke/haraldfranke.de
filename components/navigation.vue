<template>
  <div class="navigation">
    <a @click="toggleMenu" href="#" class="nav-menu-toggle">x</a>
    <nav :class="visible && 'visible'">
      <ul>
        <li v-for="(name, index) in navEntries">
          <a :href="`#${name}`" v-html="nobreak(name)" @click="selectMenu"></a> 
        </li>
      </ul>
    </nav>
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
  },

  methods: {
    nobreak(s) {
      return s.replace(' ', '&nbsp;')
    },
    toggleMenu(e) {
      e.preventDefault()
      this.visible = !this.visible
    },
    selectMenu() {
      this.visible = false
    }
  }
}
</script>

<style>
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
a {
  font-size: 18px;
  text-decoration: none;
  color: white;
  font-weight: normal;
}
a:hover {
  filter: drop-shadow(0px 3px 2px rgba(0,0,0,0.75));
}

.nav-menu-toggle {
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
}
@media (max-width: 1100px) {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  li {
    width: 100%;
    padding: 15px 0;
    border: none;
  }
  a {
    font-size: 26px;
  }
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  nav {
    background-color: rgb(155, 155, 155, 0.9);
    display: none;
    width: 100%;
    height: 100%;
  }
  nav.visible {
    display: block;
  }
  .nav-menu-toggle {
    display: inline;
  }
}
</style>