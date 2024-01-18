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
    <div class="container header_width ">
            <div class="row mb-5">
                <div class="col-md-3 ">
                    <div class="row height-400" >
                        <div class="col-md-12 height-calc-up">
                            <div class="card  shadow h-100 text-bg-dark">
                                <img :src="store.animeList[0].path" class="card-img h-100" alt="...">
                                <div class="card-img-overlay">
                                    <h2 class="text-center">sus</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 height-calc-down">
                            <div class="card text-bg-dark h-100">
                                <img :src="store.animeList[7].path" class="card-img h-100" alt="...">
                                <div class="card-img-overlay">
                                    <h2 class="text-center">sus</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card height-400" style="overflow: hidden;">
                        <img :src="store.animeList[9].path" class="w-100 h-100" alt="Best Places">
                        <div class="card-img-overlay">
                            <h2 class="text-center">sus</h2>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="row height-400">
                        <div class="col-md-12 height-calc-up">
                            <div class="card h-100 text-bg-dark">
                                <img :src="store.animeList[10].path" class="card-img h-100 " alt="...">
                                <div class="card-img-overlay">
                                    <h2 class="text-center">sus</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 height-calc-down">
                            <div class="card h-100 text-bg-dark">
                                <img :src="store.animeList[6].path" class="card-img h-100" alt="...">
                                <div class="card-img-overlay">

                                    <h2 class="text-center"><span v-for="el in store.animeList[6].category">
                                    {{ el
                                     }}
                                    </span></h2>
                                  
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="d-flex justify-content-between my-2">

                <div>
                    <h3 class="text-uppercase">Lifestyle & Stories</h3>
                </div>
                <div> 
                    <button type="button" class="btn btn-secondary text-uppercase">All</button>
                    <button type="button" class="btn btn-secondary mx-3 text-uppercase">Lifestyle</button>
                    <button type="button" class="btn btn-secondary text-uppercase">Stories</button>
                </div>

            </div>
            <div class="d-none d-md-block">
                <div class="row height-400 ">
                    <div class="col-md-8 h-100">
    
                        <div class="card h-100 text-bg-dark">
                            <img src="../assets/anime/assets/travel-alone.webp" class="card-img h-100" alt="...">
                            <div class="card-img-overlay">
    
                                <h2>sus</h2>
                              
                            </div>
                        </div>
    
                    </div>
    
                    <div class="col-md-4">
    
                        <div class="row align-items-center h-25">
                            <div class="col-md-5">
                                <div class="card h-100 text-bg-dark">
                                    <img src="../assets/anime/assets/travel-alone.webp" class="card-img h-100" alt="...">
                                    <div class="card-img-overlay">
            
                                        <h2>sus</h2>
                                      
                                    </div>
                                </div>
            
                            </div>
                            <div class="col-md-7">
                                <h2>sus</h2>
                            </div>
                        </div>
    
                        <hr class="my-4">
    
    
                        <div class="row align-items-center h-25">
                            <div class="col-md-5">
                                <div class="card h-100 text-bg-dark">
                                    <img src="../assets/anime/assets/travel-alone.webp" class="card-img h-100" alt="...">
                                    <div class="card-img-overlay">
            
                                        <h2>sus</h2>
                                      
                                    </div>
                                </div>
            
                            </div>
                            <div class="col-md-7">
                                <h2>sus</h2>
                            </div>
                        </div>
    
                        <hr class="my-4">
    
                        <div class="row align-items-center h-25">
                            <div class="col-md-5">
                                <div class="card h-100 text-bg-dark">
                                    <img src="../assets/anime/assets/travel-alone.webp" class="card-img h-100" alt="...">
                                    <div class="card-img-overlay">
            
                                        <h2>sus</h2>
                                      
                                    </div>
                                </div>
            
                            </div>
                            <div class="col-md-7">
                                <h2>sus</h2>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
    </div>


    <div class="container-fluid bg-grey mt-5">
        <div class="container header_width m-auto text-center">
            <div class="col-auto my-4">
                <img
                  src="../assets/anime/assets/header-banner.webp"
                  class="rounded w-100"
                  alt=""
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


.height-400{
    height: 400px;
}

.height-calc-up{
    height: calc(50% - 5px);
    margin-bottom: 5px;
}
.height-calc-down{
    height: calc(50% - 5px);
    margin-top: 5px;
}

.card{
    border: none;
    &:hover {
        opacity: 0.5;
        
    } 
}

.container-fluid:first-of-type img {
    filter: brightness(0.5);
}

button{
    background-color: $subscribe_button;
    
}

button:hover{
     background-color: $red_header_footer;
}


.bg-grey{
    background-color: $carousel_bg_grey;
}

div.col-auto:nth-child(1) > img:nth-child(1) {
    height: 120px;
    margin: 40px 0;
}
  


</style>
