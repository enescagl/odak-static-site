<template>
  <div>
    <h2 class="text-sm text-gray-700 font-semibold">{{name}}</h2>
    <img class="block mx-auto mt-4" :src="imageUrl" :alt="imageAlt" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    imageUrl: String,
    imageAlt: String
  }
};
</script>

<style>
</style>
