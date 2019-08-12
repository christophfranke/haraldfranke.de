import amplitude from 'amplitude-js'

const API_KEY = '0624b0f769a67840c99416d0e26a87f8'

export default ({ app }) => {
  amplitude.getInstance().init(API_KEY)

  app.router.afterEach((to, from) => {  
    amplitude.getInstance().logEvent('PAGE_VIEW', {
      url: to.fullPath,
      host: window.location.host
    })
  })
}