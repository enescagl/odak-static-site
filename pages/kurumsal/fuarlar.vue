<template>
  <div class="md:flex md:flex-wrap">
    <BasicExhibition
      class="mt-8 first:mt-0 md:w-64 md:mt-0 md:mx-2 md:my-2"
      v-for="(exhibition, index) in exhibitions"
      :name="exhibition.name"
      :imageUrl="exhibition.imageUrl"
      :imageAlt="exhibition.imageAlt"
      :key="index"
    ></BasicExhibition>
  </div>
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
  data() {
    return {
      exhibitions: [
        {
          name: {
            tr: "Fuar - Suudi Arabistan IEEF 2015",
            en: "Exhibitions - Suudi Arabistan IEEF 2015"
          },
          imageAlt: {
            tr: "yertutucu",
            en: "placeholder"
          },
          imageUrl:
            "http://odakmakina.net/wp-content/uploads/2016/09/Resim2.jpg"
        }
      ]
    };
  },
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
