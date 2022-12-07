<template>
    <div class="page">
        <LayoutTemplate>
            <DetailMain />
        </LayoutTemplate>
    </div>
</template>

<script>
import LayoutTemplate from '~/components/atoms/LayoutTemplate.vue';
import DetailMain from '~/components/organisms/detail/Main.vue';

export default {
    components: { LayoutTemplate, DetailMain },
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
