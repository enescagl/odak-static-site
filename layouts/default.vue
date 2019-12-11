<template>
  <div class="bg-gray-200 min-h-screen flex flex-col justify-between">
    <site-header></site-header>
    <nuxt class="flex-1" />
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default {
  components: {
    SiteHeader,
    SiteFooter
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo();
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      meta: [...i18nSeo.meta],
      link: [...i18nSeo.link]
    };
  }
};
</script>


<style>
</style>
