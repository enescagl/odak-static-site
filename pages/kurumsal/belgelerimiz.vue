<template>
  <div class="flex flex-wrap">
    <BasicCertificate
      class="mt-8 first:mt-0 md:w-64 md:mt-0 md:mx-2 md:my-2"
      v-for="(cert, index) in certs"
      :key="index"
      :name="cert.name"
      :imageUrl="cert.imageUrl"
      :imageAlt="cert.imageAlt"
    ></BasicCertificate>
  </div>
</template>

<script>
import BasicCertificate from "@/components/BasicCertificate";
export default {
  components: { BasicCertificate },
  data() {
    return {
      certs: [
        {
          name: {
            tr: "Kalite Belgesi - ISO 9001:2005",
            en: "Quality Certificate - ISO 9001:2005"
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
