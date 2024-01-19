<template>
  <div>
    <div class="mySwiper">
      <swiper
        slidesPerView="4"
        :loop="true"
        :speed="1500"
        :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter:true
    }"
        :spaceBetween="10"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }"
        :modules="modules"
        ref="mySwiper"
        class="swiper-container position-relative"
      >
        <swiper-slide
          v-for="(anime, index) in store.animeList"
          :key="index"
          
        >
          <div class="card border-0">
            <div class="img_container">
              <img :src="anime.path" class="card-img-top" alt="..." />
              <div class="card-img-overlay text-center">
                <div>
                  <button
                    v-for="(el, index) in store.animeList[index].category"
                    :key="index"
                    type="button"
                    class="btn mx-2"
                  >
                    {{ el }}
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">
                <a href="" class="text-decoration-none">{{ anime.title }}</a>
              </h5>
              <p class="card-text">{{ anime.date }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next custom-next rounded-circle">
        <!-- Replace with your next button icon (Font Awesome example) -->
        <i class="fas fa-chevron-right"></i>
      </div>
      <div class="swiper-button-prev custom-prev rounded-circle">
        <!-- Replace with your prev button icon (Font Awesome example) -->
        <i class="fas fa-chevron-left"></i>
      </div>
    </div>

    <!-- Navigation Buttons -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/grid'

import 'swiper/css/navigation' // Import navigation styles
import 'bootstrap/dist/css/bootstrap.css' // Import Bootstrap CSS
import { Navigation, Autoplay } from 'swiper/modules'
import { store } from '../store'

export default {
  name: 'MyCarousel',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation, Autoplay],
      store
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;
.btn {
  padding: 2px 15px;
  background-color: white;
  color: black;
  border: white;
  &:hover {
    color: $red_header_footer;
    background-color: white;
  }
}
.btn:first-child:active {
  color: $red_header_footer;
  background-color: white;
  border-color: white;
}
.card-img-overlay{
  height: fit-content;
}
.img_container {
  width: 100%;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card-body{
  cursor: pointer;
  a{
    color: black;
    &:hover{
      color: red;
    }
  }
  p{
    &:hover{
      color: red;
    }
  }
}

.card-title {
  font-size: 16px;
}

.mySwiper {
  padding: 30px;
  background-color: $carousel_bg_grey;
  position: relative;
}

.swiper-container {
  max-width: 100%; /* Set the desired maximum width for the container */
}

.custom-next,
.custom-prev {
  position: absolute;
  top: 45%;
  width: 35px; /* Set the desired width */
  height: 35px; /* Set the desired height */
  background-color: white;
  color: $red_header_footer;
  cursor: pointer;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  &:hover {
    background-color: $red_header_footer;
    color: white;
  }
}

.custom-next {
  right: 50px; /* Adjust the distance from the right as needed */
}

.custom-prev {
  left: 50px; /* Adjust the distance from the left as needed */
}

.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}
</style>
