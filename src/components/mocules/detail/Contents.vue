<template>
    <div class="contents">
        <span class="contents__title">(주)디노담양힐링파크 지점</span>
        <div class="contents__detail-box">
            <DetailCard v-for="card in cardList" :key="card.label" :card="card" />
        </div>
        <button class="contents__button" @click="openOverlay">업체 소개</button>
    </div>
</template>

<script>
import DetailCard from '~/components/atoms/detail/Card.vue';
import Button from '~/components/atoms/Button.vue';

export default {
    components: { DetailCard, Button },
    setup() {
        const cardList = [
            {
                label: '위치',
                icon: 'fa-location-dot',
                value: '전남 담양군 봉산면 탄금길 9-26',
            },
            {
                label: '편의시설',
                icon: 'fa-shop',
                value: '글램핑, 수영장, 바베큐',
            },
            {
                label: '반려견',
                icon: 'fa-dog',
                value: '가능',
            },
            {
                label: '이용가능시간',
                icon: 'fa-clock',
                value: '봄, 여름, 가을, 겨울',
            },
        ];
        return { cardList };
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
