import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "不止前端",
  description: "不止前端",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
