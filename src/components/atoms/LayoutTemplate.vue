<template>
    <div class="layout-template">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.layout-template {
    width: 390px;
    height: 844px;

    margin: auto;

    border-radius: 32px;
    background-color: rgba(245, 245, 245, 0.393);
}
</style>
