<template>
    <button :data-theme="theme" class="button">{{ label }}</button>
</template>

<script>
export default {
    props: {
        theme: {
            /**@type {import("vue").PropType<Theme>} */
            type: String,
            required: false,
            default: 'orange',
        },
        label: {
            type: String,
            required: false,
        },
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.button {
    outline: none;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    padding: 12px;

    border-radius: 12px;

    font-family: 'Pretendard-Regular';
    font-weight: 700;
    font-size: 1.25em;

    cursor: pointer;

    &[data-theme='orange'] {
        background-color: $color-orange;
        color: $color-white;
    }
}
</style>
