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

    width: calc(100% - 80px);
    height: calc(100% - 80px);

    padding: 40px;
}
</style>
