<template>
  <div>
    <div class="relative h-64 sm:h-96 lg:h-128">
      <div class="absolute inset-0 bg-blue-700 opacity-50 mx-auto"></div>
      <img class="object-cover h-full mx-auto" src="../static/img/slider_2.jpg" alt />
    </div>
    <div class="flex justify-end relative -mt-6 px-6 sm:px-12 lg:px-24">
      <nuxt-link
        :to="localePath({name:'urunler-pim'})"
        class="relative shadow overflow-hidden rounded w-20 h-20 bg-blue-500 sm:w-48 sm:h-24 lg:w-64 lg:h-32"
      >
        <div class="relative w-full h-full object-cover">
          <div class="absolute inset-0 bg-blue-700 opacity-50 mx-auto"></div>
          <img class="w-full h-full object-cover" src="../static/img/pim.jpg" alt="Pin Image" />
        </div>
        <span
          class="absolute bottom-0 right-0 mr-2 text-red-100 text-base font-semibold sm:text-lg sm:mr-4 sm:mb-2"
        >{{$t('pin')}}</span>
      </nuxt-link>
      <nuxt-link
        :to="localePath({name:'urunler-burc'})"
        class="relative shadow overflow-hidden rounded ml-4 w-20 h-20 bg-red-500 sm:w-48 sm:h-24 lg:w-64 lg:h-32"
      >
        <div class="relative w-full h-full object-cover">
          <div class="absolute inset-0 bg-red-700 opacity-50 mx-auto"></div>
          <img class="w-full h-full object-cover" src="../static/img/burc.jpg" alt="Pin Image" />
        </div>
        <span
          class="absolute bottom-0 right-0 mr-2 text-blue-100 text-base font-semibold sm:text-lg sm:mr-4 sm:mb-2"
        >{{$t('bushing')}}</span>
      </nuxt-link>
    </div>
    <div class="flex flex-wrap justify-between px-8 py-10 sm:px-12 lg:px-24">
      <IndexCard
        class="flex-shrink-0 flex-grow-0"
        v-for="(cardInfo,id) in cardInfos"
        :svgPathTemplate="cardInfo.svgPath"
        :text="cardInfo.text"
        :key="id"
      ></IndexCard>
    </div>
  </div>
</template>
<i18n>
{
  "tr":{
    "pin":"Pim",
    "bushing":"Burç",
    "quality":"Kalite öncelikli çalışmalarımız ile siz müşterilerimizin isteklerini karşılıyoruz.",
    "worker":"Alanında uzman çalışanlarımızla isteklerinizi zamanında ve yüksek kaliteyle yerine getiriyoruz.",
    "global":"Sizlerin sayesinde ürünlerimizi tüm dünyaya ihraç ediyoruz.",
    "sales": "Satış öncesi ve sonrası müşteri odaklı çözümlerimizle sizlerin memnuniyetini gözetiyoruz."
  },
  "en":{
    "pin":"Pin",
    "bushing":"Bushing",
    "quality":"We meet the demands of our customers with our quality priority works.",
    "worker":"We fulfill your wishes in a timely manner and with high quality with our expert staff.",
    "global":"Thanks to you, we export our products all over the world.",
    "sales": "We provide your satisfaction with our customer-oriented solutions before and after sales."
  }
}
</i18n>

