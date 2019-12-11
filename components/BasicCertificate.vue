<template>
  <div>
    <h2 class="text-sm text-gray-700 font-semibold">{{$t("name")}}</h2>
    <img class="block mx-auto mt-4" :src="imageUrl" :alt="$t('imageAlt')" />
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    messages: {
      tr: { name: this.name.tr, imageAlt: this.imageAlt.tr },
      en: { name: this.name.en, imageAlt: this.imageAlt.en }
    }
  },
  props: {
    name: Object,
    imageUrl: String,
    imageAlt: Object
  }
};
</script>

<style>
</style>
