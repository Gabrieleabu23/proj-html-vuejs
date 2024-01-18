<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
  <section class="bg_red_header">
    <div class="container header_width h-100">
      <div class="row justify-content-between h-100 align-items-center">
        <div class="col-4 h-100">
          <div class="d-flex h-100">
            <div class="h-100 bg_gray_news d-flex align-items-center">
              <h6 class="p-4 text-light">NEWS UPDATES</h6>
              <img
                src="../assets/anime/assets/winter-150x150.webp"
                class="img_container"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="d-flex justify-content-between  align-items-center">
            <div class="col-7">
              <div class="d-flex gap-4 justify-content-center">
                <i class="fa-solid icone_back-after fa-chevron-left"></i>
                <i class="fa-solid icone_back-after fa-chevron-right"></i>
              </div>
            </div>
            <div class="d-flex align-items-center gap-3">
              <span class="container_social rounded-circle p-2"
                ><i class="fa-brands fa-facebook-f"></i
              ></span>
              <span class="container_social rounded-circle"
                ><i class="fa-brands fa-twitter"></i
              ></span>
              <span class="container_social rounded-circle"
                ><i class="fa-brands fa-instagram"></i
              ></span>
              <span class="container_social rounded-circle"
                ><i class="fa-brands fa-youtube"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--ROUTER VUE  -->
  <!-- <div class="d-flex gap-2">
    <router-link :to="{ name: 'home' }" class="">home</router-link>
    <router-link :to="{ name: 'about' }">about</router-link>
    <router-link :to="{ name: 'contact' }">contact</router-link>
  </div> -->
  <section>
    <div class="container header_width p-4 pb-2">
      <div class="row align-items-center justify-content-between h-100">
        <div class="col-3 ps-0">
          <div class="container_logo">
            <img src="../assets/anime/assets/anime-logo.webp" alt="" />
          </div>
        </div>
        <div class="col-auto pe-0">
          <img
            src="../assets/anime/assets/header-banner.webp"
            class="rounded"
            alt=""
          />
        </div>
      </div>
    </div>
    <hr class="mt-2 mb-2">
  </section>
  <section>
    <div class="container header_width my-2">
      <div class="row align-items-center justify-content-between h-100">
        <div class="col-auto">
          <div class="d-flex align-items-center h-100"><i class="fa-solid fa-bars fs-2" ></i></div>
        </div>
        <div class="col-auto">
          <ul class="d-flex  align-items-center h-100 justify-content-center gap-3">
            <li><i class="fa-solid fa-house me-2"></i>
              <router-link :to="{ name: 'home' }" class="fw-bold text-decoration-none" :class="{ 'active-link': $route.path === '/' }">HOME</router-link>
            </li>
            <li><i class="fa-solid fa-user me-2"></i>
              <router-link :to="{ name: 'about' }" class="fw-bold text-decoration-none" :class="{ 'active-link': $route.path === '/about' }">ABOUT US</router-link>
            </li>
            <li role="button"><i class="fa-solid fa-suitcase me-2"></i>
              <span class="fw-bold text-decoration-none">LIFESTYLE</span>
            </li>
            <li role="button"><i class="fa-solid fa-book-open-reader me-2"></i>
              <span class="fw-bold text-decoration-none">STORIES</span>
            </li>
            <li role="button"><i class="fa-solid fa-suitcase me-2"></i>
              <span class="fw-bold text-decoration-none">PAGES</span>
            </li>
            <li><i class="fa-solid fa-envelope me-2"></i>
              <router-link :to="{ name: 'contact' }" class="fw-bold text-decoration-none" :class="{ 'active-link': $route.path === '/contact' }">CONTACT US</router-link>
            </li>
          </ul>
        </div>
        <div class="col-1">
          <div class="d-flex justify-content-end align-items-center h-100"><i class="fa-solid fa-magnifying-glass fs-2 ps-2"></i></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

// HEADER TOP

.bg_red_header {
  background-color: $red_header_footer;
  height: 40px;
  .bg_gray_news {
    background-color: $subscribe_button;
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
}
.icone_back-after {
  color: white;
  &:hover {
    cursor: pointer;
    color: black;
  }
}
.container_social {
  height: 30px;
  width: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    color: $red_header_footer;
  }
  &:hover {
    cursor: pointer;
    background-color: $subscribe_button;
    i {
      color: #f8e8ea;
    }
  }
}

// HEADER DOWN

.active-link{
  color: $red_header_footer;
}
hr{
  border-color: $border_grey_header;
}
ul{
    li a{
      color: black;
      &:hover{
        color:$red_header_footer;
      }
    }
}
.col-3{
  i{
    margin-right: 40px;
  }
}
</style>
