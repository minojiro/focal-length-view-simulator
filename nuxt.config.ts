import path from "path";

const BASE_URL = "https://focal-length-view-simulator.vercel.app";

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
        prefix: "og: https://ogp.me/ns#",
      },
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      meta: [
        {
          property: "og:description",
          content:
            "レンズ焦点距離とセンサーサイズから画角のシミュレーションを行う",
        },
        { property: "og:url", content: BASE_URL },
        { property: "og:type", content: "website" },
        {
          property: "og:site_name",
          content: "レンズ焦点距離と画角のシミュレーター",
        },
        {
          property: "og:image",
          content: path.join(BASE_URL, "/ogp.png"),
        },
        {
          property: "description",
          content:
            "レンズ焦点距離とセンサーサイズから画角のシミュレーションを行う",
        },
      ],
    },
  },
});
