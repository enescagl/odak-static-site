<template>
  <BasicExhibition
    name="Fuar - Suudi Arabistan IEEF 2015"
    imageUrl="https://via.placeholder.com/250"
    imageAlt="placeholder"
  ></BasicExhibition>
</template>
<i18n>
{
  "tr":{
    "exhibitions":"Fuarlar"
  },
  "en":{
    "exhibitions":"Exhibitions"
  }
}
</i18n>
<script>
import BasicExhibition from "@/components/BasicExhibition";
export default {
  components: { BasicExhibition },
  head() {
    return {
      title: this.$t("exhibitions"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("exhibitions")
        },
        {
          property: "og:title",
          content: this.$t("exhibitions"),
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
