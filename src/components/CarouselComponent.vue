<template>
<div>

  <swiper
            class="swiper"
            :options="this.swiperOption"
          >
            <swiper-slide
              :class="this.noSwiper"
              class="drop-list-group"
              v-for="data in this.swiperDataList"
              :key="data.id"
            >
              <slot name="swiper-data"></slot>
            </swiper-slide>

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
</div>
</template>

<script>
import "swiper/css/swiper.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
export default {
  name: 'HelloWorld',
  props: {
    swiperOption: {},
    swiperDataList: [],
    noSwiper: String
  },
  component: {
    VueAwesomeSwiper
  }
}
</script>