<script>
import IndexCard from "@/components/IndexCard";
export default {
  components: { IndexCard },
  head() {
    return {
      title: "Odak Makina - Pim & Burç",
      titleTemplate: null,
      meta: [
        {
          property: "og:title",
          content: "Odak Makina",
          // following template options are identical
          // template: '%s - My page',
          template: chunk => `${chunk} - Pim & Burç`,
          vmid: "og:title"
        }
      ]
    };
  },
  data() {
    return {
      cardInfos: [
        {
          text: this.$t("worker"),
          svgPath:
            "<path d='M9.87,12.15L9,6.46C10.95,5.84 13.05,5.84 15,6.46L14.13,12.15C14.06,12.64 13.63,13 13.13,13H10.86C10.37,13 9.94,12.64 9.87,12.15M22,16V16C22,15.21 21.53,14.5 20.8,14.17C20.32,11.86 18.96,9.83 17,8.5L15.24,13.34C15.1,13.74 14.72,14 14.3,14H9.7C9.28,14 8.9,13.74 8.76,13.34L7,8.5C5.04,9.83 3.68,11.86 3.2,14.16C2.47,14.5 2,15.2 2,16L8.45,17.84C8.81,17.94 9.18,18 9.55,18H14.43C14.8,18 15.17,17.94 15.53,17.84L22,16Z' />"
        },
        {
          text: this.$t("sales"),
          svgPath:
            "<path d='M9 12C7.67392 12 6.40215 11.4732 5.46447 10.5355C4.52678 9.59785 4 8.32608 4 7C4 5.67392 4.52678 4.40215 5.46447 3.46447C6.40215 2.52678 7.67392 2 9 2C10.3261 2 11.5979 2.52678 12.5355 3.46447C13.4732 4.40215 14 5.67392 14 7C14 8.32608 13.4732 9.59785 12.5355 10.5355C11.5979 11.4732 10.3261 12 9 12ZM9 10C9.39397 10 9.78407 9.9224 10.1481 9.77164C10.512 9.62087 10.8427 9.3999 11.1213 9.12132C11.3999 8.84274 11.6209 8.51203 11.7716 8.14805C11.9224 7.78407 12 7.39397 12 7C12 6.60603 11.9224 6.21593 11.7716 5.85195C11.6209 5.48797 11.3999 5.15726 11.1213 4.87868C10.8427 4.6001 10.512 4.37913 10.1481 4.22836C9.78407 4.0776 9.39397 4 9 4C8.20435 4 7.44129 4.31607 6.87868 4.87868C6.31607 5.44129 6 6.20435 6 7C6 7.79565 6.31607 8.55871 6.87868 9.12132C7.44129 9.68393 8.20435 10 9 10ZM16 21C16 21.2652 15.8946 21.5196 15.7071 21.7071C15.5196 21.8946 15.2652 22 15 22C14.7348 22 14.4804 21.8946 14.2929 21.7071C14.1054 21.5196 14 21.2652 14 21V19C14 18.2044 13.6839 17.4413 13.1213 16.8787C12.5587 16.3161 11.7956 16 11 16H7C6.20435 16 5.44129 16.3161 4.87868 16.8787C4.31607 17.4413 4 18.2044 4 19V21C4 21.2652 3.89464 21.5196 3.70711 21.7071C3.51957 21.8946 3.26522 22 3 22C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V19C2 17.6739 2.52678 16.4021 3.46447 15.4645C4.40215 14.5268 5.67392 14 7 14H11C12.3261 14 13.5979 14.5268 14.5355 15.4645C15.4732 16.4021 16 17.6739 16 19V21ZM17 16C16.7348 16 16.4804 15.8946 16.2929 15.7071C16.1054 15.5196 16 15.2652 16 15C16 14.7348 16.1054 14.4804 16.2929 14.2929C16.4804 14.1054 16.7348 14 17 14C18.3261 14 19.5979 14.5268 20.5355 15.4645C21.4732 16.4021 22 17.6739 22 19V21C22 21.2652 21.8946 21.5196 21.7071 21.7071C21.5196 21.8946 21.2652 22 21 22C20.7348 22 20.4804 21.8946 20.2929 21.7071C20.1054 21.5196 20 21.2652 20 21V19C20 18.2044 19.6839 17.4413 19.1213 16.8787C18.5587 16.3161 17.7956 16 17 16ZM15 12C14.7348 12 14.4804 11.8946 14.2929 11.7071C14.1054 11.5196 14 11.2652 14 11C14 10.7348 14.1054 10.4804 14.2929 10.2929C14.4804 10.1054 14.7348 10 15 10C15.7956 10 16.5587 9.68393 17.1213 9.12132C17.6839 8.55871 18 7.79565 18 7C18 6.20435 17.6839 5.44129 17.1213 4.87868C16.5587 4.31607 15.7956 4 15 4C14.7348 4 14.4804 3.89464 14.2929 3.70711C14.1054 3.51957 14 3.26522 14 3C14 2.73478 14.1054 2.48043 14.2929 2.29289C14.4804 2.10536 14.7348 2 15 2C16.3261 2 17.5979 2.52678 18.5355 3.46447C19.4732 4.40215 20 5.67392 20 7C20 8.32608 19.4732 9.59785 18.5355 10.5355C17.5979 11.4732 16.3261 12 15 12Z'/>"
        },
        {
          text: this.$t("quality"),
          svgPath:
            "<path d='M6.3 12.3L16.3 2.29999C16.4869 2.11676 16.7382 2.01413 17 2.01413C17.2618 2.01413 17.5131 2.11676 17.7 2.29999L21.7 6.29999C21.8832 6.48692 21.9859 6.73823 21.9859 6.99999C21.9859 7.26174 21.8832 7.51306 21.7 7.69999L11.7 17.7C11.5154 17.8884 11.2638 17.9962 11 18H7C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17V13C6.00376 12.7362 6.11159 12.4846 6.3 12.3ZM8 16H10.59L19.59 6.99999L17 4.40999L8 13.41V16ZM18 14C18 13.7348 18.1054 13.4804 18.2929 13.2929C18.4804 13.1053 18.7348 13 19 13C19.2652 13 19.5196 13.1053 19.7071 13.2929C19.8946 13.4804 20 13.7348 20 14V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V5.99999C2 4.89999 2.9 3.99999 4 3.99999H10C10.2652 3.99999 10.5196 4.10534 10.7071 4.29288C10.8946 4.48042 11 4.73477 11 4.99999C11 5.2652 10.8946 5.51956 10.7071 5.70709C10.5196 5.89463 10.2652 5.99999 10 5.99999H4V20H18V14Z'/>"
        },
        {
          text: this.$t("global"),
          svgPath:
            "<path d='M4.06 13C4.24338 14.4558 4.82361 15.8331 5.73721 16.9813C6.65082 18.1295 7.8626 19.0043 9.24 19.51C8.44503 17.4311 8.03174 15.2257 8.02 13H4.06ZM4.06 11H8.02C8.03174 8.77428 8.44503 6.56894 9.24 4.49C7.8626 4.99572 6.65082 5.87052 5.73721 7.0187C4.82361 8.16687 4.24338 9.5442 4.06 11ZM19.94 11C19.7566 9.5442 19.1764 8.16687 18.2628 7.0187C17.3492 5.87052 16.1374 4.99572 14.76 4.49C15.555 6.56894 15.9683 8.77428 15.98 11H19.94ZM19.94 13H15.98C15.9683 15.2257 15.555 17.4311 14.76 19.51C16.1374 19.0043 17.3492 18.1295 18.2628 16.9813C19.1764 15.8331 19.7566 14.4558 19.94 13ZM10.02 13C10.18 16.95 11.25 20 12 20C12.75 20 13.82 16.95 13.98 13H10.02ZM10.02 11H13.98C13.82 7.05 12.75 4 12 4C11.25 4 10.18 7.05 10.02 11ZM12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22Z'/>"
        }
      ]
    };
  }
};
</script>

<style>
</style>
