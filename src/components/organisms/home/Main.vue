<template>
    <div class="main">
        <HomeHeader />
    </div>
</template>

<script>
import HomeHeader from '~/components/mocules/home/Header.vue';

export default {
    components: { HomeHeader },
};
</script>

<style lan Headerg="scss" scoped>
@import '~/assets/styles/main.scss';

.main {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
}
</style>
