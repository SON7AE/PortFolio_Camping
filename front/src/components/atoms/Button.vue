<template>
    <RouterLink :data-theme="theme" :to="path" class="button">{{ label }}</RouterLink>
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
        path: {
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

    padding: 16px 12px;

    border-radius: 12px;

    font-family: 'Pretendard-Regular';
    font-weight: 700;
    font-size: 1.25em;

    text-decoration: none;

    cursor: pointer;

    &[data-theme='orange'] {
        background-color: $color-orange;
        color: $color-white;
    }
    &[data-theme='pupple'] {
        background-color: $color-pupple;
        color: $color-white;
    }
}
</style>
