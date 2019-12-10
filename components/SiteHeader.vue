<template>
  <header class="px-6 py-2 flex justify-between items-center sm:px-12 sm:py-4 lg:px-24">
    <nuxt-link :to="localePath({name:'index'})">
      <img class="w-32 object-cover" src="../static/img/odak_logo.png" alt="Odak Makina Logo" />
    </nuxt-link>
    <div class="hidden relative lg:flex lg:block mt-2 text-gray-600 text-sm font-semibold">
      <ul class="block flex">
        <li class="hover:text-gray-700">
          <nuxt-link :to="localePath({ name: 'index' })">{{$t("home")}}</nuxt-link>
        </li>
        <li class="ml-6 hover:text-gray-700">
          <nuxt-link :to="localePath({ name: 'kurumsal' })">{{$t("corp")}}</nuxt-link>
        </li>
        <li class="ml-6 hover:text-gray-700">
          <nuxt-link :to="localePath({ name: 'haberler' })">{{$t("news")}}</nuxt-link>
        </li>
        <li class="ml-6 hover:text-gray-700">
          <nuxt-link :to="localePath({ name: 'iletisim' })">{{$t("contact")}}</nuxt-link>
        </li>
      </ul>
      <ul class="ml-16 flex">
        <li
          class="ml-6 first:ml-0 hover:text-gray-700"
          v-for="locale in allLocales"
          :key="locale.code"
        >
          <nuxt-link :to="switchLocalePath(locale.code)">{{locale.name}}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="relative z-10 lg:hidden">
      <button @click="menuOpen = !menuOpen">
        <svg
          class="w-6 h-6 text-gray-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5ZM4 11H20C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12C21 12.2652 20.8946 12.5196 20.7071 12.7071C20.5196 12.8946 20.2652 13 20 13H4C3.73478 13 3.48043 12.8946 3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11ZM4 17H20C20.2652 17 20.5196 17.1054 20.7071 17.2929C20.8946 17.4804 21 17.7348 21 18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18C3 17.7348 3.10536 17.4804 3.29289 17.2929C3.48043 17.1054 3.73478 17 4 17Z"
          />
        </svg>
      </button>
      <div :class="menuOpen ? 'block' : 'hidden'">
        <div class="pl-10 pr-6 z-10 w-48 fixed inset-y-0 right-0 bg-gray-200 sm:pr-12 sm:w-64">
          <div class="text-right mt-5 sm:mt-8">
            <button @click="menuOpen = !menuOpen">
              <svg
                class="w-6 h-6 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.24 14.83C16.4038 15.0213 16.4894 15.2674 16.4797 15.519C16.47 15.7707 16.3656 16.0095 16.1876 16.1876C16.0095 16.3656 15.7707 16.47 15.519 16.4797C15.2674 16.4894 15.0213 16.4038 14.83 16.24L12 13.41L9.16999 16.24C8.97869 16.4038 8.73261 16.4894 8.48094 16.4797C8.22926 16.47 7.99052 16.3656 7.81243 16.1876C7.63433 16.0095 7.53 15.7707 7.52028 15.519C7.51056 15.2674 7.59616 15.0213 7.75999 14.83L10.59 12L7.75999 9.16999C7.59616 8.97869 7.51056 8.73261 7.52028 8.48094C7.53 8.22926 7.63433 7.99052 7.81243 7.81243C7.99052 7.63433 8.22926 7.53 8.48094 7.52028C8.73261 7.51056 8.97869 7.59616 9.16999 7.75999L12 10.59L14.83 7.75999C15.0213 7.59616 15.2674 7.51056 15.519 7.52028C15.7707 7.53 16.0095 7.63433 16.1876 7.81243C16.3656 7.99052 16.47 8.22926 16.4797 8.48094C16.4894 8.73261 16.4038 8.97869 16.24 9.16999L13.41 12L16.24 14.83Z"
                />
              </svg>
            </button>
          </div>
          <div class="mt-2 text-gray-600 text-sm font-semibold">
            <ul>
              <li>
                <nuxt-link
                  @click.native="menuOpen = !menuOpen"
                  :to="localePath({ name: 'index' })"
                >{{$t("home")}}</nuxt-link>
              </li>
              <li class="mt-6">
                <nuxt-link
                  @click.native="menuOpen = !menuOpen"
                  :to="localePath({ name: 'kurumsal' })"
                >{{$t("corp")}}</nuxt-link>
              </li>
              <li class="mt-6">
                <nuxt-link
                  @click.native="menuOpen = !menuOpen"
                  :to="localePath({ name: 'haberler' })"
                >{{$t("news")}}</nuxt-link>
              </li>
              <li class="mt-6">
                <nuxt-link
                  @click.native="menuOpen = !menuOpen"
                  :to="localePath({ name: 'iletisim' })"
                >{{$t("contact")}}</nuxt-link>
              </li>
              <ul class="flex mt-16">
                <li class="last:ml-4" v-for="locale in allLocales" :key="locale.code">
                  <nuxt-link
                    @click.native="menuOpen = !menuOpen"
                    :to="switchLocalePath(locale.code)"
                  >{{locale.name}}</nuxt-link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div class="fixed inset-0 bg-gray-800 opacity-50">
          <button class="h-full w-full" @click="menuOpen = !menuOpen"></button>
        </div>
      </div>
    </div>
  </header>
</template>
<i18n>
{
    "tr": {
      "home": "Ana Sayfa",
      "corp": "Kurumsal",
      "news": "Haberler",
      "contact": "İletişim"
    },
    "en": {
      "home": "Home",
      "corp": "Corporate",
      "news": "News",
      "contact": "Contact"
    }
}

</i18n>
<script>
export default {
  name: "SiteHeader",
  data() {
    return { menuOpen: false, langMenuOpen: true };
  },
  methods: {
    getLocaleName(code) {
      return this.$root._i18n.locales.filter(locale => locale.code === code)[0]
        .name;
    }
  },

  computed: {
    allLocales() {
      return this.$root._i18n.locales;
    },
    availableLocales() {
      return this.$root._i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      );
    },
    allLocales() {
      return this.$root._i18n.locales;
    }
  }
};
</script>

<style></style>
