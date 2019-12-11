<template>
  <div>
    <h2 class="text-sm text-gray-700 font-semibold">{{$t("header")}}</h2>
    <p class="mt-4 text-xs text-gray-700" v-html="$t('body')">
      1983 yılında kurulmuş olan firmamız İş Makinası sektöründe hizmet vermektedir.
      İş makinaları konusunda 34 yıllık tecrübeye sahip kişilerden oluşan firmamızın kurucuları ve teknik kadrosu , birikimlerini Odak İş Makinaları çatısı altında siz değerli müşterilerine sunmaktan gurur duymaktadır.
      Firmamız Komatsu, Cat, Daewoo, Hidromek, Hyundai, JCB, Kawasaki, Liebheri, New Holland, Sumitomo, Volvo, Hitachi markalarının pim ve burç imalatı geçekleştiren Odak Makina portföyündeki aralarında 90.000 ürün çeşidi ve üretim kalitesi ile sektöründe lider konumundadır.
      Yılda 180.000’i aşkın pim, burç, keçe, oring, shim, danagözü bilya, somun ve poliamid üretim kapasitesine sahiptir.
    </p>
  </div>
</template>
<i18n>
{
  "tr":{
    "about": "Hakkımızda",
    "header": "Hakkımızda",
    "body": "1983 yılında kurulmuş olan firmamız İş Makinası sektöründe hizmet vermektedir. İş makinaları konusunda 34 yıllık tecrübeye sahip kişilerden oluşan firmamızın kurucuları ve teknik kadrosu , birikimlerini Odak İş Makinaları çatısı altında siz değerli müşterilerine sunmaktan gurur duymaktadır. Firmamız <span class='font-semibold'> Komatsu, Cat, Daewoo, Hidromek, Hyundai, JCB, Kawasaki, Liebheri, New Holland, Sumitomo, Volvo, Hitachi </span>  markalarının pim ve burç imalatı geçekleştiren Odak Makina portföyündeki aralarında 90.000 ürün çeşidi ve üretim kalitesi ile sektöründe lider konumundadır. Yılda 180.000’i aşkın pim, burç, keçe, oring, shim, danagözü bilya, somun ve poliamid üretim kapasitesine sahiptir."
    },
  "en":{
    "about":"About",
    "header": "About Us",
    "body": "Established in 1983, our company serves in the construction machinery sector. The founders and technical staff of our company, which consists of people with 34 years of experience in construction machinery, is proud to present its savings to our valuable customers under the roof of Odak Construction Machinery. Our company is the leader in its sector with 90.000 product range and production quality among <span class='font-semibold'> Komatsu, Cat, Daewoo, Hidromek, Hyundai, JCB, Kawasaki, Liebheri, New Holland, Sumitomo, Volvo and Hitachi </span> brands. It has a production capacity of more than 180.000 pins, bushings, felts, orings, shims, ball bearings, nuts and polyamide per year."
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
