<template>
    <div class="contents">
        <HomeActivityFilter />
    </div>
</template>

<script>
import HomeActivityFilter from '~/components/mocules/home/ActivityFilter.vue';

export default { components: { HomeActivityFilter } };
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.contents {
    display: flex;
    flex-direction: column;

    width: 100%;
}
</style>
