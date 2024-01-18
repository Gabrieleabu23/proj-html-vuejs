<script>
export default{
    name:'CardBottom'
}


</script>

<template>
   
    

    <div class="conatiner-fluid">
        <div class="row mb-2">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col-lg-2 col-md-4">
                    <div class="card h-100 text-bg-dark">
                        <img src="../assets/anime/assets/visit-france.webp" class="card-img h-100" alt="...">
                        <div class="card-img-overlay">

                            <h2>sus</h2>
                          
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4">
                    <div class="card h-100 text-bg-dark">
                        <img src="../assets/anime/assets/visit-france.webp" class="card-img h-100" alt="...">
                        <div class="card-img-overlay">

                            <h2>sus</h2>
                          
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4">
                    <div class="card h-100 text-bg-dark">
                        <img src="../assets/anime/assets/visit-france.webp" class="card-img h-100" alt="...">
                        <div class="card-img-overlay">

                            <h2>sus</h2>
                          
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 col-md-4">
                    <div class="card h-100 text-bg-dark">
                        <img src="../assets/anime/assets/visit-france.webp" class="card-img h-100" alt="...">
                        <div class="card-img-overlay">

                            <h2>sus</h2>
                          
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 col-md-4">
                    <div class="card h-100 text-bg-dark">
                        <img src="../assets/anime/assets/visit-france.webp" class="card-img h-100" alt="...">
                        <div class="card-img-overlay">

                            <h2>sus</h2>
                          
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 col-md-4">
                    <div class="card h-100 text-bg-dark">
                        <img src="../assets/anime/assets/visit-france.webp" class="card-img h-100" alt="...">
                        <div class="card-img-overlay">

                            <h2>sus</h2>
                          
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
  
  .card img {
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    object-fit: fill;
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
    background-color: rgba(255, 0, 0, 0.5); /* Opacità rossa */
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .card:hover .card-img-overlay {
    opacity: 1;
  }
  
  .card .card-img-overlay h2 {
    color: white; /* Colore del testo sull'overlay */
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  

</style>
