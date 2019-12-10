<template>
  <BasicCertificate
    name="Kalite Belgesi - ISO 9001:2005"
    imageUrl="https://via.placeholder.com/250"
    imageAlt="placeholder"
  ></BasicCertificate>
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
