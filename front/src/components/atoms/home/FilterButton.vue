<template>
    <div class="filter-button">
        <i class="fa-solid fa-sliders"></i>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.filter-button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    border-radius: 50%;
    background-color: $color-pupple;

    cursor: pointer;

    i {
        font-size: 1.2em;
        color: $color-white;
    }
}
</style>
