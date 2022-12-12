<template>
    <div :data-size="size" class="icon">
        <i :data-theme="theme" :class="`fa-solid ${icon}`"></i>
    </div>
</template>

<script>
export default {
    props: {
        theme: {
            /**@type {import("vue").PropType<Theme>} */
            type: String,
            required: false,
            /**@type {Theme} */
            default: 'black',
        },
        icon: {
            type: String,
            required: false,
        },
        size: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    border-radius: 50%;
    border: 1px solid rgba($color-gray, 0.1);
    background-color: $color-white;

    &[data-size='large'] {
        width: 40px;
        min-width: 40px;
        height: 40px;
        border: 1px solid rgba($color-gray, 0.2);
    }
}
.fa-solid {
    color: $color-black;

    &[data-theme='black'] {
        color: $color-black;
    }
    &[data-theme='orange'] {
        color: $color-orange;
    }
    &[data-theme='red'] {
        color: $color-red;
    }
}
</style>
