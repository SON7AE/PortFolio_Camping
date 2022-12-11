<template>
    <div class="contents">
        <span class="contents__title">{{ aDetailCard.sFacilityName }}</span>
        <div class="contents__detail-box">
            <DetailCard v-for="card in aDetailCardList" :key="card.label" :card="card" />
        </div>
        <button class="contents__button" @click="sendEvent">업체 소개</button>
    </div>
</template>

<script>
import DetailCard from '~/components/atoms/detail/Card.vue';
import Button from '~/components/atoms/Button.vue';

import { storeToRefs } from 'pinia';
import { useStore } from '~/store/index';
import { useRoute } from 'vue-router';
import { onMounted } from '@vue/runtime-core';

export default {
    components: { DetailCard, Button },
    setup(props, context) {
        const store = useStore();
        const route = useRoute();
        const { aDetailCard, aDetailCardList } = storeToRefs(store);

        onMounted(() => {
            store.FETCH_DETAIL_API(route.params.id);
        });

        const sendEvent = () => {
            context.emit('open-overlay');
        };
        return { sendEvent, aDetailCard, aDetailCardList };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    gap: 20px;

    &__title {
        width: 100%;

        font-family: 'NanumSquareNeo-Variable';
        font-weight: 700;
        font-size: 1.3em;

        line-height: 2;

        border-bottom: 1px solid rgba($color-gray, 0.3);
    }
    &__detail-box {
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;

        gap: 24px;
    }
    &__button {
        outline: none;
        border: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;

        padding: 16px 12px;
        margin-top: 12px;

        border-radius: 12px;
        background-color: $color-pupple;
        color: $color-white;

        font-family: 'Pretendard-Regular';
        font-weight: 700;
        font-size: 1.25em;

        text-decoration: none;

        cursor: pointer;
    }
}
</style>
