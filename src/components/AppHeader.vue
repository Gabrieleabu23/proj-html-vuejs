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
          <div class="d-flex justify-content-evenly gap-4 align-items-center">
            <div class="d-flex gap-4">
              <i class="fa-solid icone_back-after fa-chevron-left"></i>
              <i class="fa-solid icone_back-after fa-chevron-right"></i>
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
  
  <div class="d-flex gap-2">
    <router-link :to="{ name: 'home' }" class="">home</router-link>
    <router-link :to="{ name: 'about' }">about</router-link>
    <router-link :to="{ name: 'contact' }">contact</router-link>
  </div>
    
 
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

// HEADER

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
</style>
