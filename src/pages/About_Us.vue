<script>
export default{
    name:'AboutUS'
}


</script>

<template>
   <div class="contact_us_about_container">
    <div class="overlay h-100">
      <h4 class="text-light">ABOUT US</h4>
    </div>
   </div>
    <div class="container-fluid">

        <div class="container header_width p-4">
            <h3 class="text-start text-uppercase">About Anime Tech</h3>
            <div class="row">
                <div class="col-md-6">
        
                    <h1 class="text-start text-uppercase">
                        Start improving<span class="text-danger"> your business today!</span>
                    </h1>
        
                </div>
                <div class="col-md-6">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dolorem a dolor hic voluptates perspiciatis repellat consequuntur officia eum doloremque numquam accusantium adipisci repellendus consectetur esse perferendis maxime blanditiis quod.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eos est quos praesentium placeat possimus maxime ipsum ipsa. Impedit molestias odio odit maxime voluptatem animi error quis repellendus ipsam praesentium.</p>
                </div>
            </div>
            
        </div>

    </div>

    <div class="container-fluid bg-grey">
        <div class="container header_width p-4">
            <div class="row align-items-center">
                <div class="col-md-7">

                   <h1 class="text-uppercase">Our Mission</h1>
                   <h1 class="text-danger text-uppercase">Vision</h1>
                   <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                   <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>
                <div class="col-md-5">
                    <img src="https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/anime-contact.webp" alt="" class="img-tech">
                </div>
            </div>
        </div>
    </div>



    <div class="container-fluid">
        <div class="container header_width p-4 text-center">

            <h2 class="text-uppercase my-3">Our Team</h2>
         
            <p class="w-50 m-auto ">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div class="row mt-3">
                <div v-for="index in 4" :key="index" class="col-md-6 col-lg-3">
                    <img class="circle-img" src="https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/team-member.webp" alt="">

                    <h5 class="text-uppercase mt-4">David Anderson</h5>
                    <div class="text-danger">Founder & CEO</div>
                </div>
            </div>


            <h2 class="text-uppercase my-3">faq</h2>

            <div class="row">
                <div class="col-md-6 mt-3">

                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                A frequently asked question surrounding your service
                            </button>
                            
                          </h2>
                          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                A frequently asked question surrounding your service
                            </button>
                          </h2>
                          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                A frequently asked question surrounding your service
                            </button>
                          </h2>
                          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                A frequently asked question surrounding your service
                            </button>
                          </h2>
                          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFour">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                A frequently asked question surrounding your service
                            </button>
                          </h2>
                          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionFive">
                            <div class="accordion-body">
                              <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-3">

                    <div class="accordion" id="accordionExample2">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingOne2">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne">
                                A frequently asked question surrounding your service
                            </button>
                          </h2>
                          <div id="collapseOne2" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingTwo2">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">
                                A frequently asked question surrounding your service
                            </button>
                          </h2>
                          <div id="collapseTwo2" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingThree2">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree">
                                A frequently asked question surrounding your service
                            </button>
                          </h2>
                          <div id="collapseThree2" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                              <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingFour2">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2">
                                A frequently asked question surrounding your service
                            </button>
                          </h2>
                          <div id="collapseFour2" class="accordion-collapse collapse" aria-labelledby="headingFour2" data-bs-parent="#accordionExample4">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingFive2">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive2" aria-expanded="false" aria-controls="collapseFive2">
                                A frequently asked question surrounding your service
                            </button>
                          </h2>
                          <div id="collapseFive2" class="accordion-collapse collapse" aria-labelledby="headingFive2" data-bs-parent="#accordionFive2">
                            <div class="accordion-body">
                              <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
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

.accordion{
  --bs-accordion-border-radius: 0;
}
.accordion-button:focus{
  box-shadow: none;
}
.accordion-button:not(.collapsed){
  background-color: white;
  color: black;
}


.container-fluid{
    background-color: rgb(255, 255, 255);
}
.img-tech{
    width: 100%;
}

.circle-img{
    width: 105%;
    border-radius: 100%;
    position: relative;
    &:hover {
        opacity: 0.5;
        
    } 
}

.overlay {
  background-color: rgba(51, 51, 51, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}






.bg-grey{
    background-color: $carousel_bg_grey;
}



/* In linea #4 | http://localhost:5176/ */

.accordion-button:focus {
    /* border-color: var(--bs-accordion-btn-focus-border-color); */
  }
  
  .accordion-button {
    /* border-radius: 0; */
  }
  
  button {
    /* border-radius: 0; */
  }
  
  /* Elemento | http://localhost:5176/ */
  
  #headingOne,#headingOne2 > button {
    background-color: white;
    color: black;
  }
  
  /* bootstrap.min.css | https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css */
  
  .accordion-button:focus {
    /* border-color: var(--bs-accordion-btn-focus-border-color); */
  }
  
  .accordion-button {
    /* border-radius: 0; */
  }
  
  button {
    /* border-radius: 0; */
  }
  .accordion {
  
     --bs-accordion-btn-icon:url(""); --bs-accordion-btn-icon-width:1.25rem;
    --bs-accordion-btn-icon-transform:rotate(-180deg);
    --bs-accordion-btn-icon-transition:transform 0.2s ease-in-out;
    --bs-accordion-btn-active-icon:url("");
  }
  
  

</style>
