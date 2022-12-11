<template>
    <div class="skeleton">
        <div class="skeleton__image"></div>
        <div class="skeleton__text-box">
            <div class="skeleton__text-box__name"></div>
            <div class="skeleton__text-box__address"></div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

@keyframes skelton-loading {
    0% {
        background-position: 50% 0;
    }
    100% {
        background-position: -150% 0;
    }
}

.skeleton {
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

    &__image {
        width: 100%;
        height: 70%;

        border-radius: 16px;

        background: linear-gradient(to right, #d6d7d8 0%, #e2e3e4 10%, #d6d7d8 20%, #d6d7d8 100%);
        background-size: 200% 100%;
        animation: skelton-loading 1.2s linear infinite;
    }
    &__text-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        width: 100%;
        height: 30%;

        gap: 12px;
        margin-top: 19px;

        &__name {
            width: 100%;
            height: 14px;
            border-radius: 8px;
            background: linear-gradient(to right, #d6d7d8 0%, #e2e3e4 10%, #d6d7d8 20%, #d6d7d8 100%);
            background-size: 200% 100%;
            animation: skelton-loading 1.2s linear infinite;
        }
        &__address {
            width: 100%;
            height: 12px;
            border-radius: 8px;
            background: linear-gradient(to right, #d6d7d8 0%, #e2e3e4 10%, #d6d7d8 20%, #d6d7d8 100%);
            background-size: 200% 100%;
            animation: skelton-loading 1.2s linear infinite;
        }
    }
}
</style>
