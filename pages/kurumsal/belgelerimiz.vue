<template>
  <BasicCertificate :name="name" imageUrl="https://via.placeholder.com/250" :imageAlt="imageAlt"></BasicCertificate>
</template>
<i18n>
{
  "tr":{
    "certs":"Belgelerimiz"
  },
  "en":{
    "certs":"Certificates"
  }
}
</i18n>
<script>
import BasicCertificate from "@/components/BasicCertificate";
export default {
  components: { BasicCertificate },
  data() {
    return {
      name: {
        tr: "Kalite Belgesi - ISO 9001:2005",
        en: "Quality Certificate - ISO 9001:2005"
      },
      imageAlt: {
        tr: "yertutucu",
        en: "placeholder"
      }
    };
  },
  head() {
    return {
      title: this.$t("certs"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("certs")
        },
        {
          property: "og:title",
          content: this.$t("certs"),
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
