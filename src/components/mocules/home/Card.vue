<template>
    <div class="card">
        <i class="fa-solid fa-bookmark bookmark"></i>
        <img src="~/assets/images/Card1.jpg" alt="" class="card__image" />
        <div class="card__text-box">
            <span class="card__text-box__title">(주)디노담양힐링파크 지점</span>
            <span class="card__text-box__location">
                <i class="fa-solid fa-location-dot"></i>
                전남 담양군 봉산면 탄금길 9-26
            </span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.card {
    display: flex;
    flex-direction: column;

    width: 224px;
    min-width: 224px;
    height: 264px;

    padding: 0 10px;

    border-radius: 16px;
    box-shadow: 3px 3px 3px $color-gray;
    background-color: $color-white;

    cursor: pointer;

    position: relative;

    &__image {
        width: 100%;
        height: 65%;

        border-radius: 16px;
    }
    &__text-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        width: 100%;
        height: 35%;

        gap: 12px;

        &__title {
            font-family: 'NanumSquareNeo-Variable';
            font-weight: 700;
            font-size: 1em;
        }
        &__location {
            font-family: 'LeferiPoint-WhiteObliqueA';
            font-size: 12px;

            i {
                color: $color-pupple;
            }
        }
    }
}
.bookmark {
    position: absolute;
    right: 25px;

    font-size: 1.5em;
    color: $color-orange;
}
</style>
