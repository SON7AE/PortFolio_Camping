<template>
    <div class="page">
        <LayoutTemplate>
            <DetailMain @open-overlay="sendEvent" />
        </LayoutTemplate>
        <OverLayTemplate v-if="isActive" class="page__overlay">
            <DetailIntro @close-overlay="sendEvent" />
        </OverLayTemplate>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import LayoutTemplate from '~/components/atoms/LayoutTemplate.vue';
import OverLayTemplate from '~/components/atoms/OverLayTemplate.vue';
import DetailMain from '~/components/organisms/detail/Main.vue';
import DetailIntro from '../components/organisms/detail/Intro.vue';

export default {
    components: { LayoutTemplate, OverLayTemplate, DetailMain, DetailIntro },
    setup() {
        const isActive = ref(false);
        const sendEvent = () => {
            isActive.value = !isActive.value;
        };

        return { isActive, sendEvent };
    },
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
