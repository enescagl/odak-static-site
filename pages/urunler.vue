<template>
  <div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<i18n>
{
  "tr":{
    "products": "Ürünler"
    },
  "en":{
    "products": "Products"
    }
}
</i18n>
<script>
export default {
  head() {
    return {
      title: this.$t("products"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("products")
        },
        {
          property: "og:title",
          content: this.$t("products"),
          template: chunk => `${chunk} - Odak İş Makinaları`,
          vmid: "og:title"
        }
      ]
    };
  }
};
</script>

<style>
</style>
