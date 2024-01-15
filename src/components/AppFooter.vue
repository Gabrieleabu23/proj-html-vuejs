<script >
export default {
    name: 'AppFooter',
}
</script>

<template>

    <div class="container-fluid">
        <div class="container pt-4">
            <div class="row">
                <div class="col-md-2">
                    <ul>
                        <h3>Get Started</h3>
                        <li>Resources</li>
                        <li>Tutorials</li>
                        <li>Examples</li>
                        <li>Docs</li>
                        <p>lorem</p>
                    </ul>
                </div>
                <div class="col-md-2">
                    <ul>
                        <h3>About</h3>
                        <li>Stories</li>
                        <li>Community</li>
                        <li>Blog</li>
                        <li>Brand Assets</li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <ul>
                        <h3>Features</h3>
                        <li>Overview</li>
                        <li>Design</li>
                        <li>Code</li>
                        <li>Collaborate</li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <ul>
                        <h3>Quick Links</h3>
                        <li>Stories</li>
                        <li>Community</li>
                        <li>Blog</li>
                        <li>Brand Assets</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h3 class="pb-2">Quick Links</h3>
                    <div class="mb-2">
                        <input type="email" id="email" class="email-input p-2 rounded w-100" placeholder="Enter your email address" required>
                    </div>

                   <div>
                    <button type="submit" class="subscribe-button p-2 rounded w-100 font-weight-bold">SUBSCRIBE</button>
                   </div>

                </div>
            </div>

            <hr class="mt-4 w-100">

            <div class="row justify-content-between ">
                <div class="col-md-2">
                 sus
                </div>
                <div class="col-md-4">
                  sus
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
    ul{
        list-style-type: none;
    }

    .email-input{
       border: none;
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
        color: black;
        background-color: black;
    }
}


</style>
