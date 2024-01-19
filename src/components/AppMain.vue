<script >
import MyCarousel from './MyCarousel.vue';
import UnderMainCarousel from './UnderMainCarousel.vue';
import FeaturedCarousel from './FeaturedCarousel.vue';
import CardBottom from './CardBottom.vue';
import Lifestyle from './Lifestyle.vue'
export default {
    name: 'AppMain',
    components:{
        MyCarousel,
        UnderMainCarousel,
        FeaturedCarousel,
        CardBottom,
        Lifestyle,
    }
}
</script>

<template>
    <MyCarousel/>
    <UnderMainCarousel/>

    <Lifestyle/>
    <FeaturedCarousel/>
    <CardBottom/>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


</style>
