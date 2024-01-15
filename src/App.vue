<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppMain from './components/AppMain.vue';

export default{
    components:{
        AppHeader,
        AppMain,
        AppFooter
    }
}


</script>

<template>

    <AppFooter/>
  
</template>


<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
</style>
