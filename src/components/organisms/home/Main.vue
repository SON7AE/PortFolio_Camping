<template>
    <div class="main">
        <HomeHeader />
        <HomeFooter />
    </div>
</template>

<script>
import HomeHeader from '~/components/mocules/home/Header.vue';
import HomeFooter from '~/components/atoms/Footer.vue';

export default {
    components: { HomeHeader, HomeFooter },
};
</script>

<style lan Headerg="scss" scoped>
@import '~/assets/styles/main.scss';

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    padding: 40px;
}
</style>
