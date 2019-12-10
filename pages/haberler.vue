<template></template>
<i18n>
{
  "tr":{
    "news": "Haberler"
  },
  "en":{
    "news": "News"
  }
}
</i18n>
<script>
export default {
  head() {
    return {
      title: this.$t("news"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("news")
        },
        {
          property: "og:title",
          content: this.$t("news"),
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
