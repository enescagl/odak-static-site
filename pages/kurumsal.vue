<template>
  <div class="sm:flex sm:px-24">
    <div class="sm:pb-20">
      <div class="flex justify-between bg-gray-400 sm:flex-col sm:py-2 sm:rounded-sm">
        <nuxt-link
          class="py-5 px-6 border-r last:border-r-0 sm:border-none sm:py-4 sm:px-5 hover:bg-gray-500 active:bg-gray-600"
          v-for="link in links"
          :key="link.id"
          :to="localePath({name:link.route})"
        >
          <span
            class="block text-center tracking-wide font-medium text-xs sm:text-sm text-gray-800"
          >{{$t(link.name)}}</span>
        </nuxt-link>
      </div>
    </div>
    <nuxt-child class="mt-6 mb-24 sm:mt-0 sm:mb-0 sm:ml-12" />
  </div>
</template>

<i18n>
{
  "tr":{
    "certs": "Belgelerimiz",
    "exhibitions": "Fuarlar",
    "about": "Hakkımızda"
    },
  "en":{
    "certs": "Certificates",
    "exhibitions": "Exhibitions",
    "about": "About Us"
    }
}
</i18n>
<script>
export default {
  name: "kurumsal",
  head() {
    return {
      title: "Kurumsal",
      meta: [
        {
          property: "og:title",
          content: "Odak Makina",
          // following template options are identical
          // template: '%s - My page',
          vmid: "og:title"
        }
      ]
    };
  },

  data() {
    return {
      links: [
        {
          id: 1,
          name: "about",
          route: "kurumsal-hakkimizda"
        },
        {
          id: 2,
          name: "certs",
          route: "kurumsal-belgelerimiz"
        },
        {
          id: 3,
          name: "exhibitions",
          route: "kurumsal-fuarlar"
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>

<style>
</style>
