<template>
  <a :href="url">go to requested page</a>
</template>
<script>
import linkResolver from '~/util/linkResolver'
import Api from '~/util/api'

export default {
  name: 'Preview',
  asyncData({ app, req, redirect }) {
    if (process.browser) {
      window.app = app
    }

    const token = app.router.currentRoute.query.token
    if (token) {
      try {
        return Api({ req })
          .then(api => api.previewSession(token, linkResolver, '/'))
          .then(url => {
            if (process.browser) {
              window.location.href = url
            }
            try {
              redirect(url);
            } catch(err) {
              return { url }
            }
          })
      } catch (err) {
        return {
          url: '/'
        }
      }
    }
  },

  mounted() {
    if (this.url) {
      window.location.href = this.url
    }
  }
}
</script>