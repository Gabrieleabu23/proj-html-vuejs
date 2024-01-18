<script >
import UnderMainCarousel from './UnderMainCarousel.vue';
import CardBottom from './CardBottom.vue';
import Lifestyle from './Lifestyle.vue'
export default {
    name: 'AppMain',
    components:{
        UnderMainCarousel,
        CardBottom,
        Lifestyle,
    }
}
</script>

<template>

    <UnderMainCarousel/>

    <Lifestyle/>

    <CardBottom/>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


</style>
