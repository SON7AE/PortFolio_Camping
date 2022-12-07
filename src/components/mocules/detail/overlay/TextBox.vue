<template>
    <div class="text-box">
        <span class="text-box__title">캠핑장 소개</span>
        <span class="text-box__desc">
            SS캠핑장은 경북 군위군 부계면에 자리 잡고 있다. 군위군청을 기점으로 32㎞가량 떨어졌다. 자동차에 몸을 싣고 경북대로, 치산효령로, 79번
            지방도를 차례로 달리면 닿는다. 도착까지 소요되는 시간은 40분 안팎이다. 이곳은 적당히 가파른 언덕을 내려가면 도착하는데, 청정한 숲속에 안긴
            듯한 느낌을 준다. 캠핑장에는 글램핑 7개동, 일반 야영장 14면, 자동차 야영장 10면을 마련했다. 글램핑 객실 내부에는 침구류, 에어컨, TV,
            냉장고, 전자레인지, 식기류 등 일상생활이 가능할 정도의 물품을 비치했다. 외부 전용 데크에는 테이블과 의자를 배치해 바비큐를 즐길 수 있다.
            일반 야영장과 자동차 야영장은 모두 데크로 이뤄졌으며, 사이트 크기는 가로 4m 세로 6m다. 캠핑장 주변에 동산게곡, 블루데이식물원, 팔공산,
            도덕산, 치산관광지 등 관광자원이 풍부하다. 인근에 여러 음식점이 성업 중이라 맘에 드는 요리도 맛볼 수 있다.
        </span>
        <span class="text-box__title">지도</span>
        <DetailMap />
    </div>
</template>

<script>
import DetailMap from '~/components/atoms/detail/Map.vue';

export default { components: { DetailMap } };
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.text-box {
    display: flex;
    flex-direction: column;

    width: 100%;

    border-radius: 24px;

    gap: 12px;

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

        margin-top: 28px;
    }
    &__desc {
        width: 100%;
        padding: 12px;

        background-color: rgba($color-gray, 0.1);
        border-radius: 12px;

        font-family: 'LeferiPoint-WhiteObliqueA';
        font-size: 1em;
        line-height: 1.3;
        text-align: justify;
    }
}
</style>
