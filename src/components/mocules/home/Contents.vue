<template>
    <div class="contents">
        <HomeActivityFilter />
        <div class="contents__card-box">
            <HomeCard />
            <HomeCard />
        </div>
    </div>
</template>

<script>
import HomeActivityFilter from '~/components/mocules/home/ActivityFilter.vue';
import HomeCard from '~/components/mocules/home/Card.vue';

export default { components: { HomeActivityFilter, HomeCard } };
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.contents {
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 8px;

    &__card-box {
        display: flex;
        align-items: center;

        padding: 10px 10px 10px 0;
        gap: 20px;

        overflow: scroll;

        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }
}
</style>
