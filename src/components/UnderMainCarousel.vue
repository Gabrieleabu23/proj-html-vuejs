<script>

import { store } from '../store'
export default {
  name: 'UnderMainCarousel',
  data(){
  return{
  store
  }
  }
}
</script>

<template>
    <div class="container header_width my-5  ">
            <div class="row mb-5 gap-sm-2 gap-2 gap-md-0">
                <div class="col-lg-3 col-md-12">
                    <div class="row h-100 gap-lg-2 gap-sm-2 gap-2 gap-md-0" >
                        <div class="col-lg-12 col-md-6 col-sm-12  px-md-1">
                            <div class="card  shadow h-100 text-bg-dark">
                                <img :src="store.animeList[11].path" class="card-img h-100" alt="...">
                                <div class="card-img-overlay text-center">
                                    <div>
                                        <button v-for="(el, index) in store.animeList[11].category" :key="index" type="button" class="btn btn-primary  mx-2">
                                            {{ el }}
                                        </button> 
                                    </div>

                                    <div>
                                        <div>
                                            <span class="mx-2"> <i class="fa-solid fa-user"></i> {{ store.animeList[11].user }}</span>
                                            <span><i class="fa-solid fa-calendar-days"></i> {{ store.animeList[11].date }}</span>
                                        </div>
                                        <div>
                                            <span class="text-uppercase">{{store.animeList[11].title}}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6  col-sm-12 px-md-1">
                            <div class="card text-bg-dark h-100">
                                <img :src="store.animeList[7].path" class="card-img h-100" alt="...">
                                <div class="card-img-overlay text-center">
                                    <div>
                                        <button v-for="(el, index) in store.animeList[7].category" :key="index" type="button" class="btn btn-primary  mx-2">
                                            {{ el }}
                                        </button> 
                                    </div>
                                    <div>
                                        <div>
                                            <span class="mx-2"> <i class="fa-solid fa-user"></i> {{ store.animeList[7].user }}</span>
                                            <span><i class="fa-solid fa-calendar-days"></i> {{ store.animeList[7].date }}</span>
                                        </div>
                                        <div>
                                            <span class="text-uppercase">{{store.animeList[7].title}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 px-lg-0 px-md-1 pt-md-2 pt-lg-0 ">
                    <div class="card " style="overflow: hidden;">
                        <img :src="store.animeList[9].path" class="w-100 h-100" alt="Best Places">
                        <div class="card-img-overlay text-center text-white">
                            <div>
                                <button v-for="(el, index) in store.animeList[9].category" :key="index" type="button" class="btn btn-primary  mx-2">
                                    {{ el }}
                                </button> 
                            </div>

                            <div>
                                <div>
                                    <span class="mx-2"> <i class="fa-solid fa-user"></i> {{ store.animeList[9].user }}</span>
                                    <span><i class="fa-solid fa-calendar-days"></i> {{ store.animeList[9].date }}</span>
                                </div>

                                <div>
                                    <span class="text-uppercase">{{store.animeList[9].title}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 pt-md-2 pt-lg-0">
                    <div class="row h-100 gap-lg-2 gap-sm-2 gap-2 gap-md-0">
                        <div class="col-lg-12 col-md-6   px-md-1 ">
                            <div class="card h-100 text-bg-dark">
                                <img :src="store.animeList[10].path" class="card-img h-100 " alt="...">
                                <div class="card-img-overlay text-center">
                                    <div>
                                        <button v-for="(el, index) in store.animeList[10].category" :key="index" type="button" class="btn btn-primary  mx-2">
                                            {{ el }}
                                        </button> 
                                    </div>

                                    <div>
                                        <div>
                                            <span class="mx-2"> <i class="fa-solid fa-user"></i> {{ store.animeList[10].user }}</span>
                                            <span><i class="fa-solid fa-calendar-days"></i> {{ store.animeList[10].date }}</span>
                                        </div>
                                        <div>
                                            <span class="text-uppercase">{{store.animeList[10].title}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6   px-md-1">
                            <div class="card h-100 text-bg-dark">
                                <img :src="store.animeList[6].path" class="card-img h-100" alt="...">
                                <div class="card-img-overlay text-center">

                                    <div>
                                        <button v-for="(el, index) in store.animeList[6].category" :key="index" type="button" class="btn btn-primary  mx-2">
                                            {{ el }}
                                        </button> 
                                    </div>

                                    <div>
                                        <div>
                                            <span class="mx-2"> <i class="fa-solid fa-user"></i> {{ store.animeList[6].user }}</span>
                                            <span><i class="fa-solid fa-calendar-days"></i> {{ store.animeList[6].date }}</span>
                                        </div>
                                        <div>
                                            <span class="text-uppercase">{{store.animeList[6].title}}</span>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;




.card{
    border: none;
    &:hover {
        opacity: 0.5;
        
    } 
}

.container:first-of-type img {
    filter: brightness(0.5);
}

button{
    background-color: white;
    color: black;
    border: white;
    
}

button:hover{
    color: $red_header_footer;
    background-color: white;
}

  
.card-img-overlay {
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
  }

  .fa-user{
    color: white;
  }

</style>
