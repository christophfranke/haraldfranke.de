export default {
  head: {
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    script: [
      {
        src: "/endpoint.js",
      },
      {
        src: "https://static.cdn.prismic.io/prismic.min.js",
      },
    ],
  },
  css: ["vue-pure-lightbox/dist/VuePureLightbox.css"],
  modules: ["@nuxtjs/sentry"],
  sentry: {
    dsn: "https://d6f24f44ea75435193efec91a1ac7453@sentry.io/1528721", // Enter your project's DSN here
    // config: {}, // Additional config
  },
  build: {
    transpile: ["amplitude-js", "query-string", "filter-obj"],
  },
  generate: {
    routes: !process.env.VERCEL && require("./util/routes").default,
  },
  plugins: [
    {
      src: "~/plugins/amplitude",
      ssr: false,
    },
  ],
};
