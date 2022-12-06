<template>
    <div class="search">
        <div class="search__input-box">
            <i class="fa-solid fa-location-dot"></i>
            <input type="text" placeholder="지역을 검색해주세요." class="search__input-box__input" />
        </div>
        <HomeFilterButton />
    </div>
</template>

<script>
import HomeFilterButton from '~/components/atoms/home/FilterButton.vue';

export default {
    components: { HomeFilterButton },
};
</script>

<style lang="scss" sco FilterButtonped>
@import '~/assets/styles/main.scss';

.search {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 50px;

    gap: 16px;

    &__input-box {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        width: 80%;
        height: 100%;

        border-radius: 24px;
        background-color: whitesmoke;

        i {
            margin: 0 8px 0 16px;
            font-size: 1.25em;
            color: $color-gray;
        }
        &__input {
            outline: none;
            border: 0;
            background: transparent;

            font-size: 1em;
            color: $color-gray;
        }
    }
}
</style>
