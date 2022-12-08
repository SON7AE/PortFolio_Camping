<template>
    <header class="header">
        <div class="header__navigation">
            <button class="header__navigation__button">
                <i class="fa-solid fa-burger"></i>
                <v-tooltip activator="parent" location="end" class="header__navigation__button__tooltip">아직 추가된 기능이 없습니다.</v-tooltip>
            </button>
        </div>
        <div class="header__text-box">
            <span class="header__text-box__nickname">Hello, Marco</span>
            <span class="header__text-box__title">
                Good Morning!
                <img src="~/assets/images/morning.png" alt="" class="header__text-box__title__image" />
            </span>
        </div>
        <HomeSearch />
        <!-- OVERLAYS MENU COMPONENT -->
        <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props"> {{ label ? `반경 ${label}km 이내` : `반경 10km 이내` }} </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(filter, index) in filters" :key="index">
                    <v-list-item-title @click="sendEvent(filter)">반경 {{ filter }}km 이내</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </header>
</template>

<script>
import HomeSearch from '~/components/atoms/home/Search.vue';
import { ref } from '@vue/reactivity';

export default {
    components: { HomeSearch },
    setup() {
        const label = ref('');
        const filters = [10, 20, 30, 40, 50];

        const sendEvent = (value) => {
            label.value = value;
        };

        return { label, filters, sendEvent };
    },
};
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;

    &__navigation {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        &__button {
            outline: 0;
            border: 0;

            font-size: 2em;
            background: transparent;

            cursor: pointer;

            &__tooltip {
                font-family: 'Pretendard-Regular';
            }
        }
    }
    &__text-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        gap: 8px;
        margin: 48px 0 16px;

        &__nickname {
            font-family: 'LINESeedKR-Bd';
            font-size: 2rem;
        }
        &__title {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            gap: 4px;

            font-family: 'Pretendard-Regular';

            &__image {
                width: 32px;
            }
        }
    }
}
.v-btn {
    width: 100%;
    height: 40px;

    border-radius: 24px;

    font-family: 'Pretendard-Regular' !important;
    font-weight: 600;

    margin-top: 16px;
}
.v-list {
    margin-top: 8px;
}
</style>
