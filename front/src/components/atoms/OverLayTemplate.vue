<template>
    <div class="overlay-template">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.overlay-template {
    width: 100%;
    height: 100%;

    background-color: $color-overlayout;
}
</style>
