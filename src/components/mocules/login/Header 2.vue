<template>
    <header class="header">
        <LoginTextBox />
        <div class="header__info-box">
            <span class="header__info-box__icon-box">
                <i class="fa-solid fa-location-dot"></i>
                <span class="text">Seoul</span>
            </span>
            <span class="header__info-box__icon-box">
                <i class="fa-solid fa-calendar-days"></i>
                <span class="text">7-3 Apr 2022</span>
            </span>
        </div>
    </header>
</template>

<script>
import LoginTextBox from '~/components/atoms/login/TextBox.vue';

export default {
    components: { LoginTextBox },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 100%;

    gap: 16px;

    margin-top: 64px;

    &__info-box {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        width: 100%;

        gap: 16px;

        color: $color-white;

        &__icon-box {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            gap: 8px;
        }
    }
}
.text {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: 4px;

    font-size: 1em;
}
</style>
