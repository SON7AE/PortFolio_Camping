<template>
    <div class="page">
        <LayoutTemplate>
            <HomeMain />
        </LayoutTemplate>
    </div>
</template>

<script>
import LayoutTemplate from '~/components/atoms/LayoutTemplate.vue';
import HomeMain from '~/components/organisms/home/Main.vue';

export default {
    components: { LayoutTemplate, HomeMain },
};
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
}
</style>
