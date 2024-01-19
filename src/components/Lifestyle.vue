<script>

import { store } from '../store'
export default {
  name: 'Lifestyle',
  data(){
  return{
  store
  }
  }
}
</script>

<template>
    <div class="container header_width ">
            

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
                    <div class="col-md-7 h-100">
    
                        <div class="card h-100 text-bg-dark">
                            <img :src="store.animeList[7].path" class="card-img h-100" alt="...">
                            <div class="card-img-overlay">
    
                                <div>
                                    <button type="button" class="btn btn-primary btn-sm">
                                        {{ store.animeList[7].category[0] }}
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
    
                    <div class="col-md-5">
    
                        <div class="row align-items-center h-25">
                            <div class="col-md-5">
                                <div class="card h-100  text-bg-dark">
                                    <img :src="store.animeList[9].path" class="card-img h-100" alt="...">
                                    <div class="card-img-overlay">
            
                                        <button type="button" class="btn btn-primary btn-sm">
                                            {{ store.animeList[9].category[0] }}
                                        </button>
                                        
                                      
                                    </div>
                                </div>
            
                            </div>
                            <div class="col-md-7 p-0">
                                <div>
                                    <span class="mx-2"> <i class="fa-solid fa-user"></i> {{ store.animeList[7].user }}</span>
                                    <span><i class="fa-solid fa-calendar-days"></i> {{ store.animeList[7].date }}</span>
                                </div>
                                <div>
                                    <span class="text-uppercase">{{store.animeList[7].title}}</span>
                                </div>
                            </div>
                        </div>
    
                        <hr class="my-4">
    
    
                        <div class="row align-items-center h-25">
                            <div class="col-md-5">
                                <div class="card h-100 text-bg-dark">
                                    <img :src="store.animeList[8].path" class="card-img h-100" alt="...">
                                    <div class="card-img-overlay">
            
                                        <button type="button" class="btn btn-primary btn-sm">
                                            {{ store.animeList[8].category[0] }}
                                        </button>
                                      
                                    </div>
                                </div>
            
                            </div>
                            <div class="col-md-7 p-0">
                                <div>
                                    <span class="mx-2"> <i class="fa-solid fa-user"></i> {{ store.animeList[8].user }}</span>
                                    <span><i class="fa-solid fa-calendar-days"></i> {{ store.animeList[8].date }}</span>
                                </div>
                                <div>
                                    <span class="text-uppercase">{{store.animeList[8].title}}</span>
                                </div>
                            </div>
                        </div>
    
                        <hr class="my-4">
    
                        <div class="row align-items-center h-25">
                            <div class="col-md-5">
                                <div class="card h-100 text-bg-dark">
                                    <img :src="store.animeList[10].path" class="card-img h-100" alt="...">
                                    <div class="card-img-overlay">
            
                                        <button type="button" class="btn btn-primary btn-sm">
                                            {{ store.animeList[10].category[0] }}
                                        </button>
                                      
                                    </div>
                                </div>
            
                            </div>
                            <div class="col-md-7 p-0">
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
            </div>
    </div>


    <div class="container-fluid bg-grey mt-5">
        <div class="container p-0 header_width m-auto text-center">
            <div class="col-auto my-4">
                <img
                  src="../assets/anime/assets/page-banner-1.webp"
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
    height: 470px;
}


.card{
    border: none;
    &:hover {
        opacity: 0.5;
        
    } 
}
.card-img{
    filter: brightness(0.5);
}



button{
    background-color: $subscribe_button;
    
}

button:hover{
     background-color: $red_header_footer;
}

.btn-sm{
    background-color: white;
    border: white;
    color: black;
    &:hover{
        color: $red_header_footer;
        background-color: white;
    }
}


.bg-grey{
    background-color: $carousel_bg_grey;
}

div.col-auto:nth-child(1) > img:nth-child(1) {
    height: 120px;
    margin: 40px 0;
}

div.col-md-7:nth-child(1) > div:nth-child(1) > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
}
  
  


</style>
