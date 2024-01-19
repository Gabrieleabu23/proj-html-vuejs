<script >
export default {
    name: 'AppFooter',
}
</script>

<template>

    <div class="container-fluid">


        <div class="d-flex box-triangle">
            <div class="triangolo"></div>
        </div>

        <div class="container header_width mt-5">
            <div class="row pb-4 ">
                <div class="mb-4 col-lg-2 col-md-4 col-sm-6">
                    <ul>
                        <h5 class="text-uppercase">Get Started</h5>
                        <li>Resources</li>
                        <li>Tutorials</li>
                        <li>Examples</li>
                        <li>Docs</li>
                    </ul>
                </div>
                <div class="mb-4 col-lg-2 col-md-4 col-sm-6">
                    <ul>
                        <h5 class="text-uppercase">About</h5>
                        <li>Stories</li>
                        <li>Community</li>
                        <li>Blog</li>
                        <li>Brand Assets</li>
                    </ul>
                </div>
                <div class="mb-4 col-lg-2 col-md-4 col-sm-6">
                    <ul>
                        <h5 class="text-uppercase">Features</h5>
                        <li>Overview</li>
                        <li>Design</li>
                        <li>Code</li>
                        <li>Collaborate</li>
                    </ul>
                </div>
                <div class="mb-4 col-lg-2 col-md-4 col-sm-6">
                    <ul>
                        <h5 class="text-uppercase">Quick Links</h5>
                        <li>Stories</li>
                        <li>Community</li>
                        <li>Blog</li>
                        <li>Brand Assets</li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-8 col-sm-12">
                    <div class="d-flex flex-column">
                        
                        <h5 class="pb-2 text-uppercase">SUBSCRIBE TO NEWSLETTER</h5>
                        <div class="mb-2">
                            <input type="email" id="email" class="email-input p-2 rounded w-100" placeholder="Enter your email address" required>
                        </div>
                        
                    <div>
                        <button type="submit" class="subscribe-button p-2 rounded w-100 font-weight-bold">SUBSCRIBE</button>
                    </div>
                    </div>

                </div>
            </div>

            <hr class="mt-2 w-100">

            <div class="row justify-content-between align-items-center text-center ">
                <div class="col-md-2 col-sm-12 my-3">
                 <img src="../assets/anime/assets/anime-whitelogo-300x89.png" alt="">
                </div>
                <div class="col-md-4 my-3 col-sm-12">
                  <p>© Anime Tech, Theme by HasnainDEV</p>
                </div>
            </div>
            
        </div>

        
    </div>

    
    
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.container-fluid{
    background-color: $red_header_footer;
    color: white;
    border-top:4px solid $black_footer_hr_triangle ;
    position: relative;
    
    
    ul{
        list-style-type: none;
    }

    .email-input{
       border: none;
    }

    li:hover{
        color: $subscribe_button;
    }

    .subscribe-button{
        background-color: $subscribe_button;
        border: none;
        color: white;
    }

    .subscribe-button:hover{
        background-color: white;
        color: $red_header_footer;
    }

    hr{
        height: 1px;
        background-color: rgb(255, 255, 255); 
        opacity: 1; 
    }
    img{
        height: 65px;
        width: 230px;
    }
}



</style>
