<template>
  <div>
    <h2 class="text-sm text-gray-700 font-semibold">Hakkımızda</h2>
    <p class="mt-4 text-xs text-gray-700">
      1983 yılında kurulmuş olan firmamız İş Makinası sektöründe hizmet vermektedir. İş makinaları konusunda 34 yıllık tecrübeye sahip kişilerden oluşan firmamızın kurucuları ve teknik kadrosu , birikimlerini Odak İş Makinaları çatısı altında siz değerli müşterilerine sunmaktan gurur duymaktadır. Firmamız
      <span
        class="font-semibold"
      >Komatsu, Cat, Daewoo, Hidromek, Hyundai, JCB, Kawasaki, Liebheri, New Holland, Sumitomo, Volvo, Hitachi</span> markalarının pim ve burç imalatı geçekleştiren Odak Makina portföyündeki aralarında 90.000 ürün çeşidi ve üretim kalitesi ile sektöründe lider konumundadır. Yılda 180.000’i aşkın pim, burç, keçe, oring, shim, danagözü bilya, somun ve poliamid üretim kapasitesine sahiptir.
    </p>
  </div>
</template>
<i18n>
{
  "tr":{
    "about":"Hakkımızda"
  },
  "en":{
    "about":"About"
  }
}
</i18n>
<script>
export default {
  name: "hakkimizda",
  head() {
    return {
      title: this.$t("about"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("about")
        },
        {
          property: "og:title",
          content: this.$t("about"),
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
