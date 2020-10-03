export default {
  install (Vue) {
    Vue.mixin({
      methods: {
        publicPath (path) {
          return process.env.BASE_URL + path.replace(/^\/+/g, '')
        },
      },
    })
  },
}
