<template>
    <div class="text-box">
        <span class="text-box__title">캠핑장 소개</span>
        <span class="text-box__desc">
            {{ aDetailCard.sFacilityIntro }}
        </span>
        <span class="text-box__title">지도</span>
        <DetailMap :map-data="aDetailCardMap" />
    </div>
</template>

<script>
import DetailMap from '~/components/atoms/detail/Map.vue';

import { storeToRefs } from 'pinia';
import { useStore } from '~/store/index';

export default {
    components: { DetailMap },
    setup(props, context) {
        const store = useStore();
        store.FETCH_DETAIL_API();

        const { aDetailCard, aDetailCardMap } = storeToRefs(store);

        return { aDetailCard, aDetailCardMap };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.text-box {
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 12px;

    border-radius: 24px;

    &__title {
        width: 30%;

        background-color: $color-pupple;
        border-radius: 12px;

        font-family: 'Y_Spotlight';
        font-weight: 700;
        font-size: 1em;

        line-height: 2;
        text-align: center;
        color: $color-white;

        margin-top: 16px;
    }
    &__desc {
        width: 100%;
        height: 330px;

        padding: 12px;

        background-color: rgba($color-gray, 0.1);
        border-radius: 12px;

        font-family: 'LeferiPoint-WhiteObliqueA';
        font-size: 1em;
        line-height: 1.3;
        text-align: justify;

        overflow: scroll;

        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */

        &::-webkit-scrollbar {
            display: none; /* 크롬, 사파리, 오페라, 엣지 */
        }
    }
}
</style>
