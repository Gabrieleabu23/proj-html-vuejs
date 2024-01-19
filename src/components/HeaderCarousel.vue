<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation' // Import navigation styles

import { Navigation, Autoplay,EffectFade } from 'swiper/modules'
import { store } from '../store'

export default {
  name: 'HeaderCarousel',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation,EffectFade, Autoplay],
      store,
      time:[]
      
    }
  },
  methods: {
  TimeAndTitle() {
    this.store.animeList.forEach((element) => {
      if (element.time !== undefined) {
        this.time.push({time: element.time, img: element.path,title: element.title})
      } 
    });
    console.log(this.time)
  },
},
  created(){
    this.TimeAndTitle();
  }
};
</script>

<template>
    <div class="h-100">
      <swiper
        slidesPerView="1"
        :loop="true"
        :autoplay="{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :spaceBetween="10"
        :navigation="true"
        :modules="modules"
        class="h-100 "
        ref="mySwiper"
      >
        <swiper-slide
          v-for="(anime, index) in this.time"
          :key="index"
          class="swiper-slide d-flex justify-content-start align-items-center h-100"
        >
            <div class="img_container position-relative">
                <div class="triangolo position-absolute"></div>
                <img :src="anime.img" class="h-100 w-100" alt="" />
            </div>
          <span class="ps-2 text-light">{{ anime.time }}</span>
          <h6 class=" text-light text-uppercase ps-2">{{ anime.title }}</h6>
        </swiper-slide>
      </swiper>
    </div>
  </template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.triangolo {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid $red_header_footer;
  top: 35%;
  transform: rotate(-90deg);
  left: -12%;
}


h6{
    font-size: 14px;
}
.img_container {
    width: 40px;
    height: 40px;
    border: none;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

.mySwiper {
  width: 400px;
}
</style>
