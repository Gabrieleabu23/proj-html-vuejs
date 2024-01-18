<script>
import { store } from '../store'
export default{
    name:'CardBottom',
    data(){
    return{
    store
    }
    },
    methods: {
    getNumberOfPosts(category) {
      return this.store.animeList.filter(item => item.category.includes(category)).length;
    }
  }
    
}



</script>

<template>
   
    

    <div class="conatiner-fluid">
        <div class="row mb-2">
            <div class="row row-cols-1 row-cols-md-3 g-4 mx-1">
                <div class="col-lg-2 col-md-4">
                    <div class="card h-100 text-bg-dark text-center">
                        <img :src="store.animeList[11].path" class="card-img h-100" alt="...">
                        <div class="card-img-overlay ">

                            <div class="white-square"></div>
                            <div class="vertical-center">
                                <h3 class="text-uppercase">
                                    {{ store.animeList[11].category[0] }}
                                </h3>
                    
                                <h3 class="post-count text-uppercase">{{ getNumberOfPosts(store.animeList[11].category[0]) }} Posts</h3>
                            </div>
                          
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4">
                    <div class="card h-100 text-bg-dark">
                        <img :src="store.animeList[8].path" class="card-img h-100" alt="...">
                        <div class="card-img-overlay">

                            <div class="white-square"></div>
                            <div class="vertical-center">
                                <h3 class="text-uppercase">
                                    {{ store.animeList[8].category[0] }}
                                </h3>
                    
                                <h3 class="post-count text-uppercase">{{ getNumberOfPosts(store.animeList[8].category[0]) }} Posts</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4">
                    <div class="card h-100 text-bg-dark">
                        <img :src="store.animeList[2].path" class="card-img h-100" alt="...">
                        <div class="card-img-overlay">

                            <div class="white-square"></div>
                            <div class="vertical-center">
                                <h3 class="text-uppercase">
                                    {{ store.animeList[2].category[0] }}
                                </h3>
                    
                                <h3 class="post-count text-uppercase">{{ getNumberOfPosts(store.animeList[2].category[0]) }} Posts</h3>
                            </div>
                          
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 col-md-4">
                    <div class="card h-100 text-bg-dark">
                        <img :src="store.animeList[6].path" class="card-img h-100" alt="...">
                        <div class="card-img-overlay">

                            <div class="white-square"></div>

                            <div class="vertical-center">
                                <h3 class="text-uppercase">
                                    {{ store.animeList[6].category[0] }}
                                </h3>
                    
                                <h3 class="post-count text-uppercase">{{ getNumberOfPosts(store.animeList[6].category[0]) }} Posts</h3>
                            </div>
                          
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 col-md-4">
                    <div class="card h-100 text-bg-dark">
                        <img :src="store.animeList[7].path" class="card-img h-100" alt="...">
                        <div class="card-img-overlay">

                            <div class="white-square"></div>

                            <div class="vertical-center">
                                <h3 class="text-uppercase">
                                    {{ store.animeList[7].category[0] }}
                                </h3>
                    
                                <h3 class="post-count text-uppercase">{{ getNumberOfPosts(store.animeList[7].category[0]) }} Posts</h3>
                            </div>
                          
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 col-md-4">
                    <div class="card h-100 text-bg-dark">
                        <img :src="store.animeList[9].path" class="card-img h-100" alt="...">
                        <div class="card-img-overlay">

                            <div class="white-square"></div>

                            <div class="vertical-center">
                                <h3 class="text-uppercase">
                                    {{ store.animeList[9].category[2] }}
                                </h3>
                    
                                <h3 class="post-count text-uppercase">{{ getNumberOfPosts(store.animeList[9].category[2]) }} Posts</h3>
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


.card {
    position: relative;
    overflow: hidden;
    border: none;
  }

  .col-lg-2, .col-md-4{
    height: 180px;
  }

  
  
  .card img {
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    scale: 1.2;
    filter: brightness(0.7);
    object-fit: cover;
  }
  
  .card:hover img {
    filter: grayscale(100%) brightness(70%) sepia(100%) hue-rotate(20deg);
    transform: translateX(10px);
  }
  
  .card .card-img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 1; 
    transition: opacity 0.3s ease-in-out;
        
    }
  
  
  .card:hover .card-img-overlay {
    opacity: 1;
    background-color: rgba(255, 0, 0, 0.3);
    .white-square {
        position: absolute;
        color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 140px; 
        height: 140px; 
        border: 1px solid white;
    }
  }
  
  .card .card-img-overlay h3 {
    color: white;
    text-align: center;
    opacity: 1; 
  }

  .post-count {
    display: none; 

    
    color: white;
    font-size: 14px;
}


.card:hover .post-count {
    display: block;
}

.vertical-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

  

</style>
