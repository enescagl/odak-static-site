<template>
  <div class="bg-gray-200 min-h-screen flex flex-col justify-between">
    <site-header></site-header>
    <nuxt class="flex-1" />
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
export default {
  components: {
    SiteHeader,
    SiteFooter
  }
};
</script>


<style>
</style>
