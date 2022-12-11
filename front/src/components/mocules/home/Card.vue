<template>
    <RouterLink :to="`/detail/${card.id}`" class="card">
        <i class="fa-solid fa-bookmark bookmark"></i>
        <img :src="card.sFacilityImageUrl ? card.sFacilityImageUrl : 'src/assets/images/defaultImage.png'" alt="" class="card__image" />
        <div class="card__text-box">
            <span class="card__text-box__title">{{ card.sFacilityName }}</span>
            <span class="card__text-box__location">
                <i class="fa-solid fa-location-dot"></i>
                {{ card.sFacilityAddress }}
            </span>
        </div>
    </RouterLink>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: false,
        },
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.card {
    display: flex;
    flex-direction: column;

    width: 240px;
    min-width: 240px;
    height: 260px;

    padding: 0 10px;

    border-radius: 16px;
    border: 1px solid rgba($color-gray, 0.1);
    box-shadow: 3px 3px 3px $color-gray;
    background-color: $color-white;

    text-decoration: none;

    cursor: pointer;

    position: relative;

    &__image {
        width: 100%;
        height: 70%;

        border-radius: 16px;
    }
    &__text-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        width: 100%;
        height: 30%;

        gap: 12px;
        margin-top: 19px;

        color: $color-black;

        &__title {
            font-family: 'NanumSquareNeo-Variable';
            font-weight: 700;
            font-size: 14px;
        }
        &__location {
            font-family: 'LeferiPoint-WhiteObliqueA';
            font-size: 12px;
            line-height: 1.2;

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
