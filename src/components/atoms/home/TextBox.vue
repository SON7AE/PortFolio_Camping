<template>
    <div class="text-box">
        <span class="text-box__title">Open</span>
        <span class="text-box__title">GoCamping App</span>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.text-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    gap: 4px;

    &__title {
        font-family: 'Y_Spotlight';
        font-size: 2em;

        color: $color-white;
    }
}
</style>
