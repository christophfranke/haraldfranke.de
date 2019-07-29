<template>
  <nav>
    <ul>
      <li v-for="(name, index) in navEntries">
        <a :href="`#${name}`" v-html="nobreak(name)"></a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navigation',

  computed: {
    ...mapGetters(['navEntries']),
  },

  methods: {
    nobreak(s) {
      return s.replace(' ', '&nbsp;')
    }
  }
}
</script>

<style>
ul {
  padding: 0;
  margin: auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
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
</style>