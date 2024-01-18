<script >
import UnderMainCarousel from './UnderMainCarousel.vue';
import CardBottom from './CardBottom.vue';
export default {
    name: 'AppMain',
    components:{
        UnderMainCarousel,
        CardBottom
    }
}
</script>

<template>

    <UnderMainCarousel/>

    <CardBottom/>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;


</style>
