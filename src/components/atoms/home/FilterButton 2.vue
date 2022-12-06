<template>
    <div class="filter-button"></div>
</template>

<script>
export default {
    setup() {
        const items = [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' }];

        return {
            items,
        };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.filter-button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    border-radius: 50%;
    background-color: aqua;
}
</style>
