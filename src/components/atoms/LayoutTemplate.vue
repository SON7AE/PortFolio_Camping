<template>
    <div class="layout-template">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.layout-template {
    width: 390px;
    height: 844px;

    margin: auto;

    border-radius: 32px;
    border: 1px solid rgb(233, 233, 233);

    background: linear-gradient(white, rgb(248, 248, 248));
}
</style>
