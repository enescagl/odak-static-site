<template>
  <div class="mt-8 flex-shrink-0 w-2/5 sm:w-1/5">
    <div class="text-gray-600">
      <svg
        class="w-12 h-12"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        v-html="svgPathTemplate"
      />
    </div>
    <div class="mt-3">
      <p class="text-left text-xs text-gray-700 font-semibold sm:text-sm lg:text-base">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    svgPathTemplate: String
  }
};
</script>

<style>
</style>
