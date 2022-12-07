<template>
    <div class="page">
        <LayoutTemplate>
            <DetailMain />
        </LayoutTemplate>
        <OverLayTemplate class="page__overlay">
            <DetailIntro />
        </OverLayTemplate>
    </div>
</template>

<script>
import LayoutTemplate from '~/components/atoms/LayoutTemplate.vue';
import OverLayTemplate from '~/components/atoms/OverLayTemplate.vue';
import DetailMain from '~/components/organisms/detail/Main.vue';
import DetailIntro from '../components/organisms/detail/Intro.vue';

export default {
    components: { LayoutTemplate, OverLayTemplate, DetailMain, DetailIntro },
};
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    &__overlay {
        position: absolute;
    }
}
</style>
