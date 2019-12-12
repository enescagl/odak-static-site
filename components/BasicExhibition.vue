<template>
  <div>
    <h2 class="text-sm text-gray-700 font-semibold">{{translatedName}}</h2>
    <img class="block mx-auto mt-4" :src="imageUrl" :alt="translatedAlt" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    imageUrl: String,
    imageAlt: String
  },
  computed: {
    translatedName() {
      return this.name[this.$i18n.locale];
    },
    translatedAlt() {
      return this.imageAlt[this.$i18n.locale];
    }
  }
};
</script>

<style>
</style>
